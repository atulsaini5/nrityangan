import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-brand-brown">About Us</h1>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img src="https://picsum.photos/seed/aboutPage/600/800" alt="Founder of Nrityangan Kathak Studio" className="rounded-lg shadow-xl w-full h-auto object-cover mb-8"/>
             <img src="https://picsum.photos/seed/aboutPage2/600/400" alt="Kathak performance by Nrityangan Kathak Studio" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
          </div>
          <div className="text-zinc-600 leading-relaxed space-y-4">
            <h2 className="text-3xl font-serif text-brand-brown mb-4">Our Journey with Kathak</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <p>
              This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. 
            </p>
            <p>
              Make your company stand out and show your visitors who you are. At Wix we’re passionate about helping people create their own beautiful websites.
            </p>
             <h3 className="text-2xl font-serif text-brand-brown pt-8 mb-4">Our Vision</h3>
             <p>
              I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;