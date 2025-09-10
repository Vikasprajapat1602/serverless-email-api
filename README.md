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

---

## ⚙️ Setup Instructions
1. **Clone Repository**

    ```
   git clone https://github.com/Vikasprajapat1602/serverless-email-api.git
   cd serverless-email-api
   ```

2. **Install Dependencies**

    ```
    npm install
    ```

3. **Run Locally**

    ```
    npx serverless offline
    ```

4. **Server will start on:**

    ```
    (http://localhost:3000)
    ```

---

##🛠️ Testing API

###Using Postman

    ```
    Open Postman → Create a new POST request.
    
    URL : http://localhost:3000/dev/send-email
    
    Go to Body → raw → JSON and paste:
     {
       "receiver_email": "Enter_Mail",
       "subject": "Enter_Subject",
       "body_text": "body_part"
    }
    
    Send the request.
    ```


