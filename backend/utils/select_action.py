# utils/select_action.py

from utils.fill_out_document import process_email
from utils.generate_reply import generate_reply

def execute_action(classification_result, user_data, email_data, ocr_text=None):
    if "Complete or sign" in classification_result:
        return process_email(email_data, user_data, ocr_text)
    elif "Reply to the email" in classification_result:
        return generate_reply(user_data, email_data)
    else:
        return f"Action not recognized or no action required for classification: {classification_result}"
