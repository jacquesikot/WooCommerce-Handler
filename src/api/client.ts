import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://172.20.10.6:4500/api',
});

export default apiClient;
