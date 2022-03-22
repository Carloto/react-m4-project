import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function useHomeProducts() {
  const { data, error } = useSWR(
    'https://fakestoreapi.com/products?limit=10',
    fetcher
  );

  return {
    homeProducts: data,
    isLoading: !error && !data,
    isError: error,
  };
}
