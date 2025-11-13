import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-ink text-brand-cream">
      <div className="bg-brand-cocoa/60">
        <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-[0.35em] uppercase">Nrityangan Kathak</h3>
            <p className="text-sm leading-relaxed text-brand-cream/80">
              Immerse yourself in the grace of Kathak through bespoke training programmes, immersive workshops and soulful performances.
            </p>
            <Link
              to="/book-trial-class"
              className="inline-flex items-center rounded-full border border-brand-soft-gold/60 px-5 py-2 text-sm uppercase tracking-widest text-brand-soft-gold hover:bg-brand-soft-gold hover:text-brand-ink transition-colors duration-300"
            >
              Book a Trial Class
            </Link>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-xl uppercase tracking-[0.25em]">Studio</h4>
            <p className="text-sm text-brand-cream/80">Nrityangan Kathak Studio<br/>Pune, Maharashtra</p>
            <p className="text-sm text-brand-cream/80">Open: Tue – Sun | 10:00 – 19:00</p>
            <p className="text-sm text-brand-cream/80">Tel: +91 99999 00000</p>
            <p className="text-sm text-brand-cream/80">nrityanganacademy@gmail.com</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-xl uppercase tracking-[0.25em]">Connect</h4>
            <SocialLinks isVertical={false} />
            <p className="text-xs text-brand-cream/60">Follow our journey across performances, workshops and student showcases.</p>
            <form className="space-y-3">
              <label htmlFor="newsletter" className="text-xs uppercase tracking-[0.3em] text-brand-soft-gold">Newsletter</label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-full border border-brand-soft-gold/40 bg-white/10 px-4 py-2 text-sm placeholder:text-brand-cream/50 focus:border-brand-soft-gold focus:outline-none"
                />
                <button
                  type="button"
                  className="rounded-full bg-brand-soft-gold px-6 py-2 text-sm font-semibold text-brand-ink hover:bg-white transition-colors duration-300"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 text-xs uppercase tracking-[0.3em] text-brand-cream/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} Nrityangan Kathak Academy. All Rights Reserved.</span>
          <span>Crafted with grace and rhythm.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
