import api from '../api/axios';
import type { Product } from '../../types';

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data;
  },

  getProduct: async (id: string): Promise<Product> => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  createProduct: async (product: Omit<Product, 'id'>): Promise<Product> => {
    const response = await api.post('/products', product);
    return response.data;
  },

  updateProduct: async (id: string, product: Partial<Product>): Promise<Product> => {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  },

  deleteProduct: async (id: string): Promise<void> => {
    await api.delete(`/products/${id}`);
  },
};