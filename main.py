

import requests
import json
import os
from datetime import datetime
from time import sleep
from random import randint

def get_posts(subreddit, limit=5, time_filter='month'):
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
    timestamp = datetime.now().strftime('%Y-%m-%d-%H-%M-%S')
    filename = f'data/{subreddit}/{timestamp}.json'
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

def main():
    subreddit = 'costa'  # Replace with your subreddit of choice
    posts = get_posts(subreddit, limit=5, time_filter='month')
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
    save_to_json(all_data, subreddit)
    print(f"Scraped data saved for subreddit: {subreddit}")

if __name__ == '__main__':
    main()
