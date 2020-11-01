import client from './client';

const endpoint = '/products/categories';

const getCategories = () => client.get(endpoint);

export default {
  getCategories,
};
