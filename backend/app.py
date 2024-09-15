import os
import json
from openai import OpenAI
from PyPDFForm import PdfWrapper
import requests
import email_data


client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)


def process_email(email_data, user_data):
    
  email_data = json.loads(email_data)
  payload = email_data.get('payload')
  pdf_link = None
  if payload and 'parts' in payload:
    for part in payload['parts']:
      if 'attachmentLink' in part:
          pdf_link = part['attachmentLink']
          break
      
    if not pdf_link:
        return "No PDF attachment found in the email."

      
  response = requests.get(pdf_link)
  if response.status_code != 200:
        return f"Failed to download PDF: {response.status_code}"

  with open("mypdf.pdf", 'wb') as f:
    f.write(response.content)

  pdf_form_schema = PdfWrapper("mypdf.pdf").schema
  form_data = json.dumps(pdf_form_schema, indent=4, sort_keys=True)
  # print(form_data)

  msg = f"""
  Your task is to extract the relevant information from the user data and map it to the required form fields.
  Below is the user data followed by the form fields we need to fill out. There is also the email data which is the one who sent the form to be filled out to the user.

  **Sender Email Data**:
  {email_data}

  **Received User Data**:
  {user_data}

  **Form Fields**:
  {form_data}

  Please create a JSON object that corresponds to the form field names and fill in the values based on the email data. Ensure that each field in the form is filled out using the relevant data from the email, and if any data is missing, leave it as an empty string.
  """

  response = client.chat.completions.create(model="gpt-4",
      messages=[
          {"role": "system", "content": "You are a helpful assistant that extracts information from emails."},
          {"role": "user", "content": msg}
      ],
      temperature=0.2)

  result = response.choices[0].message.content

  return result
''
user_data = {'name': 'John Doe', "Address": "123 Boulvard Ave", "Birthday": "Januaray 1st, 2000", "Driver's License ID": "0374795039"}
email_data = json.dumps(email_data.email_data)

extracted_info = process_email(email_data, user_data)
print(extracted_info)






