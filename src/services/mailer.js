import axios from 'axios';

const mailer = axios.create({
  baseURL: 'http://localhost:3333' ?? process.env.REACT_APP_API_MAILER,
});

export default mailer;
