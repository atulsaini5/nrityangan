import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <Link to="/" className="text-3xl font-serif font-bold text-brand-brown mb-4">
            Nrityangan Kathak Studio
          </Link>
          <p className="text-zinc-600 mb-6">contact@nrityangankathak.com | +91 12345 67890</p>
          <div className="mb-6">
            <SocialLinks isVertical={false} />
          </div>
          <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} by Nrityangan Kathak Studio. Proudly created with React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;