import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://api.adviceslip.com',
});

export const fetchRandomAdvice = () => apiInstance.get(`/advice`);
