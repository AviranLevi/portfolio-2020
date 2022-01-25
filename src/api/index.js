import axios from 'axios'
import { serverURL } from '../config'

const api = axios.create({
  baseURL: serverURL,
})

export const sendEmail = async (userInfo = {}) => {
  const { data } = await api.post('/send', userInfo)
  return data
}
