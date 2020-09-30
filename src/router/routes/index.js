import nodemailer from 'nodemailer';
import { mailerINFO } from '../../config';

const { service, user, pass, from, to } = mailerINFO;

const transporter = nodemailer.createTransport({
  service,
  auth: { user, pass },
});

export const sendEmail = async (req, res, next) => {
  try {
    const { name, email, text } = req.body;
    const subject = `${name} - ${email}`;
    await transporter.sendMail({ from, to, subject, text }, (error, info) => {
      if (error) {
        console.log('****error****', error);
        res.json({ success: false, error });
      } else {
        res.json({ success: true });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
