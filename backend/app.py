import json
from select_action import execute_action
import email_data
from classify_email import classification



user_data = {'name': 'John Doe', "Address": "123 Boulvard Ave", "Birthday": "Januaray 1st, 2000", "Driver's License ID": "0374795039"}

classif = classification(email_data.email_data)

executed = execute_action(classif.get('classification'), user_data, json.dumps(email_data.email_data), classif.get('ocr'))
print(executed)