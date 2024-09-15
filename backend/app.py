from bs4 import BeautifulSoup
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import json
import os

from openai import OpenAI
from utils.classify_email import classification
from utils.select_action import execute_action
from selenium_driverless import webdriver
from selenium_driverless.types.by import By

app = Flask(__name__)
CORS(app)  # Enable CORS on your Flask app
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

@app.route('/process_email', methods=['POST', 'OPTIONS'])
def process_email_endpoint():
    # Handle preflight requests
    if request.method == 'OPTIONS':
        return jsonify({'message': 'Preflight check'}), 200

    data = request.get_json()

    if not data or 'email_data' not in data or 'user_data' not in data:
        return jsonify({'error': 'Invalid request, email_data and user_data are required.'}), 400

    email_data = data['email_data']
    user_data = data['user_data']
    email_data_json = json.dumps(email_data)
    classif = classification(email_data)
    result = execute_action(
        classif.get('classification'),
        user_data,
        email_data_json,
        classif.get('ocr')
    )
    print('finished')
    return jsonify({'result': result})

@app.route('/qu_call', methods=["POST", "OPTIONS"])
def qu_call():
    if request.method == 'OPTIONS':
        return jsonify({'message': 'Preflight check'}), 200

    data = request.get_json()

    if not data or 'email_data' not in data or 'user_data' not in data or 'quer' not in data:
        return jsonify({'error': 'Invalid request, email_data, user_data, and quer are required.'}), 400

    email_data = data['email_data']
    user_data = data['user_data']
    quer = data['quer']

    # Process the query
    response = process_query(quer, email_data, user_data)

    return jsonify({'result': response})

def process_query(quer, email_data, user_data):
    # Convert email_data and user_data to JSON strings for inclusion in the prompt
    email_data_str = json.dumps(email_data, indent=2)
    user_data_str = json.dumps(user_data, indent=2)

    # Construct the prompt
    prompt = f"""
You are an AI assistant helping a user with the following query:

"{quer}"

Use the email data and user data provided to generate a helpful response.

**Email Data**:
{email_data_str}

**User Data**:
{user_data_str}

Provide a clear and concise answer to the user's query, referencing relevant information from the email data and user data when appropriate.
"""

    # Call the OpenAI API
    try:
        api_response = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "You are a helpful assistant that answers user queries based on provided email data and user data."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.7
        )

        answer = api_response.choices[0].message.content.strip()
        return answer

    except Exception as e:
        print(f"Error calling OpenAI API: {e}")
        return "An error occurred while processing your request."


@app.route('/driver_call', methods=["POST", "OPTIONS"])
async def driver_call():
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')  
    # options.add_argument('--headless')

    async with webdriver.Chrome(options=options) as driver:
        await driver.get("https://skiplagged.com/flights/united-kingdom/istanbul/2024-11-04/2024-11-09", wait_load=True)
        
        print('logged in')
        await driver.sleep(5)
        try:
            elemOne = await driver.find_element(By.XPATH,'/html/body/section/div/div/section/div/div/div/div[2]/div/div[2]/div[3]/div[6]/div/div[2]/div[3]/p/span', timeout=10)
            print('elem one')
            elemOne = BeautifulSoup(await elemOne.source, 'html.parser').get_text(separator='\n', strip=True)
            print(elemOne)
        except:
            print('nuhh')
        # 
        await driver.sleep(5)


    return  {"result":f" - Hey Mehak, November is definitely a great time in Turkey. The weather is the best, and the prices to fly are very cheap! Based on the package you selected and the Clinics availability, the flight range that month is around {elemOne} - {elemOne + 100}"}
        


if __name__ == '__main__':
    app.run(debug=True)
