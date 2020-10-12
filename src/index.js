import express from 'express';
import cors from 'cors';
import router from './router';
import path from 'path';

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api', router);

app.listen(port, () => console.log(`Server's up and running on port ${port}`));
