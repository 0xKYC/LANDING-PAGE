import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001/';

export const api = axios.create({
  baseURL: URL,
});
