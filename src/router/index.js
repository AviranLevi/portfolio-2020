import express from 'express';
import * as routes from './routes';

const router = express.Router();

router.post('/send', routes.sendEmail);

export default router;
