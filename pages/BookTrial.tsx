import React, { useState } from 'react';

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

const BookTrial: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Your trial class request has been received! We will confirm shortly.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', age: '', experience: '', message: '' });
  };

  return (
    <div className="space-y-24 pb-24">
      <section className="relative flex items-center justify-center bg-hero-pattern bg-cover bg-center py-32">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <p className="uppercase tracking-[0.4em] text-sm">Join Nrityangan</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">Book your trial class</h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Explore the rhythm, grace and storytelling of Kathak through an immersive introductory session with our faculty.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="rounded-3xl border border-brand-terracotta/30 bg-white/90 p-8 shadow-lg">
            <p className="uppercase tracking-[0.4em] text-xs text-brand-terracotta">What to expect</p>
            <h2 className="mt-3 font-serif text-3xl text-brand-ink">Your first visit</h2>
            <ul className="mt-6 space-y-3 text-sm text-brand-ink/70">
              <li>• Guided studio tour and introduction to our faculty</li>
              <li>• Warm-up, footwork drills and abhinaya exploration</li>
              <li>• Discussion on goals, batch placement and schedules</li>
              <li>• Q&amp;A on costumes, practice routines and performances</li>
            </ul>
            <div className="mt-8 rounded-3xl bg-brand-terracotta/10 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-terracotta">Trial Timings</p>
              <p className="mt-2 text-sm text-brand-ink/70">Weekdays · 5:30 – 7:00 PM</p>
              <p className="text-sm text-brand-ink/70">Weekends · 11:00 AM – 1:00 PM</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white/95 p-8 md:p-12 shadow-2xl">
            <h2 className="font-serif text-3xl text-brand-ink">Reserve your spot</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormInput label="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                <FormInput label="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
                <FormInput label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required={false} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormInput label="Age" type="number" name="age" value={formData.age} onChange={handleChange} />
                <FormInput label="Kathak Experience" type="text" name="experience" value={formData.experience} onChange={handleChange} required={false} />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-brand-terracotta">
                  Tell us about your goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
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
                  Submit Request
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
