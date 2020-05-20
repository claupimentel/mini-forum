import axios from 'axios';
const api = 'http://localhost:1338';

export const getThreads = () => {
  const url = `${api}/api/threads`;
  return axios.get(url).then((response) => response.data.data);
};

export const getThread = (thread_slug) => {
  const url = `${api}/api/threads/${thread_slug}`;
  return axios.get(url).then((response) => response.data.data);
};