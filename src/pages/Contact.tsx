import { useRef, useEffect } from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

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

export default function Contact() {

  return (
    <div className="pt-[72px]">
      {/* Hero Split */}
      <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image with text */}
        <div className="relative min-h-[400px] lg:min-h-[85vh]">
          <img
            src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Healthcare"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E]/85 via-[#00868B]/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 lg:px-16">
            <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit border border-white/20">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              It's Time for All of Us to Take Responsibility for Our Health
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-md">
              Book a consultation, ask about our services, or simply reach out. Our care team is here for you.
            </p>

            <div className="space-y-4">
              {[
                // { icon: MapPin, label: 'Our Clinic', value: 'Kharar, Punjab, India' },
                { icon: Mail, label: 'Email', value: 'teamfornax1202@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 74481-29489' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00ABB2]/30 backdrop-blur-sm border border-[#00ABB2]/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#00ABB2]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-medium uppercase tracking-wide">{label}</div>
                    <div className="text-white font-medium text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="tel:+916280120073"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#00ABB2] text-white font-semibold rounded-full text-sm hover:bg-[#00868B] transition-colors shadow-lg"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a
                href="tel:+917448129489"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/15 text-white font-semibold rounded-full text-sm border border-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <Phone className="w-3.5 h-3.5" /> +91 74481-29489
              </a>
            </div>
          </div>
        </div>

        {/* Right: Coming Soon Section */}
        <div className="bg-white flex items-center justify-center py-16 px-6 sm:px-12 lg:px-16">
          <div className="w-full max-w-md text-center py-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-amber-50 text-amber-700 border border-amber-200/80 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Coming Soon
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] mb-4 tracking-tight">
              Online Booking <br />
              <span className="text-gradient">Is Coming Soon</span>
            </h2>

            <p className="text-[#6B8A8A] text-base leading-relaxed mb-8">
              Our direct online appointment & consultation booking portal is currently under development to serve you better.
            </p>

            <div className="p-6 bg-[#F7FAFA] rounded-2xl border border-gray-100/80 space-y-4 mb-8 text-left">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#00ABB2]">
                Need Immediate Assistance?
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                You can directly reach out to our team via phone or email for bookings, inquiries, and emergency support.
              </p>
              
              <div className="pt-2 space-y-3">
                <a
                  href="tel:+917448129489"
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200/80 text-sm font-semibold text-[#1A1A2E] hover:border-[#00ABB2] hover:text-[#00ABB2] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 text-[#00ABB2]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+91 74481-29489</span>
                </a>

                <a
                  href="mailto:teamfornax1202@gmail.com"
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200/80 text-sm font-semibold text-[#1A1A2E] hover:border-[#00ABB2] hover:text-[#00ABB2] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 text-[#00ABB2]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">teamfornax1202@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="text-xs text-gray-400 font-medium">
              Thank you for your patience!
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 bg-[#F7FAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              // {
              //   icon: MapPin,
              //   title: 'Our Clinic',
              //   lines: ['Kharar, Punjab', 'India'],
              //   link: null,
              // },
              {
                icon: Mail,
                title: 'Email Us',
                lines: ['fornaxintelcarehealthservices@gmail.com'],
                link: 'mailto:fornaxintelcarehealthservices@gmail.com',
              },
              // {
              //   icon: Mail,
              //   title: 'Email Us',
              //   lines: ['teamfornax1202@gmail.com'],
              //   link: 'mailto:teamfornax1202@gmail.com',
              // },
               {
                icon: Phone,
                title: 'Call Us',
                lines: ['+91 74481-29489'],
                link: 'tel:+917448129489',
              },
              {
                icon: Phone,
                title: 'Call Us',
                lines: ['+91 92704-40380'],
                link: 'tel:+919270440380',
              },
            ].map(({ icon: Icon, title, lines, link }) => (
              <AnimatedSection key={title}>
                <div className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-50 text-center">
                  <div className="w-12 h-12 rounded-xl bg-teal-gradient flex items-center justify-center mx-auto mb-4 shadow-md shadow-teal-500/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1A1A2E] mb-2">{title}</h3>
                  {lines.map((line) => (
                    link ? (
                      <a key={line} href={link} className="block text-sm text-[#4A5568] hover:text-[#00ABB2] transition-colors">
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm text-[#4A5568]">{line}</p>
                    )
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      {/* <section className="pb-20 bg-[#F7FAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="relative bg-[#1A1A2E] h-12 flex items-center px-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-white/50 text-xs ml-4 font-medium">Fornax Healthcare — Kharar, India</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55044.41753261066!2d76.60503555!3d30.7445894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140b4f5b1d%3A0xbcbe6d4fcda0a8bd!2sKharar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                className="w-full h-80 md:h-96 lg:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fornax Healthcare Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* Hours */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Clock className="w-5 h-5 text-[#00ABB2]" />
              <h3 className="font-semibold text-[#1A1A2E] text-lg">Service Hours</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                // { day: 'Monday – Saturday', hours: '8:00 AM – 8:00 PM' },
                // { day: 'Sunday', hours: '9:00 AM – 5:00 PM' },
                { day: 'Emergency Support', hours: '24/7 Available' },
                { day: 'Home Visits', hours: 'Flexible Scheduling' },
              ].map(({ day, hours }) => (
                <div key={day} className="flex items-center justify-between px-5 py-3.5 bg-[#F7FAFA] rounded-xl">
                  <span className="text-sm font-medium text-[#1A1A2E]">{day}</span>
                  <span className="text-sm text-[#00ABB2] font-semibold">{hours}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
