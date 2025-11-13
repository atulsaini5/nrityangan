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
      <div className="min-h-screen bg-brand-cream text-brand-ink">
        <div className="bg-texture-paper bg-fixed bg-cover bg-top">
          <div className="bg-brand-cream/90 backdrop-blur-sm min-h-screen">
            <Header />
            <SocialLinks isVertical={true} />
            <main className="pt-24 lg:pt-28">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book-trial-class" element={<BookTrial />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
