import React from 'react';
import Navbar from '../components/Navbar';

const posts = [
  {
    id: 1,
    title: 'Essential Home Office Setup Guide',
    excerpt: 'Create the perfect workspace with our curated selection of office essentials...',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1600',
    date: '2025-03-01',
    author: 'Sarah Johnson'
  },
  {
    id: 2,
    title: 'Spring Decor Trends 2025',
    excerpt: 'Discover the latest trends in home decoration for this spring season...',
    image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=1600',
    date: '2025-02-28',
    author: 'Michael Chen'
  },
  {
    id: 3,
    title: 'Sustainable Living: Eco-Friendly Products',
    excerpt: 'Make your home more environmentally friendly with these sustainable products...',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=1600',
    date: '2025-02-25',
    author: 'Emma Wilson'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {post.date} • By {post.author}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}