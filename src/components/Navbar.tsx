import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import Logo from '../assets/icons/fornaxtextLogo.svg'
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Events', path: '/events' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg shadow-teal-500/10'
          : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex flex-col leading-none">
              <img src={Logo}  className='w-24 h-auto object-contain mb-1'/>
              <span className="text-[10px] font-medium text-[#00ABB2] tracking-widest uppercase">
                Healthcare
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#00ABB2] active'
                    : 'text-[#4A5568] hover:text-[#00ABB2]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 bg-teal-gradient text-white text-sm font-semibold rounded-full shadow-md hover:shadow-teal-500/40 hover:scale-105 transition-all duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-[#4A5568] hover:bg-teal-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'bg-teal-50 text-[#00ABB2]'
                  : 'text-[#4A5568] hover:bg-gray-50 hover:text-[#00ABB2]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 px-5 py-3 bg-teal-gradient text-white text-sm font-semibold rounded-xl text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
