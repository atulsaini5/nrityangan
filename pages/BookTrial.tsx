
import React, { useState } from 'react';

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

const BookTrial: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Booking submitted! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', age: '', message: '' });
  };

  return (
    <div className="pt-24 bg-trial-pattern bg-cover bg-center min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-serif text-brand-brown text-center mb-2">Book a Trial Class</h1>
            <p className="text-center text-zinc-600 mb-8">Fill in the form below to book your free trial class.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormInput label="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                <FormInput label="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
              <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
              <FormInput label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required={false} />
              <FormInput label="Age" type="number" name="age" value={formData.age} onChange={handleChange} />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700">Message</label>
                <textarea 
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                ></textarea>
              </div>
              <div className="text-center pt-4">
                <button type="submit" className="w-full sm:w-auto inline-block bg-brand-brown text-white font-semibold px-12 py-3 rounded-full hover:bg-brand-gold transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookTrial;
