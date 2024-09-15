"use client";
import { useState } from "react";

const datas = [
  {
    id: "1",
    sender: {
      name: "Marvin von Hagen",
      email: "hagen@mit.edu",
    },
    recipients: ["interactioncocalifornia@gmail.com"],
    cc: [],
    subject: "[HackMIT-hard] Bill of Sale",
    snippet:
      "Hey hackers, Attached, you can find the harder bill of sale form. Please send it back filled out – Happy hacking! Cheers, Marvin",
    payload: {
      partId: "",
      mimeType: "multipart/mixed",
      filename: "",
      content: "",
      headers: [
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
        'Content-Type:multipart/mixed; boundary="0000000000003f385506220e614b"',
      ],
      parts: [
        {
          partId: "0",
          mimeType: "multipart/alternative",
          filename: "",
          content: "",
          headers: [
            'Content-Type:multipart/alternative; boundary="0000000000003f385406220e6149"',
          ],
          parts: [
            {
              partId: "0.0",
              mimeType: "text/plain",
              filename: "",
              content:
                "Hey hackers,\r\n\r\nAttached, you can find the harder bill of sale form.\r\n\r\nPlease send it back filled out – Happy hacking!\r\n\r\nCheers,\r\nMarvin\r\n",
              headers: [
                'Content-Type:text/plain; charset="UTF-8"',
                "Content-Transfer-Encoding:quoted-printable",
              ],
            },
            {
              partId: "0.1",
              mimeType: "text/html",
              filename: "",
              content:
                '<div dir="ltr"><div id="gmail-:4qs" class="gmail-ii gmail-gt" style="direction:ltr;margin:8px 0px 0px;padding:0px;font-size:0.875rem;overflow-x:hidden;font-family:&quot;Google Sans&quot;,Roboto,RobotoDraft,Helvetica,Arial,sans-serif"><div id="gmail-:4rt" class="gmail-a3s gmail-aiL" style="direction:initial;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:small;line-height:1.5;font-family:Arial,Helvetica,sans-serif;overflow:auto hidden"><div dir="ltr">Hey hackers,<div><br></div><div>Attached, you can find the harder bill of sale form.</div><div><br></div><div>Please send it back filled out – Happy hacking!</div><div><br></div><div>Cheers,</div><div>Marvin</div></div></div></div></div>\r\n',
              headers: [
                'Content-Type:text/html; charset="UTF-8"',
                "Content-Transfer-Encoding:quoted-printable",
              ],
            },
          ],
        },
        {
          partId: "1",
          mimeType: "application/pdf",
          filename: "hard_scanned.pdf",
          content: "",
          headers: [
            'Content-Type:application/pdf; name="hard_scanned.pdf"',
            'Content-Disposition:attachment; filename="hard_scanned.pdf"',
            "Content-Transfer-Encoding:base64",
            "Content-ID:<f_m11rfmap0>",
            "X-Attachment-Id:f_m11rfmap0",
          ],
        },
        {
          partId: "2",
          mimeType: "application/pdf",
          filename: "hard-pdf.pdf",
          content: "",
          headers: [
            'Content-Type:application/pdf; name="hard-pdf.pdf"',
            'Content-Disposition:attachment; filename="hard-pdf.pdf"',
            "Content-Transfer-Encoding:base64",
            "Content-ID:<f_m11rat011>",
            "X-Attachment-Id:f_m11rat011",
          ],
          attachmentLink:
            "https://drive.google.com/uc?export=download&id=1sydBd9U0gPnVQoNJgmgII3B3VgY9fg6M",
        },
      ],
    },
  },
  {
    id: "2",
    sender: {
      name: "John Cena",
      email: "John@mit.edu",
    },
    recipients: ["kivanc@gmail.com"],
    cc: [],
    subject: "RE: Partnership",
    snippet: "Hey Kivanc, Id be very interested in the liposuction surgery! ",
    payload: {
      partId: "",
      mimeType: "multipart/mixed",
      filename: "",
      content: "",
      headers: [
        "Delivered-To:interactioncocalifornia@gmail.com",
        "Received:by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 23:23:41 -0700 (PDT)",
        "X-Google-Smtp-Source:REDACTED",
        "X-Received:by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 23:23:40 -0700 (PDT)",
        "ARC-Seal:i=1; a=rsa-sha256; t=1726295020; cv=none; d=google.com; s=arc-20240605; b=REDACTED",
      ],
      parts: [
        {
          partId: "0",
          mimeType: "multipart/alternative",
          filename: "",
          content: "",
          headers: [
            'Content-Type:multipart/alternative; boundary="0000000000003f385406220e6149"',
          ],
          parts: [
            {
              partId: "0.0",
              mimeType: "text/plain",
              filename: "",
              content:
                "Hey Kivanc, Id be very interested in the liposuction surgery!",
              headers: [
                'Content-Type:text/plain; charset="UTF-8"',
                "Content-Transfer-Encoding:quoted-printable",
              ],
            },
            {
              partId: "0.1",
              mimeType: "text/html",
              filename: "",
              content:
                '<div dir="ltr">Hey Kivanc, Id be very interested in the liposuction surgery!</div>\r\n',
              headers: [
                'Content-Type:text/html; charset="UTF-8"',
                "Content-Transfer-Encoding:quoted-printable",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "3",
    sender: {
      name: "Mehak fiza",
      email: "Mehakfiza@gmail.edu",
    },
    recipients: ["kivanc@gmail.com"],
    cc: [],
    subject: "RE: November",
    snippet: "Hey thanks for reaching out, I was actually interested in going",
    payload: {
      partId: "",
      mimeType: "multipart/mixed",
      filename: "",
      content: "",
      headers: [
        "Delivered-To:interactioncocalifornia@gmail.com",
        "Received:by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 23:23:41 -0700 (PDT)",
        "X-Google-Smtp-Source:REDACTED",
        "X-Received:by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 23:23:40 -0700 (PDT)",
        "ARC-Seal:i=1; a=rsa-sha256; t=1726295020; cv=none; d=google.com; s=arc-20240605; b=REDACTED",
      ],
      parts: [
        {
          partId: "0",
          mimeType: "multipart/alternative",
          filename: "",
          content: "",
          headers: [
            'Content-Type:multipart/alternative; boundary="0000000000003f385406220e6149"',
          ],
          parts: [
            {
              partId: "0.0",
              mimeType: "text/plain",
              filename: "",
              content:
                "Hey thanks for reaching out, I was actually interested in going this November. UK is coldest then, will let you know if anything changes in the future. Regards, Mehak fiza",
              headers: [
                'Content-Type:text/plain; charset="UTF-8"',
                "Content-Transfer-Encoding:quoted-printable",
              ],
            },
            {
              partId: "0.1",
              mimeType: "text/html",
              filename: "",
              content:
                '<div dir="ltr">Hey thanks for reaching out, I was actually interested in going this November.  UK is coldest then, will let you know if anything changes in the future. Regards, Mehak fiza!</div>\r\n',
              headers: [
                'Content-Type:text/html; charset="UTF-8"',
                "Content-Transfer-Encoding:quoted-printable",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "4",
    sender: {
      name: "Karina Pandher",
      email: "Karinpandher@gmail.edu",
    },
    recipients: ["kivanc@gmail.com"],
    cc: [],
    subject: "RE: Reschedule",
    snippet: "Hey, May I ask if you have today any later appointments please?",
    payload: {
      partId: "",
      mimeType: "multipart/mixed",
      filename: "",
      content: "",
      headers: [
        "Delivered-To: interactioncocalifornia@gmail.com",
        "Received: by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 23:23:41 -0700 (PDT)",
        "X-Google-Smtp-Source: REDACTED",
        "X-Received: by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 23:23:40 -0700 (PDT)",
        "ARC-Seal: i=1; a=rsa-sha256; t=1726295020; cv=none; d=google.com; s=arc-20240605; b=REDACTED",
      ],
      parts: [
        {
          partId: "0",
          mimeType: "multipart/alternative",
          filename: "",
          content: "",
          headers: [
            'Content-Type: multipart/alternative; boundary="0000000000003f385406220e6149"',
          ],
          parts: [
            {
              partId: "0.0",
              mimeType: "text/plain",
              filename: "",
              content:
                "Hey, May I ask if you have today any later appointments please? I have doctor appointment with my son at 1:45pm but would not be long if have any appointments at 2:30pm or 4pm? Kind regards, Karina Pandher",
              headers: [
                'Content-Type: text/plain; charset="UTF-8"',
                "Content-Transfer-Encoding: quoted-printable",
              ],
            },
            {
              partId: "0.1",
              mimeType: "text/html",
              filename: "",
              content:
                '<div dir="ltr">Hey, May I ask if you have today any later appointments please? I have doctor appointment with my son at 1:45pm but would not be long if have any appointments at 2:30pm or 4pm?  Kind regards, Karina Pandher</div>\r\n',
              headers: [
                'Content-Type: text/html; charset="UTF-8"',
                "Content-Transfer-Encoding: quoted-printable",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "5",
    sender: {
      name: "Kivanc",
      email: "kivanc@gmail.com",
    },
    recipients: ["Karinpandher@gmail.edu"],
    cc: [],
    subject: "Re: RE: Reschedule",
    snippet:
      "Hello Karina, I have an opening at 3:00 pm today. Would that time work for you?",
    payload: {
      partId: "",
      mimeType: "multipart/mixed",
      filename: "",
      content: "",
      headers: [
        "Delivered-To: Karinpandher@gmail.edu",
        "Received: by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 10:15:00 -0700 (PDT)",
        "X-Google-Smtp-Source: REDACTED",
        "X-Received: by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 10:14:59 -0700 (PDT)",
        "ARC-Seal: i=1; a=rsa-sha256; t=1726271699; cv=none; d=google.com; s=arc-20240605; b=REDACTED",
      ],
      parts: [
        {
          partId: "0",
          mimeType: "multipart/alternative",
          filename: "",
          content: "",
          headers: [
            'Content-Type: multipart/alternative; boundary="000000000000abcd1234567890ef"',
          ],
          parts: [
            {
              partId: "0.0",
              mimeType: "text/plain",
              filename: "",
              content:
                "Hello Karina,\n\nThank you for reaching out. I hope your son's appointment goes well. I have an opening at 3:00 pm today. Would that time work for you?\n\nBest regards,\nKivanc",
              headers: [
                'Content-Type: text/plain; charset="UTF-8"',
                "Content-Transfer-Encoding: quoted-printable",
              ],
            },
            {
              partId: "0.1",
              mimeType: "text/html",
              filename: "",
              content:
                '<div dir="ltr">Hello Karina,<div><br></div><div>Thank you for reaching out. I hope your son\'s appointment goes well. I have an opening at 3:00 pm today. Would that time work for you?</div><div><br></div><div>Best regards,<br>Kivanc</div></div>\r\n',
              headers: [
                'Content-Type: text/html; charset="UTF-8"',
                "Content-Transfer-Encoding: quoted-printable",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "6",
    sender: {
      name: "Karina Pandher",
      email: "Karinpandher@gmail.edu",
    },
    recipients: ["kivanc@gmail.com"],
    cc: [],
    subject: "Re: Re: RE: Reschedule",
    snippet:
      "Hi Kivanc, Yes, 3:00 pm works perfectly for me. I'll see you then.",
    payload: {
      partId: "",
      mimeType: "multipart/mixed",
      filename: "",
      content: "",
      headers: [
        "Delivered-To: kivanc@gmail.com",
        "Received: by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 10:20:00 -0700 (PDT)",
        "X-Google-Smtp-Source: REDACTED",
        "X-Received: by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 10:19:59 -0700 (PDT)",
        "ARC-Seal: i=1; a=rsa-sha256; t=1726271999; cv=none; d=google.com; s=arc-20240605; b=REDACTED",
      ],
      parts: [
        {
          partId: "0",
          mimeType: "multipart/alternative",
          filename: "",
          content: "",
          headers: [
            'Content-Type: multipart/alternative; boundary="000000000000abcd1234567890ef"',
          ],
          parts: [
            {
              partId: "0.0",
              mimeType: "text/plain",
              filename: "",
              content:
                "Hi Kivanc,\n\nThank you for getting back to me so quickly. Yes, 3:00 pm works perfectly for me. I'll see you then.\n\nWarm regards,\nKarina",
              headers: [
                'Content-Type: text/plain; charset="UTF-8"',
                "Content-Transfer-Encoding: quoted-printable",
              ],
            },
            {
              partId: "0.1",
              mimeType: "text/html",
              filename: "",
              content:
                '<div dir="ltr">Hi Kivanc,<div><br></div><div>Thank you for getting back to me so quickly. Yes, 3:00 pm works perfectly for me. I\'ll see you then.</div><div><br></div><div>Warm regards,<br>Karina</div></div>\r\n',
              headers: [
                'Content-Type: text/html; charset="UTF-8"',
                "Content-Transfer-Encoding: quoted-printable",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "7",
    sender: {
      name: "Kivanc",
      email: "kivanc@gmail.com",
    },
    recipients: ["Karinpandher@gmail.edu"],
    cc: [],
    subject: "Confirmation for 3:00 pm Appointment",
    snippet: "Dear Karina, I've updated your appointment to 3:00 pm today.",
    payload: {
      partId: "",
      mimeType: "multipart/mixed",
      filename: "",
      content: "",
      headers: [
        "Delivered-To: Karinpandher@gmail.edu",
        "Received: by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 10:25:00 -0700 (PDT)",
        "X-Google-Smtp-Source: REDACTED",
        "X-Received: by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 10:24:59 -0700 (PDT)",
        "ARC-Seal: i=1; a=rsa-sha256; t=1726272299; cv=none; d=google.com; s=arc-20240605; b=REDACTED",
      ],
      parts: [
        {
          partId: "0",
          mimeType: "multipart/alternative",
          filename: "",
          content: "",
          headers: [
            'Content-Type: multipart/alternative; boundary="000000000000abcd1234567890ef"',
          ],
          parts: [
            {
              partId: "0.0",
              mimeType: "text/plain",
              filename: "",
              content:
                "Dear Karina,\n\nGreat! I've updated your appointment to 3:00 pm today. Please let me know if there's anything else you need.\n\nSee you soon,\nKivanc",
              headers: [
                'Content-Type: text/plain; charset="UTF-8"',
                "Content-Transfer-Encoding: quoted-printable",
              ],
            },
            {
              partId: "0.1",
              mimeType: "text/html",
              filename: "",
              content:
                "<div dir=\"ltr\">Dear Karina,<div><br></div><div>Great! I've updated your appointment to 3:00 pm today. Please let me know if there's anything else you need.</div><div><br></div><div>See you soon,<br>Kivanc</div></div>\r\n",
              headers: [
                'Content-Type: text/html; charset="UTF-8"',
                "Content-Transfer-Encoding: quoted-printable",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "8",
    sender: {
      name: "Karina Pandher",
      email: "Karinpandher@gmail.edu",
    },
    recipients: ["kivanc@gmail.com"],
    cc: [],
    subject: "Re: Confirmation for 3:00 pm Appointment",
    snippet:
      "Hi Kivanc, Just wanted to let you know that I'm running a few minutes late.",
    payload: {
      partId: "",
      mimeType: "multipart/mixed",
      filename: "",
      content: "",
      headers: [
        "Delivered-To: kivanc@gmail.com",
        "Received: by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 14:50:00 -0700 (PDT)",
        "X-Google-Smtp-Source: REDACTED",
        "X-Received: by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 14:49:59 -0700 (PDT)",
        "ARC-Seal: i=1; a=rsa-sha256; t=1726286999; cv=none; d=google.com; s=arc-20240605; b=REDACTED",
      ],
      parts: [
        {
          partId: "0",
          mimeType: "multipart/alternative",
          filename: "",
          content: "",
          headers: [
            'Content-Type: multipart/alternative; boundary="000000000000abcd1234567890ef"',
          ],
          parts: [
            {
              partId: "0.0",
              mimeType: "text/plain",
              filename: "",
              content:
                "Hi Kivanc,\n\nJust wanted to let you know that I'm running a few minutes late due to traffic. I should be there by 3:10 pm.\n\nApologies for the inconvenience.\n\nBest,\nKarina",
              headers: [
                'Content-Type: text/plain; charset="UTF-8"',
                "Content-Transfer-Encoding: quoted-printable",
              ],
            },
            {
              partId: "0.1",
              mimeType: "text/html",
              filename: "",
              content:
                '<div dir="ltr">Hi Kivanc,<div><br></div><div>Just wanted to let you know that I\'m running a few minutes late due to traffic. I should be there by 3:10 pm.</div><div><br></div><div>Apologies for the inconvenience.</div><div><br></div><div>Best,<br>Karina</div></div>\r\n',
              headers: [
                'Content-Type: text/html; charset="UTF-8"',
                "Content-Transfer-Encoding: quoted-printable",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "9",
    sender: {
      name: "Kivanc",
      email: "kivanc@gmail.com",
    },
    recipients: ["Karinpandher@gmail.edu"],
    cc: [],
    subject: "Re: Re: Confirmation for 3:00 pm Appointment",
    snippet: "Hello Karina, No worries at all—take your time and drive safely.",
    payload: {
      partId: "",
      mimeType: "multipart/mixed",
      filename: "",
      content: "",
      headers: [
        "Delivered-To: Karinpandher@gmail.edu",
        "Received: by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 14:55:00 -0700 (PDT)",
        "X-Google-Smtp-Source: REDACTED",
        "X-Received: by REDACTED with SMTP id REDACTED; Fri, 13 Sep 2024 14:54:59 -0700 (PDT)",
        "ARC-Seal: i=1; a=rsa-sha256; t=1726287299; cv=none; d=google.com; s=arc-20240605; b=REDACTED",
      ],
      parts: [
        {
          partId: "0",
          mimeType: "multipart/alternative",
          filename: "",
          content: "",
          headers: [
            'Content-Type: multipart/alternative; boundary="000000000000abcd1234567890ef"',
          ],
          parts: [
            {
              partId: "0.0",
              mimeType: "text/plain",
              filename: "",
              content:
                "Hello Karina,\n\nThanks for informing me. No worries at all—take your time and drive safely.\n\nKind regards,\nKivanc",
              headers: [
                'Content-Type: text/plain; charset="UTF-8"',
                "Content-Transfer-Encoding: quoted-printable",
              ],
            },
            {
              partId: "0.1",
              mimeType: "text/html",
              filename: "",
              content:
                '<div dir="ltr">Hello Karina,<div><br></div><div>Thanks for informing me. No worries at all—take your time and drive safely.</div><div><br></div><div>Kind regards,<br>Kivanc</div></div>\r\n',
              headers: [
                'Content-Type: text/html; charset="UTF-8"',
                "Content-Transfer-Encoding: quoted-printable",
              ],
            },
          ],
        },
      ],
    },
  },
];

export default function Home() {
  const [dataSet, setDataset] = useState(0);
  const [userData, setUserdata] = useState(
    JSON.stringify({
      name: "John Doe",
      Address: "123 Boulevard Ave",
      Birthday: "January 1st, 2000",
      "Driver's License ID": "0374795039",
      Schedule: "Busy 9am-3pm, free 3pm-5pm",
    })
  );
  const [quer, setQuer] = useState("");
  const [result, setResult] = useState("");
  const apiCall = async () => {
    console.log("running api");
    const res = await fetch("http://127.0.0.1:5000/process_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_data: datas[dataSet],
        user_data: userData,
      }),
    });
    setResult(await res.json());
  };

  const driverCall = async () => {
    console.log("running driver");
    const res = await fetch("http://127.0.0.1:5000/driver_call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const quCall = async () => {
    console.log("running qu");
    const res = await fetch("http://127.0.0.1:5000/qu_call", {
      method: "POST",
      body: JSON.stringify({
        email_data: [
          datas[3],
          datas[4],
          datas[5],
          datas[6],
          datas[7],
          datas[8],
        ],
        user_data: userData,
        quer,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setResult(await res.json());
  };

  console.log(dataSet);
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-12 flex flex-col sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="gap-4 flex">
        Simulate Incoming Mail:
        <button className="bg-red-500 p-4" onClick={() => setDataset(0)}>
          File Data
        </button>
        <button className="bg-red-500 p-4" onClick={() => setDataset(1)}>
          Reply Data
        </button>
        <button className="bg-red-500 p-4" onClick={() => setDataset(2)}>
          Date Data
        </button>
        <button className="bg-red-500 p-4" onClick={() => setDataset(3)}>
          Schedule Data
        </button>
        <button className="bg-red-500 p-4" onClick={() => setDataset(4)}>
          Query Data
        </button>
        <button className="bg-red-500 p-4" onClick={() => setDataset(4)}>
          Sentinment Data
        </button>
      </div>
      <div className="flex flex-col">
        <label>user data</label>
        <textarea
          className="text-black w-[500px] h-[200px]"
          value={userData}
          onChange={(e) => setUserdata(e.target.value)}
        ></textarea>
        <button className="bg-blue-500">save</button>
      </div>
      {dataSet == 4 && (
        <div>
          <label>Query:</label>
          <textarea
            value={quer}
            className="text-black"
            onChange={(e) => setQuer(e.target.value)}
          ></textarea>
        </div>
      )}
      <div className="flex flex-col">
        <label>Email Call</label>
        {dataSet != 4 ? (
          <textarea
            value={JSON.stringify(datas[dataSet])}
            className="text-black  w-[500px] h-[200px]"
          ></textarea>
        ) : (
          <textarea
            value={JSON.stringify([
              datas[3],
              datas[4],
              datas[5],
              datas[6],
              datas[7],
              datas[8],
            ])}
            className="text-black  w-[500px] h-[200px]"
          ></textarea>
        )}
        <button
          onClick={() =>
            dataSet != 2 && dataSet != 4
              ? apiCall()
              : dataSet == 2
              ? driverCall()
              : quCall()
          }
          className="bg-blue-500"
        >
          try
        </button>
      </div>
      <div>Response: {JSON.stringify(result)}</div>
    </div>
  );
}
