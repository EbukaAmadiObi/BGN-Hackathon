
'''
import requests
import re
import json

API_KEY = "AIzaSyCni93ouQtPm53fRr650mDhjXJjFzWvIIs"

class BusinessReviewAnalyzer:
    def __init__(self):
        # Predefined categories and keywords associated with them
        self.categories = {
            'Flavor': ['taste', 'sweet', 'bitter', 'flavor', 'flavours', 'delicious', 'disgusting', 'good', 'bad'],
            'Service': ['barista', 'service', 'staff', 'wait', 'rude', 'helpful', 'friendly'],
            'Ingredients': ['ingredient', 'tea bag', 'syrup', 'sugar', 'lemon', 'peach', 'berry'],
            'Price/Value': ['price', 'expensive', 'cheap', 'worth', 'cost', 'value'],
            'Presentation/Appearance': ['color', 'red', 'orange', 'brown', 'appearance', 'size', 'look'],
        }
        self.total_mentions = 0
        self.sentiment_scores = []
        self.key_topics = {category: [] for category in self.categories}
    
    def preprocess_text(self, text):
        """
        Clean and normalize text for analysis.
        """
        text = re.sub(r'[^\w\s]', '', text.lower())  # Lowercase and remove punctuation
        return text
    
    def gcp_analyze_sentiment(self, text):
        """
        Use Google Cloud NLP API to analyze sentiment.
        :param text: The text to analyze.
        :return: Sentiment score and magnitude.
        """
        body = {
            "document": {
                "type": "PLAIN_TEXT",
                "content": text,
            },
            "encodingType": "NONE"
        }

        response = requests.post(f"https://language.googleapis.com/v1/documents:analyzeSentiment?key={API_KEY}",
                                 json=body)
        sentiment_result = response.json()

        sentiment_score = sentiment_result['documentSentiment']['score']
        return sentiment_score
    
    def assign_categories(self, text):
        """
        Assign predefined categories to a review/comment based on keyword matching.
        :param text: The text to classify.
        :return: List of assigned categories.
        """
        assigned_categories = []
        for category, keywords in self.categories.items():
            for keyword in keywords:
                if keyword in text:
                    assigned_categories.append(category)
                    self.key_topics[category].append(text)
                    break  # Stop after first match to avoid duplicates
        return assigned_categories

    def analyze_post(self, post):
        """
        Analyze a post and its comments for sentiment and categories.
        :param post: The post JSON object.
        """
        all_texts = [post['post_body']]  # Include post body

        # Collect all comments and replies
        def gather_comments(comments):
            for comment in comments:
                all_texts.append(comment['body'])
                if 'replies' in comment and comment['replies']:
                    gather_comments(comment['replies'])
        
        gather_comments(post['comments'])

        for text in all_texts:
            clean_text = self.preprocess_text(text)
            self.total_mentions += 1  # Count as relevant
            sentiment_score = self.gcp_analyze_sentiment(clean_text)  # Get sentiment from GCP
            self.sentiment_scores.append(sentiment_score)
            self.assign_categories(clean_text)  # Classify text into categories
    
    def calculate_overall_sentiment(self):
        """
        Calculate the overall sentiment score.
        """
        if not self.sentiment_scores:
            return 'neutral'
        
        avg_sentiment = sum(self.sentiment_scores) / len(self.sentiment_scores)
        if avg_sentiment > 0:
            return 'positive'
        elif avg_sentiment < 0:
            return 'negative'
        else:
            return 'neutral'
    
    def analyze(self, data):
        """
        Analyze the entire dataset.
        :param data: The JSON data representing Reddit conversations.
        :return: Summary of the analysis.
        """
        for post in data:
            self.analyze_post(post)
        
        overall_sentiment = self.calculate_overall_sentiment()

        # Create a summary report
        report = {
            'total_mentions': self.total_mentions,
            'overall_sentiment': overall_sentiment,
            'key_topics': {category: len(texts) for category, texts in self.key_topics.items()},
            'example_comments_per_topic': {category: texts[:3] for category, texts in self.key_topics.items()}  # First 3 comments for each topic
        }

        return report


# Example usage
if __name__ == "__main__":
    # Load the sample JSON data (replace this with your actual data source)
    with open('data/costa/2024-10-13-02-06-33.json', 'r') as f:
        data = json.load(f)

    # Initialize analyzer
    analyzer = BusinessReviewAnalyzer()

    # Analyze the Reddit conversations
    result = analyzer.analyze(data)

    # Print the analysis result
    print(json.dumps(result, indent=4))
'''


