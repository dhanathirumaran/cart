import React from 'react';
import Navbar from '../components/Navbar';
import { Users, Heart, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're passionate about bringing you the finest selection of home and office products,
            making your space both beautiful and functional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">
              A dedicated group of experts committed to curating the best products for your needs.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To help you create spaces that inspire, comfort, and bring joy to your daily life.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
            <p className="text-gray-600">
              Committed to sustainability and supporting ethical manufacturing practices worldwide.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-full w-full object-cover md:w-48"
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800"
                alt="Office space"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2020, we started with a simple mission: to make beautiful, functional
                products accessible to everyone. Today, we work with artisans and manufacturers
                worldwide to bring you carefully curated collections that enhance your living and
                working spaces.
              </p>
              <p className="text-gray-600">
                We believe in quality, sustainability, and exceptional customer service. Every
                product in our store is selected with care, ensuring it meets our high standards
                for both form and function.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}