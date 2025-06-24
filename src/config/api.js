import axios from 'axios';
import { DEV_TEST_API_BASE_URL } from '../api/serverApiForTestingInLocalhost';

  const api = axios.create({
  baseURL: DEV_TEST_API_BASE_URL,
  headers: {
   
  },
});

export default api;