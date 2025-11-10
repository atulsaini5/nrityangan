import React, { useState } from 'react';
import SocialLinks from '../components/SocialLinks';

const FormInput: React.FC<{ label: string, type: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required?: boolean }> = 
({ label, type, name, value, onChange, required=true }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-zinc-700">{label}{required && '*'}</label>
    <input 
      type={type} 
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
    />
  </div>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 bg-brand-beige">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif text-brand-brown mb-4">Contact</h1>
            <p className="text-lg text-zinc-600">Get in touch with us for any inquiries.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-brand-brown mb-4">Contact Info</h2>
                <p className="text-zinc-600 mb-2">Tel: +91 12345 67890</p>
                <p className="text-zinc-600">Email: contact@nrityangankathak.com</p>
              </div>
              <div>
                <h2 className="text-3xl font-serif text-brand-brown mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                   <SocialLinks isVertical={false} />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg">
               <h2 className="text-3xl font-serif text-brand-brown mb-6">Send a Message</h2>
               <form onSubmit={handleSubmit} className="space-y-6">
                <FormInput label="Name" type="text" name="name" value={formData.name} onChange={handleChange} />
                <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
                <FormInput label="Subject" type="text" name="subject" value={formData.subject} onChange={handleChange} />
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700">Message*</label>
                  <textarea 
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                  ></textarea>
                </div>
                <div className="text-right">
                  <button type="submit" className="inline-block bg-brand-brown text-white font-semibold px-10 py-3 rounded-full hover:bg-brand-gold transition-colors duration-300">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;