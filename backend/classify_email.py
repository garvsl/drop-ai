import os
import json
import re
import email_data
from openai import OpenAI
from PyPDFForm import PdfWrapper
import requests
from pdf2image import convert_from_path
import pytesseract

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

def extract_attachments(email_content):

    email_dater = email_content
    payload = email_dater.get('payload')
    attachment_link = None

    if payload and 'parts' in payload:
            for part in payload['parts']:
                if 'attachmentLink' in part:
                    attachment_link = part['attachmentLink']
                    break


    if attachment_link:
        response = requests.get(attachment_link)
        if response.status_code == 200:
            file_name = "downloaded_attachment.pdf"
            with open(file_name, 'wb') as f:
                f.write(response.content)
            return file_name
        else:
            print(f"Failed to download attachment: {response.status_code}")
            return None
    return None

def clean_ocr_text(ocr_text):
 
    clean_text = re.sub(r'\s+', ' ', ocr_text).strip()
    return clean_text

def perform_ocr_on_pdf(pdf_path):

    try:
        pages = convert_from_path(pdf_path, 500) 
        extracted_text = ""
        
        for page in pages:
            text = pytesseract.image_to_string(page)
            extracted_text += text
        
        return extracted_text
    except Exception as e:
        print(f"OCR failed: {e}")
        return None

def classify_email(email_content, ocr_text=None):
    ocr_text_msg = f"**OCR Extracted Text from Attachment**:\n{ocr_text}" if ocr_text else ""
    
    msg = f"""
    You are an assistant that classifies email actions. Based on the email content below, classify whether the user needs to:
    - Sign a document (e.g., a bill of sale or agreement)
    - Check in for a flight
    - Fill a hackathon release form
    - Or any other action
    - Or none of the above.

    Focus on keywords such as "Bill of Sale", "Release Form", "Check-in", etc. If the document is a Bill of Sale, it should include details about selling or transferring ownership of something.

    **Email Content**:
    {email_content}

    {ocr_text_msg}
    """
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that classifies emails and documents."},
            {"role": "user", "content": msg}
        ],
        temperature=0.2
    )
    
    classification = response.choices[0].message.content
    return classification



def classification(email_content):
    attachment_path = extract_attachments(email_content)

    ocr_text = None
    if attachment_path:
        ocr_text = perform_ocr_on_pdf(attachment_path)
        ocr_text = clean_ocr_text(ocr_text)  

    classification_result = classify_email(email_content, ocr_text=ocr_text)
    return classification_result


classif = classification(email_data.email_data)
print(classif)