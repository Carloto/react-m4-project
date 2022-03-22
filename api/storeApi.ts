import axios from 'axios';

export async function getProducts(limit: number) {
  return await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
}

export async function getProduct(id: number) {
  return await axios.get(`https://fakestoreapi.com/products/${id}`);
}
