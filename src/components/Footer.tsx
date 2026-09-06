import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from '../assets/icons/fornaxtextLogoWhite.svg'

const services = [
  'Physiotherapy',
  'Nurse Care At Home',
  'Baby Care',
  'Old Age Care',
  'Caregiver',
  'Respite Care',
  'Doctor Consultation',
  'Mental Care',
];

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Events & Gallery', path: '/events' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#00868B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">

              <div>
                <img src={Logo} className='w-24 h-auto object-contain mb-1' />
                <div className="text-[10px] text-teal-200 tracking-widest uppercase">Healthcare</div>
              </div>
            </div>
            <p className="text-sm text-teal-100 leading-relaxed mb-5">
              Believe in Safe Hands. We deliver premium healthcare and paramedical services with compassion, expertise, and technology.
            </p>
            <div className="flex gap-3">
              {[
                // { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: 'https://www.instagram.com/fornax_healthcare?stkn=ODBkMmg3b2lkOWNt&utm_source=qr' },
                // { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/rishikeshrdhoot/' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-teal-100 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-300 group-hover:bg-white transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            {/* UPCOMING TODO */}
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wide uppercase">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-teal-100 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-300 group-hover:bg-white transition-colors duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-4">

              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-teal-300 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-teal-100 leading-relaxed">
                  3rd Floor, Regus, Mohali Citi Centre-02, Block-F,<br />
                  GMADA Aerocity, S.A.S Nagar,<br />
                  Mohali (Pb) 140301
                </p>
              </li>

              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-teal-300 flex-shrink-0" />
                <a href="mailto:fornaxintelcarehealthservices@gmail.com" className="text-sm text-teal-100 hover:text-white transition-colors">
                  fornaxintelcarehealthservices@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-teal-300 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+917448129489" className="text-sm text-teal-100 hover:text-white transition-colors">
                    +91 74481-29489
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-teal-200">
            &copy; {new Date().getFullYear()} Fornax Healthcare. All rights reserved.
          </p>
          <p className="text-sm text-teal-200 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
