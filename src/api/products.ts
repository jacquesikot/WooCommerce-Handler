import client from './client';

const endpoint = '/products';

const getProducts = () => client.get(endpoint);

export default {
  getProducts,
};
