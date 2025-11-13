import React, { useState } from 'react';
import SocialLinks from '../components/SocialLinks';

const FormInput: React.FC<{ label: string; type: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean }> = ({
  label,
  type,
  name,
  value,
  onChange,
  required = true,
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="text-xs uppercase tracking-[0.3em] text-brand-terracotta">
      {label}
      {required && '*'}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full rounded-full border border-brand-terracotta/30 bg-white/80 px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/40 focus:border-brand-terracotta focus:outline-none"
    />
  </div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will respond shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="space-y-24 pb-24">
      <section className="relative flex items-center justify-center bg-hero-pattern bg-cover bg-center py-32">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <p className="uppercase tracking-[0.4em] text-sm">Connect</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">Visit the Nrityangan studio</h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            We would love to hear from you—schedule a visit, book a trial class or collaborate with us on performances and workshops.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="space-y-10">
            <div className="rounded-3xl border border-brand-terracotta/30 bg-white/90 p-8 shadow-lg">
              <p className="uppercase tracking-[0.4em] text-xs text-brand-terracotta">Studio</p>
              <h2 className="mt-3 font-serif text-3xl text-brand-ink">Nrityangan Kathak Studio</h2>
              <p className="mt-4 text-sm text-brand-ink/70">Bhandarkar Road, Pune, Maharashtra, India</p>
              <p className="mt-2 text-sm text-brand-ink/70">Open: Tue – Sun · 10:00 – 19:00</p>
              <p className="mt-4 text-sm text-brand-ink/70">Tel: +91 99999 00000</p>
              <p className="text-sm text-brand-ink/70">Email: nrityanganacademy@gmail.com</p>
              <div className="mt-6">
                <SocialLinks isVertical={false} />
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <iframe
                title="Nrityangan Kathak Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.078581903149!2d73.84140097518037!3d18.528353368182294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf06df6523e1%3A0x9a88e7c5af5a1f5!2sBhandarkar%20Rd%2C%20Shivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704890000000!5m2!1sen!2sin"
                width="100%"
                height="320"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="rounded-3xl bg-white/95 p-8 md:p-12 shadow-2xl">
            <h2 className="font-serif text-3xl text-brand-ink">Send us a message</h2>
            <p className="mt-3 text-sm text-brand-ink/70">
              Share your query and our team will respond within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <FormInput label="Name" type="text" name="name" value={formData.name} onChange={handleChange} />
              <div className="grid gap-4 sm:grid-cols-2">
                <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
                <FormInput label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required={false} />
              </div>
              <FormInput label="Subject" type="text" name="subject" value={formData.subject} onChange={handleChange} />
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-brand-terracotta">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-brand-terracotta/30 bg-white/80 px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/40 focus:border-brand-terracotta focus:outline-none"
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-brand-terracotta px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white hover:bg-brand-ink transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
