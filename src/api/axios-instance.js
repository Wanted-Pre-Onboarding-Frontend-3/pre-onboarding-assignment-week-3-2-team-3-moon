import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});
