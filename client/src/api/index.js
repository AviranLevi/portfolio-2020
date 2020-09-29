import axios from 'axios';

export const sendEmail = async (data) => {
  const response = await axios.get('http://localhost:5000/send');
  console.log(response);
};
