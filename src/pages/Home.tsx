import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Activity,
  Heart,
  Baby,
  Users,
  UserCheck,
  RefreshCw,
  Stethoscope,
  Brain,
  ChevronRight,
  Star,
  Shield,
  Clock,
  Smartphone,
  ArrowRight,
  CheckCircle,
  CalendarDays,
  Video,
  Play,
  MapPin,
} from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import { events } from '../data/events'






const serviceChips = [
  { label: 'Physiotherapy', icon: Activity, path: '/services' },
  { label: 'Chiropractor', icon: Activity, path: '/services' },
  { label: 'Nurse Care', icon: Heart, path: '/services' },
  { label: 'Baby Care', icon: Baby, path: '/services' },
  { label: 'Old Age Care', icon: Users, path: '/services' },
  { label: 'Caregiver', icon: UserCheck, path: '/services' },
  { label: 'Respite Care', icon: RefreshCw, path: '/services' },
  { label: 'Doctor Consult', icon: Stethoscope, path: '/services' },
  { label: 'Mental Care', icon: Brain, path: '/services' },
]

const conditions = [
  'Orthopaedic',
  'Neck Pain',
  'Spine Pain',
  'Sports Injury',
  'Arthritis',
  'Post Surgery',
  'Stroke Rehab',
  'Knee Pain',
  'Back Pain',
  'Shoulder Pain',
  'Cerebral Palsy',
  "Parkinson's",
  'Frozen Shoulder',
  'Sciatica',
]

const stats = [
  { value: '1000+', label: 'Patients Served' },
  { value: '50+', label: 'Expert Therapists' },
  { value: '5+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
]

const whyUs = [
  {
    icon: Shield,
    title: 'Certified Professionals',
    desc: 'All our therapists and caregivers are licensed, trained, and background-verified.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    desc: 'Round-the-clock support and emergency care whenever you need us.',
  },
  {
    icon: Heart,
    title: 'Patient-First Approach',
    desc: 'Personalized care plans built around your unique health goals and comfort.',
  },
  {
    icon: Star,
    title: 'Evidence-Based Care',
    desc: 'Treatment protocols grounded in the latest clinical research and best practices.',
  },
]



function useIntersectionObserver(ref: React.RefObject<Element>, options = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-8')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options])
}

function AnimatedSection({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  useIntersectionObserver(ref as React.RefObject<Element>)
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  )
}
export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <HeroSlider />
      {/* Events & Experiences Preview Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#00ABB2] mb-3">
              Portfolio
            </p>
            <h2 className="text-[30px] font-extrabold text-[#0F2B2C] mb-3">
              Our <span className="text-[#00ABB2]">Events & Experiences</span>
            </h2>
            <p className="text-sm text-[#6B8A8A] max-w-md mx-auto">
              Behind the scenes of events where Fornax delivered professional medical, therapy, and recovery support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {events.slice(0, 3).map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="group bg-[#F7FAFA] rounded-2xl overflow-hidden border border-[#E2E8F0]/40 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer block"
              >
                {/* Top Section: Cover image & details */}
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={event.coverImage}
                      alt={event.name}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${event.coverImageClass || ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-[#00ABB2] text-white px-2 py-0.5 rounded-full">
                      Completed
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold text-[#0F2B2C] leading-snug group-hover:text-[#00ABB2] transition-colors line-clamp-2">
                      {event.name}
                    </h3>
                    <p className="text-xs text-[#6B8A8A] line-clamp-3 leading-relaxed">
                      {event.shortDetails}
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Location, Date & Action */}
                <div className="p-5 pt-0 mt-auto border-t border-gray-100">
                  <div className="py-3 space-y-2 text-[11px] font-semibold text-[#4A5568]">
                    <div className="flex items-start gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5 text-[#00ABB2] flex-shrink-0 mt-0.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#00ABB2] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{event.location}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00ABB2] group-hover:gap-2.5 transition-all duration-200">
                    View Details & Gallery <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ABB2] hover:bg-[#00868B] text-white text-xs font-extrabold uppercase rounded-full shadow-md hover:shadow-teal-500/20 hover:scale-[1.03] transition-all duration-250"
            >
              Explore All Events & Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7F7] py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#00ABB2] mb-3">
            Our Services
          </p>

          <h2 className="text-[32px] font-extrabold text-[#0F2B2C] leading-tight mb-3">
            Premium Healthcare <span className="text-[#00ABB2]">Services</span>
          </h2>

          <p className="text-sm text-[#6B8A8A] leading-relaxed max-w-lg mx-auto mb-9">
            Comprehensive paramedical services delivered by certified professionals — at home, at
            your schedule.
          </p>

          <div className="flex flex-wrap gap-2.5 justify-center mb-8">
            {serviceChips.map(({ label, icon: Icon, path }) => (
              <Link
                key={label}
                to={path}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                     text-[13px] font-semibold border-[1.5px]
                     bg-white border-[#D8ECEC] text-[#2D6A6E]
                     hover:bg-[#00ABB2] hover:border-[#00ABB2] hover:text-white
                     hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,171,178,0.2)]
                     transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </Link>
            ))}
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold
                 text-[#00ABB2] hover:gap-3 transition-all duration-200"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      {/* Stats */}
      <section className="bg-teal-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center text-white">
                <div className="text-4xl font-bold mb-1">{value}</div>
                <div className="text-sm text-white/75 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-[#e7f9f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full">
                About Fornax
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] leading-tight mb-6">
                Where Technology Meets
                <br />
                <span className="text-gradient">Compassionate Care</span>
              </h2>
              <p className="text-[#4A5568] leading-relaxed mb-5">
                Fornax Healthcare is a premium paramedical services platform dedicated to bringing
                expert healthcare to your doorstep. We believe that quality care shouldn't be
                confined to clinic walls.
              </p>
              <p className="text-[#4A5568] leading-relaxed mb-8">
                Our team of certified physiotherapists, nurses, caregivers, and medical
                professionals work together to deliver evidence-based, personalized treatment that
                transforms lives — all from the comfort of your home.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="flex items-center gap-1.5 text-sm text-[#00ABB2] font-medium bg-teal-50 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Our MCA Registered • CIN: U85300PB2022PTC055231
                </span>
                <span className="flex items-center gap-1.5 text-sm text-[#00ABB2] font-medium bg-teal-50 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Our team is registered with NCAHP.
                </span>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-gradient text-white font-semibold rounded-full shadow-md hover:shadow-teal-500/40 hover:scale-105 transition-all duration-200"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Healthcare professionals"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-xl bg-teal-gradient flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#1A1A2E]">4.9 / 5</div>
                  <div className="text-xs text-[#4A5568]">Average patient rating</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full">
              Why Fornax
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Healthcare You Can <span className="text-gradient">Trust</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <AnimatedSection key={title}>
                <div className="bg-[#F7FAFA] rounded-2xl p-6 h-full card-hover border border-transparent hover:border-teal-100">
                  <div className="w-12 h-12 rounded-xl bg-teal-gradient flex items-center justify-center mb-5 shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A2E] mb-2">{title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-[#F7FAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full">
              Conditions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
              Conditions We <span className="text-gradient">Treat</span>
            </h2>
            <p className="text-[#4A5568] max-w-xl mx-auto">
              Our specialists are trained to treat a wide range of medical conditions with
              evidence-based protocols.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {conditions.map((condition) => (
                <Link
                  key={condition}
                  to="/services"
                  className="px-5 py-2.5 bg-white rounded-full border border-gray-100 text-sm font-medium text-[#4A5568] hover:bg-[#00ABB2] hover:text-white hover:border-[#00ABB2] hover:shadow-md transition-all duration-200 shadow-sm"
                >
                  {condition}
                </Link>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#00ABB2] font-semibold hover:gap-3 transition-all duration-200"
            >
              View All Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
              Premium Healthcare <span className="text-gradient">Services</span>
            </h2>
            <p className="text-[#4A5568] max-w-xl mx-auto">
              Comprehensive paramedical services delivered by certified professionals — at home, at
              your schedule.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Activity,
                title: 'Physiotherapy',
                desc: 'Expert physiotherapy for pain relief, mobility restoration, and rehabilitation.',
                img: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=400',
              },
              {
                icon: Heart,
                title: 'Nurse Care at Home',
                desc: 'Professional nursing care for wound management, IV therapy, and post-op care.',
                img: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
              },
              {
                icon: Brain,
                title: 'Mental Care',
                desc: 'Holistic mental wellness programs with certified therapists and counselors.',
                img: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400',
              },
            ].map(({ icon: Icon, title, desc, img }) => (
              <AnimatedSection key={title}>
                <div className="group bg-[#F7FAFA] rounded-2xl overflow-hidden card-hover border border-transparent hover:border-teal-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#00ABB2]/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-[#1A1A2E] mb-2">{title}</h3>
                    <p className="text-sm text-[#4A5568] leading-relaxed mb-4">{desc}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#00ABB2] hover:gap-2 transition-all duration-200"
                    >
                      Learn More <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-gradient text-white font-semibold rounded-full shadow-md hover:shadow-teal-500/40 hover:scale-105 transition-all duration-200"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* App Download */}
      <section className="py-20 bg-teal-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Download Our App</h2>
            <p className="text-white/80 text-lg mb-2 font-semibold">Coming Soon</p>
            <p className="text-white/70 mb-10 leading-relaxed">
              Book appointments, track your health progress, and connect with your care team — all
              from your phone. Our app is launching soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {[
                {
                  icon: '🤖',
                  label: 'Android',
                  sub: 'Get it on Google Play',
                },
                {
                  icon: '',
                  label: 'iOS',
                  sub: 'Download on App Store',
                },
              ].map(({ icon, label, sub }) => (
                <button
                  key={label}
                  disabled
                  className="flex items-center gap-3 px-7 py-4 bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl text-white opacity-80 cursor-not-allowed hover:bg-white/20 transition-colors"
                >
                  <div className="text-left">
                    <div className="text-xs text-white/60">{sub}</div>
                    <div className="font-semibold">{label}</div>
                  </div>
                  <span className="ml-2 text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">
                    Soon
                  </span>
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F7FAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              What Our Patients <span className="text-gradient">Say</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Physiotherapy Patient',
                text: "Fornax transformed my recovery after knee surgery. The physiotherapist was professional, punctual, and incredibly knowledgeable. I'm back on my feet in record time!",
                rating: 5,
                img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
              },
              {
                name: 'Priya Sharma',
                role: 'Nurse Care Patient',
                text: 'The nurse care service was exceptional. Having a trained nurse at home gave our whole family peace of mind during a difficult time. Highly recommend Fornax.',
                rating: 5,
                img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
              },
              {
                name: 'Amit Verma',
                role: 'Old Age Care',
                text: "The caregiver assigned to my parents was warm, patient, and genuinely caring. Fornax's service quality is top-notch and we feel our parents are in safe hands.",
                rating: 5,
                img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
              },
            ].map(({ name, role, text, rating, img }) => (
              <AnimatedSection key={name}>
                <div className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-50 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-6 flex-1">"{text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-semibold text-[#1A1A2E]">{name}</div>
                      <div className="text-xs text-[#00ABB2]">{role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Banner */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Experience <span className="text-[#00ABB2]">Premium Care?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Book your first consultation today and take the first step toward better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#00ABB2] hover:bg-[#00868B] text-white font-semibold rounded-full shadow-xl hover:shadow-teal-500/40 hover:scale-105 transition-all duration-200"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+917448129489"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-full border border-white/20 transition-all duration-200"
              >
                Call +91 74481-29489
              </a>
              <a
                href="tel:+919270440380"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-full border border-white/20 transition-all duration-200"
              >
                Call +91 92704-40380
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

function VideoCard({ src, poster }: { src: string; poster?: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative w-full h-full">
      <video
        src={src}
        poster={poster}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onClick={e => {
          const v = e.currentTarget
          v.paused ? v.play().catch(() => { }) : v.pause()
        }}
      />

      {/* play icon — hides when playing */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[46px] h-[46px] rounded-full bg-[#00ABB2] flex items-center justify-center">
            <Play className="w-5 h-5 text-white ml-0.5" />
          </div>
        </div>
      )}
    </div>
  )
}