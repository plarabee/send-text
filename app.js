const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;
const client = require('twilio')(accountSid, authToken);

if (process.argv.length < 4) {
    console.error('Expected at least two arguments');
    process.exit(1);
}

// populate to and body from arguments: node app.js +1234567890 Hello World!
let to = process.argv[2];
let body = '';
for  (let i = 3; i < process.argv.length; i++) {
    body += process.argv[i];
    if (i !== process.argv.length - 1) {
        body += ' ';
    }
}

// create and send message
client.messages
      .create({from: twilioNumber, body: body, to: to})
      .then(message => console.log(message.sid));