import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export const sendEmail = async (userInfo = {}) => {
  console.log(userInfo);
  const response = await api.post('/send', userInfo);
  const { data } = response;
  const { success } = data;
  return success;
};
