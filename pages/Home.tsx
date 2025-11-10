import React from 'react';
import { Link } from 'react-router-dom';

const GalleryImage: React.FC<{ seed: string }> = ({ seed }) => (
  <div className="overflow-hidden aspect-square">
    <img 
      src={`https://picsum.photos/seed/${seed}/500/500`} 
      alt="Kathak dance performance" 
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
    />
  </div>
);

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen bg-hero-pattern bg-cover bg-center flex items-center justify-center text-white">
        <div className="text-center bg-black bg-opacity-30 p-10 rounded-lg">
          <h1 className="text-6xl md:text-8xl font-serif tracking-widest">KATHAK DANCE</h1>
          <p className="text-xl md:text-2xl font-sans mt-4">Indian Classical Dance</p>
          <Link to="/book-trial-class" className="mt-8 inline-block bg-white text-brand-brown font-semibold px-10 py-3 rounded-full hover:bg-brand-gold hover:text-white transition-colors duration-300">
            Book Trial Class
          </Link>
        </div>
      </section>

      {/* About Kathak Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-serif text-brand-brown mb-6">About Kathak</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Kathak is one of the eight major forms of Indian classical dance. The origin of Kathak is traditionally attributed to the traveling bards of ancient northern India known as Kathakars or storytellers. The term Kathak is derived from the Vedic Sanskrit word Katha which means "story", and Kathakar which means "the one who tells a story", or "to do with stories".
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Wandering Kathakars communicated stories from the great epics and ancient mythology through dance, songs and music.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/seed/kathakAbout/600/700" alt="Kathak Dancer" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
          </div>
        </div>
      </section>

      {/* About The Studio Section */}
      <section className="py-20 bg-brand-beige">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img src="https://picsum.photos/seed/atulSnow/600/700" alt="Instructor at Nrityangan Kathak Studio" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-4xl font-serif text-brand-brown mb-6">About The Studio</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <Link to="/about" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors duration-300">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-brand-brown mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GalleryImage seed="gallery1" />
            <GalleryImage seed="gallery2" />
            <GalleryImage seed="gallery3" />
            <GalleryImage seed="gallery4" />
            <GalleryImage seed="gallery5" />
            <GalleryImage seed="gallery6" />
            <GalleryImage seed="gallery7" />
            <GalleryImage seed="gallery8" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-beige text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-brand-brown mb-6">Interested in learning Kathak?</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto mb-8">
            Join us for a trial class and experience the beauty and grace of this ancient art form. No prior experience needed.
          </p>
          <Link to="/book-trial-class" className="inline-block bg-brand-brown text-white font-semibold px-10 py-3 rounded-full hover:bg-brand-gold transition-colors duration-300">
            Book a Trial Class
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;