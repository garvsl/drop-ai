import os
import json
from openai import OpenAI
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

def generate_reply(user_data, email_data):
    email_data = json.loads(email_data)
    
    sender = email_data['sender']['name']
    subject = email_data['subject']
    original_message = email_data['payload']['parts'][0]['parts'][0]['content']

    context = f"""
    Original email:
    From: {sender}
    Subject: {subject}
    Message: {original_message}

    User data:
    {json.dumps(user_data, indent=2)}

    Generate a professional and contextually appropriate reply to this email. 
    The reply should:
    1. Address the sender by name
    2. Reference the original email's content
    3. Provide a clear and concise response
    4. Use a tone appropriate for the email's context
    5. Include any necessary information from the user data
    6. End with a suitable sign-off
    7. Not include any private information, like address, phone number, and drivers license id etc
    """

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are an AI assistant tasked with drafting email replies."},
            {"role": "user", "content": context}
        ],
        temperature=0.7
    )

    reply_text = response.choices[0].message.content

    print(reply_text)
    return reply_text
