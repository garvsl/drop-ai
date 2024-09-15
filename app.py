import os
from openai import OpenAI

client = OpenAI(
    # This is the default and can be omitted
    api_key=os.environ.get("OPENAI_API_KEY"),
)
import json


def process_email(email_data):
    prompt = f"""
Analyze the following email and extract the requested information. 
Provide the output in JSON format with the following fields:
- sender_name: The full name of the sender
- sender_email: The email address of the sender
- recipients: A list of recipient email addresses
- subject: The subject line of the email
- date: The date the email was sent (in YYYY-MM-DD format)
- content_summary: A brief summary containing key information of the email content (max 50 words)
- attachments: A list of attachment filenames, and links.

If any field is not found in the email, use null as the value.

Email data:
{email_data}

Example output:
{{
  "sender_name": "John Doe",
  "sender_email": "johndoe@example.com",
  "recipients": ["recipient1@example.com", "recipient2@example.com"],
  "subject": "Meeting agenda",
  "date": "2024-09-14",
  "content_summary": "Reminder about tomorrow's team meeting and attached agenda.",
  "attachments": ["agenda.pdf: https://drive.google.com/uc?export=download&id=1sydBd9U0gPnVQoNJgmgII3B3VgY9fg6M", "presentation.pptx"]
}}

Please provide the extracted information in the same JSON format:
"""

    response = client.chat.completions.create(model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant that extracts information from emails."},
        {"role": "user", "content": prompt}
    ],
    temperature=0.2)

    result = json.loads(response.choices[0].message.content)
    return result


email_data = json.dumps({
  "id": "REDACTED",
  "sender": {
    "name": "Marvin von Hagen",
    "email": "hagen@mit.edu"
  },
  "recipients": [
    "interactioncocalifornia@gmail.com"
  ],
  "cc": [],
  "subject": "[HackMIT-hard] Bill of Sale",
  "snippet": "Hey hackers, Attached, you can find the harder bill of sale form. Please send it back filled out – Happy hacking! Cheers, Marvin",
  "payload": {
    "partId": "",
    "mimeType": "multipart/mixed",
    "filename": "",
    "content": "",
    "headers": [
      "Delivered-To:interactioncocalifornia@gmail.com",
      "Received:by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 23:23:41 -0700 (PDT)",
      "X-Google-Smtp-Source:REDACTED",
      "X-Received:by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 23:23:40 -0700 (PDT)",
      "ARC-Seal:i=1; a=rsa-sha256; t=1726295020; cv=none; d=google.com; s=arc-20240605; b=REDACTED",
      "ARC-Message-Signature:i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20240605; h=to:subject:message-id:date:from:mime-version:dkim-signature; bh=REDACTED; fh=REDACTED; b=REDACTED",
      "ARC-Authentication-Results:i=1; mx.google.com; dkim=pass header.i=@mit.edu header.s=outgoing header.b=REDACTED; spf=pass (google.com: domain of hagen@mit.edu designates 18.9.28.11 as permitted sender) smtp.mailfrom=hagen@mit.edu; dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=mit.edu",
      "Return-Path:<hagen@mit.edu>",
      "Received:from outgoing.mit.edu (outgoing-auth-1.mit.edu. [18.9.28.11]) by mx.google.com with ESMTPS id REDACTED for <interactioncocalifornia@gmail.com> (version=TLS1_2 cipher=ECDHE-ECDSA-AES128-GCM-SHA256 bits=128/128); Fri, 13 Sep 2024 23:23:40 -0700 (PDT)",
      "Received-SPF:pass (google.com: domain of hagen@mit.edu designates 18.9.28.11 as permitted sender) client-ip=18.9.28.11;",
      "Authentication-Results:mx.google.com; dkim=pass header.i=@mit.edu header.s=outgoing header.b=REDACTED; spf=pass (google.com: domain of hagen@mit.edu designates 18.9.28.11 as permitted sender) smtp.mailfrom=hagen@mit.edu; dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=mit.edu",
      "Received:from mail-ej1-f41.google.com (mail-ej1-f41.google.com [209.85.218.41]) (authenticated bits=0) (User authenticated as vonhagen@ATHENA.MIT.EDU) by outgoing.mit.edu (8.14.7/8.12.4) with ESMTP id REDACTED (version=TLSv1/SSLv3 cipher=AES128-GCM-SHA256 bits=128 verify=NOT) for <interactioncocalifornia@gmail.com>; Sat, 14 Sep 2024 02:23:38 -0400",
      "DKIM-Signature:v=1; a=rsa-sha256; c=relaxed/relaxed; d=mit.edu; s=outgoing; t=1726295020; bh=REDACTED; h=MIME-Version:From:Date:Message-ID:Subject:Content-Type; b=REDACTED",
      "Received:by mail-ej1-f41.google.com with SMTP id REDACTED for <interactioncocalifornia@gmail.com>; Fri, 13 Sep 2024 23:23:38 -0700 (PDT)",
      "X-Gm-Message-State:REDACTED",
      "X-Received:by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 23:23:36 -0700 (PDT)",
      "MIME-Version:1.0",
      "From:Marvin von Hagen <hagen@mit.edu>",
      "Date:Sat, 14 Sep 2024 02:23:00 -0400",
      "X-Gmail-Original-Message-ID:<REDACTED>",
      "Message-ID:<REDACTED>",
      "Subject:[HackMIT-hard] Bill of Sale",
      "To:interactioncocalifornia@gmail.com",
      "Content-Type:multipart/mixed; boundary=\"0000000000003f385506220e614b\""
    ],
    "parts": [
      {
        "partId": "0",
        "mimeType": "multipart/alternative",
        "filename": "",
        "content": "",
        "headers": [
          "Content-Type:multipart/alternative; boundary=\"0000000000003f385406220e6149\""
        ],
        "parts": [
          {
            "partId": "0.0",
            "mimeType": "text/plain",
            "filename": "",
            "content": "Hey hackers,\r\n\r\nAttached, you can find the harder bill of sale form.\r\n\r\nPlease send it back filled out – Happy hacking!\r\n\r\nCheers,\r\nMarvin\r\n",
            "headers": [
              "Content-Type:text/plain; charset=\"UTF-8\"",
              "Content-Transfer-Encoding:quoted-printable"
            ]
          },
          {
            "partId": "0.1",
            "mimeType": "text/html",
            "filename": "",
            "content": "<div dir=\"ltr\"><div id=\"gmail-:4qs\" class=\"gmail-ii gmail-gt\" style=\"direction:ltr;margin:8px 0px 0px;padding:0px;font-size:0.875rem;overflow-x:hidden;font-family:&quot;Google Sans&quot;,Roboto,RobotoDraft,Helvetica,Arial,sans-serif\"><div id=\"gmail-:4rt\" class=\"gmail-a3s gmail-aiL\" style=\"direction:initial;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:small;line-height:1.5;font-family:Arial,Helvetica,sans-serif;overflow:auto hidden\"><div dir=\"ltr\">Hey hackers,<div><br></div><div>Attached, you can find the harder bill of sale form.</div><div><br></div><div>Please send it back filled out – Happy hacking!</div><div><br></div><div>Cheers,</div><div>Marvin</div></div></div></div></div>\r\n",
            "headers": [
              "Content-Type:text/html; charset=\"UTF-8\"",
              "Content-Transfer-Encoding:quoted-printable"
            ]
          }
        ]
      },
      {
        "partId": "1",
        "mimeType": "application/pdf",
        "filename": "hard_scanned.pdf",
        "content": "",
        "headers": [
          "Content-Type:application/pdf; name=\"hard_scanned.pdf\"",
          "Content-Disposition:attachment; filename=\"hard_scanned.pdf\"",
          "Content-Transfer-Encoding:base64",
          "Content-ID:<f_m11rfmap0>",
          "X-Attachment-Id:f_m11rfmap0"
        ]
      },
      {
        "partId": "2",
        "mimeType": "application/pdf",
        "filename": "hard-pdf.pdf",
        "content": "",
        "headers": [
          "Content-Type:application/pdf; name=\"hard-pdf.pdf\"",
          "Content-Disposition:attachment; filename=\"hard-pdf.pdf\"",
          "Content-Transfer-Encoding:base64",
          "Content-ID:<f_m11rat011>",
          "X-Attachment-Id:f_m11rat011"
        ],
        "attachmentLink": "https://drive.google.com/uc?export=download&id=1sydBd9U0gPnVQoNJgmgII3B3VgY9fg6M"
      }
    ]
  }
})
# extracted_info = process_email(email_data)
# print(json.dumps(extracted_info, indent=2))

from PyPDFForm import PdfWrapper

pdf_form_schema = PdfWrapper("easy-pdf.pdf").schema

print(json.dumps(pdf_form_schema, indent=4, sort_keys=True))