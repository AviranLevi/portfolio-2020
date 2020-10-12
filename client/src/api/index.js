import axios from 'axios';
import { serverURL } from '../config';

const api = axios.create({
  baseURL: serverURL,
});

export const sendEmail = async (userInfo = {}) => {
  const response = await api.post('/send', userInfo);
  const { data } = response;
  return data;
};
