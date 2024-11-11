const { createMessage } = require("./src/sms");

exports.sendSMS = async (event) => {
  const { toPhoneNumber, bodyMessage } = event;
  if (!toPhoneNumber || !bodyMessage) {
    return { status: 400, message: "Phone number and message cannot be null" };
  } else {
    return createMessage(toPhoneNumber, bodyMessage);
  }
};
