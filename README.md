# 📧 Serverless Email Service (Task 3)

This project is part of the internship assignment.  
It demonstrates how to create a REST API using the **Serverless Framework** that can send emails via **Nodemailer (Ethereal for testing)**.

---

## 🚀 Features
- REST API endpoint to send email
- Input: `receiver_email`, `subject`, `body_text`
- Email sending with **Nodemailer + Ethereal**
- Error handling with proper HTTP response codes
- Runs locally using `serverless-offline`

---

## 🛠 Tech Stack
- Node.js
- Serverless Framework
- Nodemailer
- Ethereal (for email preview)

---

## 📂 Project Structure
Auth_task3/
├─ email-service/
│  ├─ handler.js
│  ├─ serverless.yml
│─ package.json
│─ node_modules/
│─ .gitignore

