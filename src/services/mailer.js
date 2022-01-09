import axios from 'axios';

const mailer = axios.create({
  baseURL: 'http://localhost:3333',
});

export default mailer;
