import axios from 'axios';

export const key = '2762a408';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api;