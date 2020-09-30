import express from 'express';
import cors from 'cors';
import router from './router';

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.listen(port, () => console.log(`Server's up and running on port ${port}`));
