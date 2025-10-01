import axios from 'axios';

export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getArticles = async () =>
  apiClient.get('/articles').then((response) => {
    return response.data;
  });
