import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Shield, Target, Users, Award, TrendingUp,
  CheckCircle, ArrowRight, Star, Lightbulb
} from 'lucide-react';
import Team_Rekha_Somwanshi from '../assets/images/team_member/Rekha_Somwanshi.webp'

function useIntersectionObserver(ref: React.RefObject<Element>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-8');
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useIntersectionObserver(ref as React.RefObject<Element>);
  return (
    <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}>
      {children}
    </div>
  );
}

const values = [
  { icon: Heart, title: 'Compassion', desc: 'Every patient is treated with empathy, dignity, and unconditional respect.' },
  { icon: Shield, title: 'Safety', desc: 'Clinical safety standards and protocols followed meticulously at every step.' },
  { icon: Award, title: 'Excellence', desc: 'We continuously raise the bar for service quality and clinical outcomes.' },
  { icon: TrendingUp, title: 'Innovation', desc: 'Technology-enabled care models for better patient engagement and outcomes.' },
];

const team = [
  {
    name: 'Rekha Somwanshi',
    role: 'Senior Nurse',
    desc: '15 Years Experience in compassionate home and clinical care.',
    img: Team_Rekha_Somwanshi,
  },
];

export default function About() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-[#F7FAFA]">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[#00ABB2]" />
          <div className="absolute bottom-10 right-40 w-40 h-40 rounded-full bg-[#00ABB2]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full">
                Our Story
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] leading-tight mb-6">
                Redefining Healthcare<br />
                <span className="text-gradient">One Home at a Time</span>
              </h1>
              <p className="text-[#4A5568] leading-relaxed mb-5 text-lg">
                Fornax was founded with a simple yet powerful belief: every person deserves access to premium, professional healthcare — delivered where they feel safest, at home.
              </p>
              <p className="text-[#4A5568] leading-relaxed mb-8">
                Starting with physiotherapy as our core service in Kharar, we've grown into a comprehensive paramedical platform serving hundreds of families. Our tagline — "Believe in Safe Hands" — isn't just a promise. It's our commitment to you, your family, and your health.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  'Certified by Medical Board',
                  'NABH Standards',
                  'Govt. Registered',
                  'Background Verified Staff',
                ].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-sm text-[#00ABB2] font-medium bg-teal-50 px-3 py-1.5 rounded-full">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {item}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-gradient text-white font-semibold rounded-full shadow-md hover:shadow-teal-500/40 hover:scale-105 transition-all duration-200"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fornax healthcare team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-gradient flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A2E] text-sm">Believe in Safe Hands</div>
                    <div className="text-xs text-[#4A5568]">Fornax Healthcare — 3rd Floor, Regus, Mohali Citi Centre-02, Block-F, GMADA Aerocity, S.A.S Nagar, Mohali (Pb) 140301</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <div className="absolute -top-6 -right-4 bg-white rounded-2xl shadow-xl p-4 text-center min-w-[100px]">
                <div className="text-2xl font-bold text-[#00ABB2]">1000+</div>
                <div className="text-xs text-[#4A5568] font-medium">Happy Patients</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full">
              Purpose & Direction
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Our Vision & <span className="text-gradient">Mission</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <AnimatedSection>
              <div className="group relative bg-[#F7FAFA] rounded-3xl p-8 h-full border border-transparent hover:border-teal-100 card-hover overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#00ABB2]/5 -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-teal-gradient flex items-center justify-center mb-6 shadow-lg shadow-teal-500/25">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">Our Vision</h3>
                  <p className="text-[#4A5568] leading-relaxed text-base mb-6">
                    To revolutionize healthcare accessibility across India — making premium, evidence-based medical and paramedical services available to every household, regardless of geography or economic background.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Accessible healthcare for all',
                      'Technology-driven care delivery',
                      'Nationwide expansion by 2027',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#4A5568]">
                        <div className="w-5 h-5 rounded-full bg-teal-gradient flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Mission */}
            <AnimatedSection>
              <div className="group relative bg-[#1A1A2E] rounded-3xl p-8 h-full overflow-hidden card-hover">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#00ABB2]/10 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#00ABB2]/5 translate-y-1/2 -translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[#00ABB2]/20 border border-[#00ABB2]/30 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-[#00ABB2]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed text-base mb-6">
                    To deliver superior healthcare through a perfect blend of technology, compassion, and evidence-based treatment — empowering patients to achieve the best possible health outcomes while staying in the comfort of their homes.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Evidence-based treatment protocols',
                      'Continuous care team training',
                      'Patient-centered outcomes',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-[#00ABB2]/20 border border-[#00ABB2]/40 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-[#00ABB2]" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F7FAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <AnimatedSection key={title}>
                <div className="bg-white rounded-2xl p-6 text-center card-hover border border-transparent hover:border-teal-100 shadow-sm h-full">
                  <div className="w-14 h-14 rounded-2xl bg-teal-gradient flex items-center justify-center mx-auto mb-5 shadow-md shadow-teal-500/20">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A2E] mb-2">{title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full">
              Our Experts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-[#4A5568] max-w-xl mx-auto mt-4">
              Our team of certified specialists brings decades of combined clinical experience to your doorstep.
            </p>
          </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {team.map(({ name, role, desc, img }) => (
    <AnimatedSection key={name}>
      <div className="group bg-[#F7FAFA] rounded-3xl overflow-hidden card-hover border border-transparent hover:border-teal-100">
        <div className="relative h-72 overflow-hidden">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-[#1A1A2E] mb-1">{name}</h3>
          <div className="text-xs font-semibold text-[#00ABB2] mb-2 uppercase tracking-wide">{role}</div>
          <p className="text-sm text-[#4A5568] leading-relaxed">{desc}</p>
        </div>
      </div>
    </AnimatedSection>
  ))}
</div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-teal-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '1000+', label: 'Patients Served' },
              { value: '50+', label: 'Expert Professionals' },
              { value: '3+', label: 'Years of Care' },
              { value: 'Good', label: 'Patient Satisfaction' },
            ].map(({ value, label }) => (
              <AnimatedSection key={label}>
                <div>
                  <div className="text-4xl font-bold mb-1">{value}</div>
                  <div className="text-white/75 text-sm font-medium">{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F7FAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">
              Join the <span className="text-gradient">Fornax Family</span>
            </h2>
            <p className="text-[#4A5568] mb-8">
              Experience premium healthcare with a team that genuinely cares about your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-teal-gradient text-white font-semibold rounded-full shadow-md hover:shadow-teal-500/40 hover:scale-105 transition-all duration-200"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-[#00ABB2] text-[#00ABB2] font-semibold rounded-full hover:bg-teal-50 transition-all duration-200"
              >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Our Services
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
