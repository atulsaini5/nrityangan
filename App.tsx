
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BookTrial from './pages/BookTrial';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="font-sans bg-brand-beige text-zinc-800">
        <Header />
        <SocialLinks isVertical={true} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-trial-class" element={<BookTrial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
