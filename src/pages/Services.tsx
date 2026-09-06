import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity, Heart, Baby, Users, UserCheck, RefreshCw,
  Stethoscope, Brain, ArrowRight, CheckCircle, Clock
} from 'lucide-react';

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  image: string;
  tag?: string;
  comingSoon?: boolean;
}

const services: Service[] = [
  {
    id: 'physiotherapy',
    icon: Activity,
    title: 'Physiotherapy',
    description: 'Expert physiotherapy treatment tailored to restore mobility, relieve pain, and accelerate recovery. Our certified physiotherapists use evidence-based techniques for optimal outcomes.',
    features: ['Manual Therapy', 'Electrotherapy', 'Exercise Rehabilitation', 'Post-surgery Recovery'],
    image: 'https://images.pexels.com/photos/7659570/pexels-photo-7659570.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Most Popular',
  },
  {
    id: 'nurse-care',
    icon: Heart,
    title: 'Nurse Care At Home',
    description: 'Professional nursing care delivered at home — from wound care to IV therapy, medication management, and round-the-clock medical monitoring.',
    features: ['Wound Dressing', 'IV Therapy', 'Medication Management', 'Vital Monitoring'],
    image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'baby-care',
    icon: Baby,
    title: 'Baby Care (Pediatrics)',
    description: 'Specialized pediatric care for newborns and infants. Our trained professionals provide gentle, expert care to support healthy development and peace of mind for parents.',
    features: ['Newborn Care', 'Lactation Support', 'Developmental Monitoring', 'Baby Massage'],
    image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'old-age-care',
    icon: Users,
    title: 'Old Age Care',
    description: 'Dignified, compassionate elder care services providing companionship, daily assistance, and medical support for seniors in the comfort of their homes.',
    features: ['Daily Living Assistance', 'Companionship', 'Health Monitoring', 'Mobility Support'],
    image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'caregiver',
    icon: UserCheck,
    title: 'Caregiver / Personal Care',
    description: 'Dedicated personal caregivers providing comprehensive assistance with daily activities, personal hygiene, and emotional support for those who need it most.',
    features: ['Personal Hygiene', 'Meal Preparation', 'Companionship', 'Errand Support'],
    image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=600',

  },
  {
    id: 'respite-care',
    icon: RefreshCw,
    title: 'Respite Care',
    description: 'Temporary relief for primary caregivers — providing professional care coverage so you can rest, recharge, and attend to your own needs without worry.',
    features: ['Short-term Coverage', 'Flexible Scheduling', 'Professional Care', 'Family Support'],
    image: 'https://images.pexels.com/photos/6303773/pexels-photo-6303773.jpeg?auto=compress&cs=tinysrgb&w=600',

  },
  {
    id: 'doctor-consultation',
    icon: Stethoscope,
    title: 'Doctor Consultation',
    description: 'Connect with experienced doctors for home visits and telehealth consultations. Get expert medical advice, diagnosis, and treatment plans from the comfort of your home.',
    features: ['Home Visits', 'Telehealth', 'Specialist Referrals', 'Prescription Management'],
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
    comingSoon: true,
    tag: 'Coming Soon',
  },
  {
    id: 'mental-care',
    icon: Brain,
    title: 'Mental Care',
    description: 'Holistic mental health support from certified therapists and counselors. Evidence-based programs for anxiety, depression, stress management, and overall psychological wellness.',
    features: ['Cognitive Therapy', 'Counseling', 'Stress Management', 'Mindfulness Programs'],
    image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600',
     comingSoon: true,
    tag: 'Coming Soon',
  },
];

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

export default function Services() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative py-24 bg-[#1A1A2E] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E] via-[#1A1A2E]/90 to-[#1A1A2E]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-4 bg-teal-900/40 px-3 py-1.5 rounded-full border border-teal-500/30">
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Explore Our <span className="text-[#00ABB2]">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive therapy and healthcare support delivered by certified professionals — designed around your comfort, schedule, and specific health needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F7FAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <AnimatedSection key={service.id}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
              Simple Steps to <span className="text-[#00ABB2]">Better Health</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Book Appointment', desc: 'Choose your service and preferred time slot via our website or phone.' },
              { step: '02', title: 'Assessment', desc: 'Our specialist conducts a thorough assessment to understand your needs.' },
              { step: '03', title: 'Care Plan', desc: 'A personalized treatment plan is crafted specifically for you.' },
              { step: '04', title: 'Recovery', desc: 'Receive professional care at home and track your progress with us.' },
            ].map(({ step, title, desc }) => (
              <AnimatedSection key={step}>
                <div className="relative text-center p-6">
                  <div className="w-14 h-14 rounded-2xl bg-teal-gradient flex items-center justify-center mx-auto mb-5 shadow-lg shadow-teal-500/25">
                    <span className="text-white font-bold text-sm">{step}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A2E] mb-2">{title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Health Journey Today</h2>
            <p className="text-white/80 mb-8 text-lg">
              Our team of experts is ready to help you achieve better health outcomes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00ABB2] font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              Book a Service
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const { icon: Icon, title, description, features, image, tag, comingSoon } = service;
  return (
    <div className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 hover:border-teal-100 flex flex-col ${comingSoon ? 'opacity-85' : ''}`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {tag && (
          <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
            comingSoon
              ? 'bg-amber-500/90 text-white'
              : 'bg-[#00ABB2]/90 text-white'
          } backdrop-blur-sm`}>
            {tag}
          </span>
        )}
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-[#1A1A2E] mb-3 flex items-center gap-2">
          {title}
          {comingSoon && (
            <span className="flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
              <Clock className="w-3 h-3" /> Soon
            </span>
          )}
        </h3>
        <p className="text-sm text-[#4A5568] leading-relaxed mb-5 flex-1">{description}</p>

        <div className="grid grid-cols-2 gap-2 mb-5">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#00ABB2] flex-shrink-0" />
              <span className="text-xs text-[#4A5568]">{f}</span>
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
            comingSoon
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none'
              : 'bg-[#00ABB2]/10 text-[#00ABB2] hover:bg-teal-gradient hover:text-white'
          }`}
        >
          {comingSoon ? 'Coming Soon' : 'Book Service'}
          {!comingSoon && <ArrowRight className="w-3.5 h-3.5" />}
        </Link>
      </div>
    </div>
  );
}
