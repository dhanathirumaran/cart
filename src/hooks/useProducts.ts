import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '../services/products/productService';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: productService.getProducts,
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => productService.getProduct(id),
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: productService.createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, product }: { id: string; product: Partial<Product> }) =>
      productService.updateProduct(id, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};