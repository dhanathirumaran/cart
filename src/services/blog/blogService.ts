import api from '../api/axios';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export const blogService = {
  getPosts: async (): Promise<BlogPost[]> => {
    const response = await api.get('/posts');
    return response.data;
  },

  getPost: async (id: number): Promise<BlogPost> => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },

  createPost: async (post: Omit<BlogPost, 'id'>): Promise<BlogPost> => {
    const response = await api.post('/posts', post);
    return response.data;
  },
};