
# import google.generativeai as genai
# import os

# API_KEY="AIzaSyDtuCxOxpMerj1tQmYx99KVpFQEOSDJy9M"

# genai.configure(api_key=API_KEY)

# model = genai.GenerativeModel("gemini-1.5-flash")
# response = model.generate_content("Write a very short story about a magic backpack.")
# print(response.text)


import google.generativeai as genai
import streamlit as st
import pathlib

media = pathlib.Path(__file__).parents[1] / "BGN-Hackathon/data/costa"

# GCP Gemini API Key
API_KEY = "YOUR_GCP_API_KEY"  # Replace with your actual API key
API_KEY="AIzaSyDtuCxOxpMerj1tQmYx99KVpFQEOSDJy9M"


# Configure Gemini
genai.configure(api_key=API_KEY)

# Model setup (using Gemini 1.5 Flash model)
model = genai.GenerativeModel("gemini-1.5-flash")


# upload the file to gemini
report_file = genai.upload_file(media / "2024-10-13-10-12-53 [MConverter.eu].txt")


def generate_gemini_response(prompt, document=report_file):
    """
    Generate a response from the Gemini model.
    :param messages: List of message dictionaries containing user input and assistant responses.
    :return: Generated response from Gemini.
    """
    # Create a conversation history as a text string for Gemini

    # Generate a response from Gemini based on the conversation
    response = model.generate_content([prompt, document])
    return response.text if response  else "Sorry, I couldn't generate a response."

# Streamlit Sidebar for API Key input
with st.sidebar:
    st.title('🤖💬 Gemini Chatbot')
    if API_KEY:
        st.success('GCP Gemini API key already provided!', icon='✅')
    else:
        API_KEY = st.text_input('Enter GCP API token:', type='password')
        if not API_KEY:
            st.warning('Please enter your credentials!', icon='⚠️')
        else:
            st.success('Proceed to entering your prompt message!', icon='👉')

# Initialize chat history in session state
if "messages" not in st.session_state:
    st.session_state.messages = []

# Display chat history
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# Get user input
if prompt := st.chat_input("What would you like to ask?"):
    # Append user message to chat history
    st.session_state.messages.append({"role": "user", "content": prompt})
    
    # Display user message
    with st.chat_message("user"):
        st.markdown(prompt)
    
    # Generate response from Gemini
    with st.chat_message("assistant"):
        message_placeholder = st.empty()
        # full_response = generate_gemini_response(st.session_state.messages, report_file)
        full_response = generate_gemini_response(prompt, report_file)

        
        # Display assistant's response
        message_placeholder.markdown(full_response)
    
    # Append assistant's response to chat history
    st.session_state.messages.append({"role": "assistant", "content": full_response})
