import nodemailer from 'nodemailer';
import { mailerINFO } from '../config';

const { service, user, pass } = mailerINFO;

const transporter = nodemailer.createTransport({
  service,
  auth: { user, pass },
});

export const sendEmail = ({ subject, text, from = mailerINFO.from, to = mailerINFO.to }) =>
  transporter.sendMail({ from, to, subject, text }, (error, info) => {
    if (error) {
      console.log('****error****', error);
      return { success: false };
    } else {
      return { success: true };
    }
  });
