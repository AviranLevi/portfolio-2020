const express = require('express');
const cors = require('cors');
const app = express();

const sendEmail = (req, res, next) => {
  try {
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

app.get('/send', sendEmail);

const port = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(cors());
app.listen(port, () => console.log(`Server's up and running on port ${port}`));
