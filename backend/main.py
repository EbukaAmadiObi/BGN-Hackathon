import requests
import json
import os
from datetime import datetime
from time import sleep
from random import randint
from flask import Flask, request, jsonify
from flask_cors import CORS
from Process_data import BusinessReviewAnalyzer

app = Flask(__name__)
CORS(app)

@app.route('/search', methods=['GET'])
def search():
    subreddit = request.args.get('subreddit', 'costa')  # Default to 'costa' if not provided

    filename = f'../backend/data/{subreddit}/{subreddit}_result.json'
    if os.path.exists(filename):
        print("Already analyzed ><><")
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)
            print("data loaded ><><", data)
        return jsonify(data)
    
    print(f"checking ><>< subreddit: {subreddit}")
    data = main_app(subreddit)  # Call main_app to get the data
    return jsonify(data)


def get_posts(subreddit, limit, time_filter='month'):
    headers = {'User-agent': 'Mozilla/5.0'}
    url = f'https://www.reddit.com/r/{subreddit}/top.json?limit={limit}&t={time_filter}'
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        posts = data['data']['children']
        return posts
    else:
        print(f"Failed to get subreddit data: {response.status_code}")
        return []

def get_post_data(permalink):
    headers = {'User-agent': 'Mozilla/5.0'}
    url = 'https://www.reddit.com' + permalink + '.json'
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        post_json = response.json()
        return post_json
    else:
        print(f"Failed to get post data: {response.status_code}")
        return None

def parse_post_json(post_json):
    post_data = post_json[0]['data']['children'][0]['data']
    post_body = post_data.get('selftext', '')
    post_title = post_data.get('title', '')
    post_user = post_data.get('author', '')
    post_time = post_data.get('created_utc', '')
    comments = post_json[1]['data']['children']
    comments_list = []

    def parse_comments(comments):
        comments_list = []
        for comment in comments:
            if comment['kind'] == 'more':
                continue  # Skip 'more' comments
            comment_data = comment['data']
            comment_body = comment_data.get('body', '')
            comment_user = comment_data.get('author', '')
            comment_time = comment_data.get('created_utc', '')
            replies = []
            if comment_data.get('replies'):
                if isinstance(comment_data['replies'], dict):
                    replies_data = comment_data['replies']['data']['children']
                    replies = parse_comments(replies_data)
            comments_list.append({
                'body': comment_body,
                'user': comment_user,
                'time': comment_time,
                'replies': replies
            })
        return comments_list

    comments_list = parse_comments(comments)

    return {
        'post_title': post_title,
        'post_body': post_body,
        'post_user': post_user,
        'post_time': post_time,
        'comments': comments_list
    }

def save_to_json(data, subreddit):
    """Save data to a JSON file in the data/{subreddit}/{timestamp}.json"""
    filename = f'data/{subreddit}/{subreddit}_data.json'
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

def main_app(subreddit):
    print(f"Getting data for subreddit: {subreddit}")
    posts = get_posts(subreddit, limit=2, time_filter='month')
    all_data = []
    for post in posts:
        post_data = post['data']
        permalink = post_data['permalink']
        post_json = get_post_data(permalink)
        if post_json:
            parsed_data = parse_post_json(post_json)
            all_data.append(parsed_data)
            # Sleep to respect Reddit's rate limits
            sleep(randint(1, 3))
    
    print(f"Saving data for subreddit: {subreddit}")
    
    save_to_json(all_data, subreddit)  # Optionally save data to JSON

    # Analyze the data
    analyzer = BusinessReviewAnalyzer()
    report = analyzer.analyze(all_data, subreddit)

    report_json = f'data/{subreddit}/{subreddit}_result.json'
    report_txt = f'data/{subreddit}/{subreddit}_result.txt'

    with open(report_json, 'w') as f:
        json.dump(report, f, indent = 4)

    # convert json file to text file
    with open(report_txt, 'w') as f:
        f.write(json.dumps(report, indent = 4))

    print("sending data to frontend....")
    # Return the analysis report as json to the Flask route
    return report
    

if __name__ == '__main__':
    app.run(port=5000, debug=True)
