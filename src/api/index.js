import axios from 'axios';

export default axios.create({
  headers: {'Content-Type': 'application/json'},
  baseURL: 'http://192.168.1.6:3000',
  timeout: 10000,
});