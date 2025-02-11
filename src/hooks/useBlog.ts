import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { blogService } from '../services/blog/blogService';

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: blogService.getPosts,
  });
};

export const useBlogPost = (id: number) => {
  return useQuery({
    queryKey: ['posts', id],
    queryFn: () => blogService.getPost(id),
  });
};