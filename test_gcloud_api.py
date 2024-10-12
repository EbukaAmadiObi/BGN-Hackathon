import os
import requests
import json

API_KEY = "AIzaSyCni93ouQtPm53fRr650mDhjXJjFzWvIIs"

#the review to be analysed
review = "The service was terrible. the movie was amazing. The trees were brown"

#body of the api call
body = {
  "document": {
    "type": "PLAIN_TEXT",
    "content": review,
  },
  "encodingType": "NONE"
}

#make call to analyze review sentiment and json parse
response = requests.post(f"https://language.googleapis.com/v2/documents:analyzeSentiment?key={API_KEY}", json = body)
parsed_response = json.loads(response.text)

"""
# ---------------------------- API RESPONSE SCHEMA --------------------------- #
response schema:
{
  "documentSentiment": {
    "magnitude": int,
    "score": int
  },
  "languageCode": "en",
  "sentences": [
    {
      "text": {
        "content": string,
        "beginOffset": -1
      },
      "sentiment": {
        "magnitude": float,
        "score": float
      }
    }
  ],
  "languageSupported": true
}
"""


#print response
print(response.text)

#list sentences
sentences = []
for sentence in parsed_response["sentences"]:
    #extract text, score and magnitude and append to sentences list
    text = sentence["text"]["content"]
    score = sentence["sentiment"]["score"]
    magnitude = sentence["sentiment"]["magnitude"]

    #make another api call for receiving main entity in sentence
    body = {
      "document": {
        "type": "PLAIN_TEXT",
        "content": text,
      },
      "encodingType": "NONE"
    }
    response = requests.post(f"https://language.googleapis.com/v2/documents:analyzeEntities?key={API_KEY}", json=body)

    topic = json.loads(response.text)["entities"][0]["name"]

    sentences.append({"topic":topic,"text":text,"score":score,"magnitude":magnitude})

print(sentences)