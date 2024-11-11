require("dotenv/config");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require("twilio")(accountSid, authToken);

exports.createMessage = async (toPhoneNumber, bodyMessage) => {
  try {
    const message = await client.messages.create({
      body: bodyMessage,
      from: fromPhoneNumber,
      to: toPhoneNumber,
    });

    console.log(message.body);
    return { status: 200, message: "Message sent successfully!" };
  } catch (error) {
    console.error(error);
    return { status: 500, message: error };
  }
};
