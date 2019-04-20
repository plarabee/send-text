send-text

A simple application for sending text messages from the terminal using Twilio. Created with node.js

Requirements:

1. node v10.15 or later

2. The following dependencies (can be installed with npm)
    "dotenv": "^7.0.0",
    "twilio": "^3.30.1"

3. An .env file in the directory of the root of the application that defines the following environment variables:

    ACCOUNT_SID= (your twilio account SID)
    AUTH_TOKEN= (your twilio auth token)
    TWILIO_NUMBER= (a SMS capable twilio phone number owned by your account, must be in the form of +1234567890)

Usage:
node app.js $DESTINATION_NUMBER $BODY

Ex:
node app.js +1234567890 Hello World! This is the body of my message