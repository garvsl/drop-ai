import json
from fill_out_document import process_email


def execute_action(classification_result, user_data, email_data, ocr_text=None):
    # Handling document-related actions (e.g., contracts, agreements)

    if "Complete or sign" in classification_result:
            return process_email(email_data, user_data, ocr_text)
    # Handling replies
    # elif "Reply to the email" in classification_result:
    #     generate_reply(user_data, email_data)

    # # Handling meeting scheduling
    # elif "Schedule a meeting" in classification_result:
    #     schedule_meeting(user_data, email_data)

    # # Handling follow-ups
    # elif "Follow up" in classification_result:
    #     send_follow_up_email(user_data, email_data)

    # # Catch-all for unrecognized actions
    # else:
    #     print(f"Action not recognized or no action required for classification: {classification_result}")

