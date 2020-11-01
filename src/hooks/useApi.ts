import { useState } from 'react';

interface useApiProps {
  apiFunc: any;
}

const useApi = (apiFunc: any) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const request = async (...args: any) => {
    setLoading(true);

    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);
  };

  return { data, error, loading, request };
};

export default useApi;
