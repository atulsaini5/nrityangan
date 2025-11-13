import React from 'react';

const journeyMilestones = [
  {
    year: '2004',
    title: 'Studio Inception',
    description: 'Guru Atul Snow establishes Nrityangan Kathak Studio to nurture classical dance in Pune.',
  },
  {
    year: '2010',
    title: 'Performing Ensemble',
    description: 'Launch of the Nrityangan Performing Ensemble presenting thematic productions across India.',
  },
  {
    year: '2016',
    title: 'Workshops & Residencies',
    description: 'Collaborative workshops with visiting maestros focusing on abhinaya, costume design and rhythm labs.',
  },
  {
    year: '2022',
    title: 'Digital Baithaks',
    description: 'Interactive lecture-demonstrations and global community sessions launched during hybrid learning.',
  },
];

const studioValues = [
  {
    title: 'Lineage & Authenticity',
    description: 'Rooted in the Jaipur gharana with a strong emphasis on repertoire, padhant and theoretical grounding.',
  },
  {
    title: 'Holistic Training',
    description: 'From riyaaz routines and abhinaya exploration to fitness and wellness practices tailored for dancers.',
  },
  {
    title: 'Performance Readiness',
    description: 'Opportunities to perform at annual recitals, cultural festivals and intimate baithaks throughout the year.',
  },
];

const About: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative flex items-center justify-center bg-hero-pattern bg-cover bg-center py-32">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <p className="uppercase tracking-[0.4em] text-sm">About Nrityangan</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">Grace, tradition &amp; community</h1>
          <p className="mx-auto mt-6 max-w-3xl text-white/80">
            Nrityangan Kathak Studio is a space where classical dance unfolds as a lived experience—through rigorous training, cultural study and joyous performance.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.4em] text-xs text-brand-terracotta">The Studio</p>
            <h2 className="font-serif text-4xl text-brand-ink">Crafting artistes with empathy &amp; discipline.</h2>
            <p className="text-brand-ink/80 leading-relaxed">
              Founded by Guru Atul Snow, the studio grew from intimate baithaks in a small living room to a dedicated performance and training space. Every student, irrespective of age or experience, is mentored with the belief that classical arts can be both rigorous and deeply personal.
            </p>
            <p className="text-brand-ink/80 leading-relaxed">
              Weekly classes blend footwork drills, tukras and tihais with reflective sessions on mythology, literature and music. The studio also organises lecture-demonstrations, costume design workshops and collaborative productions that reimagine timeless narratives.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-white/80 p-4 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1100&q=80"
                alt="Nrityangan studio interior"
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -bottom-10 left-8 hidden md:block rounded-3xl bg-brand-terracotta px-6 py-5 text-white shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em]">Pune, India</p>
              <p className="mt-2 font-serif text-2xl">Nrityangan Studio</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/80 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.4em] text-xs text-brand-terracotta">Values</p>
            <h2 className="mt-3 font-serif text-4xl text-brand-ink">What anchors our pedagogy</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {studioValues.map((value) => (
              <div key={value.title} className="rounded-3xl border border-brand-terracotta/20 bg-white/90 p-8 shadow-lg">
                <h3 className="font-serif text-2xl text-brand-ink">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="rounded-3xl bg-brand-ink text-brand-cream p-10 md:p-14 shadow-xl">
            <p className="uppercase tracking-[0.4em] text-xs text-brand-soft-gold">Guru</p>
            <h2 className="mt-3 font-serif text-4xl">Atul Snow</h2>
            <p className="mt-6 text-sm leading-relaxed text-brand-cream/80">
              A disciple of the Jaipur gharana, Atul Snow has performed at major festivals across India and mentored hundreds of students. His teaching style is rooted in compassion, clarity of technique and a love for storytelling.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-cream/80">
              Beyond the studio, he curates cultural festivals, choreographs collaborative productions and advocates for classical arts education in schools and colleges.
            </p>
          </div>
          <div className="space-y-8">
            <p className="uppercase tracking-[0.4em] text-xs text-brand-terracotta">Milestones</p>
            <div className="space-y-6">
              {journeyMilestones.map((milestone) => (
                <div key={milestone.year} className="rounded-3xl border border-brand-terracotta/20 bg-white/90 p-6 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.4em] text-brand-terracotta">{milestone.year}</span>
                    <h3 className="font-serif text-2xl text-brand-ink">{milestone.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-studio-pattern bg-cover bg-center py-24">
        <div className="bg-brand-ink/70">
          <div className="container mx-auto px-6 py-16 text-brand-cream">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <p className="uppercase tracking-[0.4em] text-xs text-brand-soft-gold">Beyond Training</p>
                <h2 className="mt-3 font-serif text-4xl">Community &amp; collaborations</h2>
                <p className="mt-4 text-brand-cream/80">
                  Nrityangan believes in sharing knowledge through open rehearsals, panel discussions and cross-disciplinary conversations. We collaborate with musicians, poets and theatre practitioners to create productions that resonate with contemporary audiences.
                </p>
              </div>
              <div className="rounded-3xl border border-brand-soft-gold/30 bg-white/10 p-8 backdrop-blur">
                <h3 className="font-serif text-2xl text-brand-soft-gold">Studio Offerings</h3>
                <ul className="mt-4 space-y-3 text-sm text-brand-cream/80">
                  <li>• Certificate programmes in Kathak (Beginner to Advanced)</li>
                  <li>• Special focus batches for children &amp; working professionals</li>
                  <li>• Annual performance residencies with live musicians</li>
                  <li>• Lecture demonstrations for schools and cultural forums</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
