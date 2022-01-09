import axios from 'axios'

const mailer = axios.create({
  baseURL: process.env.REACT_APP_API_MAILER
})

export default mailer