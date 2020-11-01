import client from './client';

const endpoint = '/products';

const getProducts = () => client.get(endpoint);

const deleteProduct = (id: any) => {
  return client.delete(endpoint, { id: id });
};

const addProduct = (product: any, onUploadProgress: any) =>
  client.post(endpoint, product, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });

export default {
  addProduct,
  getProducts,
  deleteProduct,
};
