import os
import requests

API_KEY = "AIzaSyCni93ouQtPm53fRr650mDhjXJjFzWvIIs"

body = {
  "document": {
    "type": "PLAIN_TEXT",
    "content": "The service was terrible. the movie was amazing.",
  },
  "encodingType": "NONE"
}

response = requests.post(f"https://language.googleapis.com/v2/documents:analyzeSentiment?key={API_KEY}", json = body )


# Output sentiment score and magnitude
print(response.text)