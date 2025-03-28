import { Twilio } from "twilio";

const twilioClient = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendSMS = async (phone, message) => {
  await twilioClient.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE,
    to: phone,
  });
};
