import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our website. Learn more <Link to="/about">about us</Link>.</p>
    </div>
  );
};

export default Home;
