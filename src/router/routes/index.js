import { mailerINFO } from '../../config';
import * as mailer from '../../utils/nodemailer';

export const sendEmail = async (req, res, next) => {
  try {
    const { name, email, text } = req.body;
    console.log(name, email, text);
    const subject = `${name} - ${email}`;
    const response = await mailer.sendEmail({ subject, text });
    console.log(response);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};
