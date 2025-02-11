import React, { Fragment } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import AdminDashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import AdminCustomers from './pages/admin/Customers';
import AdminOrders from './pages/admin/Orders';

const queryClient = new QueryClient();

const NotFound = () => (
  <div className="text-center mt-10 text-2xl">Not found</div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <main className="min-h-screen bg-gray-50">
            <section className='container mx-auto p-4'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/customers" element={<AdminCustomers />} />
                <Route path="/admin/orders" element={<AdminOrders />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </section>
          </main>
        </Fragment>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
