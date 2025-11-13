import React from 'react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'Kathak Foundations',
    description: 'Introduce yourself to the taal, footwork and abhinaya of the Jaipur gharana with guided practice and storytelling exercises.',
    schedule: 'Beginners | Tue & Thu · 6:00 – 7:00 PM',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Intermediate Riyaaz',
    description: 'Sharpen chakkars, complex tihais and layakari through repertory study and classical compositions accompanied by live tabla.',
    schedule: 'Intermediate | Wed & Fri · 7:15 – 8:45 PM',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Performing Ensemble',
    description: 'A performance-focused collective nurturing stagecraft, costume aesthetics and thematic choreography for cultural festivals.',
    schedule: 'Performers | Weekend Intensives',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1549122728-f519709caa9c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1527515545085-5db817172677?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518895949257-7621c3c786d4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1478754609623-3e4e193a9d79?auto=format&fit=crop&w=800&q=80',
];

const testimonials = [
  {
    quote:
      'Nrityangan has transformed my understanding of Kathak. The attention to technique and history has made every class a revelation.',
    name: 'Aditi Kulkarni',
    role: 'Intermediate Student',
  },
  {
    quote: 'Performing with the ensemble has been a dream. The choreography beautifully merges tradition with a contemporary voice.',
    name: 'Rohit S.',
    role: 'Performing Wing',
  },
  {
    quote: 'Guruji curates each lesson with such detail and warmth. The studio feels like a second home filled with rhythm and stories.',
    name: 'Meera S.',
    role: 'Beginner Programme',
  },
];

const highlightFeatures = [
  {
    title: 'Classes',
    description: 'Structured batches across levels with an emphasis on classical repertoire, riyaz routines and theoretical grounding.',
  },
  {
    title: 'Performances',
    description: 'Annual recitals, baithaks and collaborative showcases that celebrate the grace of Kathak and allied art forms.',
  },
  {
    title: 'Workshops',
    description: 'Short-term intensives with guest maestros exploring abhinaya, rhythm design, costume styling and stage presence.',
  },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative min-h-[90vh] bg-hero-pattern bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="relative container mx-auto px-6 py-32 text-white">
          <p className="uppercase tracking-[0.5em] text-sm mb-6">Nrityangan Kathak Studio</p>
          <h1 className="max-w-3xl font-serif text-4xl md:text-6xl leading-tight">
            Experience the rhythm, grace and storytelling of Kathak.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/80">
            Traditional Kathak training rooted in lineage, nurtured in an intimate studio that celebrates artistry and discipline.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/book-trial-class"
              className="inline-flex items-center rounded-full bg-brand-terracotta px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white hover:bg-white hover:text-brand-ink transition-colors duration-300"
            >
              Book a Trial Class
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-full border border-white/60 px-8 py-3 text-sm uppercase tracking-[0.3em] text-white hover:bg-white/90 hover:text-brand-ink transition-colors duration-300"
            >
              Discover the Studio
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.4em] text-xs text-brand-terracotta">Our Story</p>
            <h2 className="font-serif text-4xl text-brand-ink">A sanctuary for classical expression.</h2>
            <p className="text-brand-ink/80 leading-relaxed">
              Founded by Guru Atul Snow, Nrityangan nurtures seekers of Kathak through mindful pedagogy, rigorous riyaaz and a deep reverence for narrative traditions. Students engage with taal, abhinaya and history while building confidence to perform on stage.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {highlightFeatures.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-brand-terracotta/20 bg-white/70 px-5 py-6 shadow-sm">
                  <h3 className="font-serif text-lg text-brand-terracotta">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-brand-ink/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-white/70 p-4 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1549068106-b024baf5062d?auto=format&fit=crop&w=1000&q=80"
                alt="Kathak dancer in performance"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 hidden sm:block rounded-3xl bg-brand-terracotta/90 px-6 py-5 text-white shadow-lg">
              <p className="text-xs uppercase tracking-[0.4em]">since 2004</p>
              <p className="mt-2 font-serif text-2xl">Legacy of Rhythm</p>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-white/80 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.4em] text-xs text-brand-terracotta">Programmes</p>
            <h2 className="mt-3 font-serif text-4xl text-brand-ink">Classes for every journey</h2>
            <p className="mt-4 text-brand-ink/70">
              Curated modules designed to nurture beginners, refine committed learners and empower artistes preparing for the stage.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <article key={program.title} className="group flex flex-col rounded-3xl border border-brand-terracotta/20 bg-white/90 shadow-lg overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img src={program.image} alt={program.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-4 right-4 rounded-full bg-white/80 px-4 py-1 text-xs uppercase tracking-[0.35em] text-brand-terracotta">
                    Kathak
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 space-y-4">
                  <h3 className="font-serif text-2xl text-brand-ink">{program.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-ink/70">{program.description}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-terracotta">{program.schedule}</p>
                  <div className="mt-auto pt-4">
                    <Link to="/book-trial-class" className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-brand-terracotta hover:text-brand-ink">
                      Join Batch
                      <span className="ml-2 h-px w-12 bg-brand-terracotta transition-all duration-300 group-hover:w-20 group-hover:bg-brand-ink" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=1000&q=80"
              alt="Guru Atul Snow teaching Kathak"
              className="w-full rounded-3xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-8 right-8 rounded-3xl bg-white/90 px-6 py-5 shadow-xl max-w-[240px]">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-terracotta">Guru Atul Snow</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                Disciple of the Jaipur gharana with two decades of performance and pedagogy across India and abroad.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="uppercase tracking-[0.4em] text-xs text-brand-terracotta">The Mentor</p>
            <h2 className="font-serif text-4xl text-brand-ink">Guided by tradition, tailored for today.</h2>
            <p className="text-brand-ink/80 leading-relaxed">
              Blending the rigour of classical training with empathetic mentorship, every batch is guided to find its individual voice. Sessions include padhant, theory discussions, choreography labs and reflective sharing circles.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand-terracotta/30 bg-white/80 p-5">
                <h3 className="font-serif text-lg text-brand-ink">Heritage</h3>
                <p className="mt-2 text-sm text-brand-ink/70">Rooted in the Jaipur gharana with influences from Lucknow styles.</p>
              </div>
              <div className="rounded-2xl border border-brand-terracotta/30 bg-white/80 p-5">
                <h3 className="font-serif text-lg text-brand-ink">Pedagogy</h3>
                <p className="mt-2 text-sm text-brand-ink/70">Holistic curriculum interweaving rhythm training, abhinaya and cultural history.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-studio-pattern bg-cover bg-center py-24">
        <div className="bg-brand-ink/70">
          <div className="container mx-auto px-6 py-16 text-brand-cream">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="uppercase tracking-[0.4em] text-xs text-brand-soft-gold">In the Studio</p>
                <h2 className="mt-3 font-serif text-4xl">Workshops, recitals &amp; community</h2>
                <p className="mt-4 max-w-xl text-brand-cream/80">
                  Monthly lecture demonstrations, repertory sharings and guest artist sessions keep the studio alive with dialogue and discovery. Explore stagecraft, costume styling and the nuances that shape a compelling performance.
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-3xl border border-brand-soft-gold/40 bg-white/10 p-6 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-soft-gold">Upcoming</p>
                  <h3 className="mt-2 font-serif text-2xl">Monsoon Baithak</h3>
                  <p className="mt-2 text-sm text-brand-cream/80">An intimate evening of abhinaya and live tabla exploring seasonal poetry.</p>
                </div>
                <div className="rounded-3xl border border-brand-soft-gold/40 bg-white/10 p-6 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-soft-gold">Workshop</p>
                  <h3 className="mt-2 font-serif text-2xl">Abhinaya Intensive</h3>
                  <p className="mt-2 text-sm text-brand-cream/80">Weekend masterclass on emotive storytelling with guest artiste Shubha Kelkar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-xs text-brand-terracotta">Voices</p>
          <h2 className="mt-3 font-serif text-4xl text-brand-ink">What our dancers share</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-3xl border border-brand-terracotta/20 bg-white/90 p-8 shadow-lg">
              <p className="text-sm leading-relaxed text-brand-ink/80">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="font-serif text-lg text-brand-ink">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-terracotta">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-white/80 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.4em] text-xs text-brand-terracotta">Gallery</p>
            <h2 className="mt-3 font-serif text-4xl text-brand-ink">Moments from the studio</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={image} className={`group overflow-hidden rounded-3xl ${index % 3 === 0 ? 'sm:row-span-2' : ''}`}>
                <img
                  src={image}
                  alt="Nrityangan Kathak gallery"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="rounded-3xl bg-brand-ink text-brand-cream overflow-hidden">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] items-stretch">
            <div className="p-10 md:p-14">
              <p className="uppercase tracking-[0.4em] text-xs text-brand-soft-gold">Join Us</p>
              <h2 className="mt-3 font-serif text-4xl">Step into Nrityangan</h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-cream/80">
                Whether you are beginning your journey or seeking to deepen your practice, our studio offers a nurturing space steeped in lineage, rhythm and grace.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/book-trial-class"
                  className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-ink hover:bg-brand-soft-gold hover:text-brand-ink"
                >
                  Reserve Your Spot
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full border border-brand-soft-gold px-8 py-3 text-sm uppercase tracking-[0.3em] text-brand-soft-gold hover:bg-brand-soft-gold hover:text-brand-ink"
                >
                  Connect With Us
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                alt="Kathak performer"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-brand-ink/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
