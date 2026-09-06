import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import nurse_care from '../assets/images/nurse_care.webp'
import personal_care from '../assets/images/personal_care.webp'
import baby_care from '../assets/images/baby_care.webp'
import Rehabilitation from '../assets/images/Rehabilitation.webp'
import Hero1 from '../assets/images/first-hero.webp'
import Hero2 from '../assets/images/hero-3.webp'
import Hero3 from '../assets/images/hero-4.webp'

type SlideType = 'image' | 'video';

interface Slide {
  type: SlideType;
  src: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaPath: string;
  badge?: string;
}

const slides: Slide[] = [
  {
    type: 'image',
    src: Hero1,
    title: 'First in physiotherapy — at races, fitness events & workplaces.',
    subtitle:
      `India's first on-site physiotherapy team — injury prevention, recovery & performance support at marathons, fitness events, and corporate wellness.`,
    ctaLabel: 'Book Event Physiotherapy',
    ctaPath: '/services',
    badge: 'On-Site Event Coverage',
  },
  {
    type: 'image',
    src: Hero2,
    title: 'Expert Physio at Every Finish Line.',
    subtitle:
      'On-site physiotherapy for marathons, races & endurance events — keeping athletes moving.',
    ctaLabel: 'Book Physiotherapy Team',
    ctaPath: '/services',
    badge: 'Event Recovery Experts',
  },
   {
    type: 'image',
    src: Hero3,
    title: 'Your Workforce Deserves to Move Better.',
    subtitle:
      'Corporate physiotherapy programs designed to reduce pain, prevent injury, and boost productivity — right at your workplace.',
    ctaLabel: 'Book Corporate Physio',
    ctaPath: '/services',
    badge: 'Workplace Wellness',
  },
  {
    type: 'image',
    src: Rehabilitation,
    title: 'Expert Physiotherapy Rehabilitation in the Comfort of Your Home.',
    subtitle: 'We bring professional care to help you move freely and live comfortably, tailored to every age.',
    ctaLabel: 'Book Physiotherapy',
    ctaPath: '/services',
    badge: 'Trusted by 1000+ patients',
  },
  {
    type: 'image',
    src: nurse_care || 'https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Expert Nursing, Compassionate Care in Your Home.',
    subtitle: 'We provide safe, professional medical support to help you or your loved ones heal and recover comfortably.',
    ctaLabel: 'Explore Nurse Care',
    ctaPath: '/services',
    badge: 'Available 24/7',
  },

  {
    type: 'image',
    src: personal_care || 'https://images.pexels.com/photos/5473037/pexels-photo-5473037.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Dignified Support, Dedicated Presence at Home.',
    subtitle: 'We offer personalized assistance with daily living, ensuring comfort, independence, and peace of mind.',
    ctaLabel: 'Learn About Elder Care',
    ctaPath: '/services',
    badge: 'Premium Quality Care',
  },
  {
    type: 'image',
    src: baby_care,
    title: `Tender Care for Your Little One's Every Need.`,
    subtitle: `We provide safe, nurturing care for infants, giving parents the support they need to ensure their child's happy and healthy growth.`,
    ctaLabel: 'Explore Mental Care',
    ctaPath: '/services',
    badge: 'Evidence-Based Therapy',
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/8436490/pexels-photo-8436490.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: "Compassionate Support for Life's Golden Years.",
    subtitle: 'We provide attentive, respectful care for elderly individuals, focusing on their well-being, dignity, and quality of life.',
    ctaLabel: 'Explore Elder Care',
    ctaPath: '/services',
    badge: 'Caring for Seniors',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setPrev(current);
    setIsAnimating(true);
    setCurrent(index);
    setProgress(0);
    setTimeout(() => {
      setPrev(null);
      setIsAnimating(false);
    }, 700);
  }, [current, isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev_ = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  const startAutoplay = useCallback(() => {
    clearTimers();
    setProgress(0);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => {
        const n = (c + 1) % slides.length;
        setPrev(c);
        setIsAnimating(true);
        setProgress(0);
        setTimeout(() => {
          setPrev(null);
          setIsAnimating(false);
        }, 700);
        return n;
      });
    }, 5000);

    progressRef.current = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.4));
    }, 20);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      startAutoplay();
    } else {
      clearTimers();
    }
    return clearTimers;
  }, [isPlaying, startAutoplay]);

  const slide = slides[current];

  return (
    <div className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : i === prev ? 'opacity-0 z-5' : 'opacity-0 z-0'
            }`}
        >
          {s.type === 'video' ? (
            <video
              ref={(el) => { videoRefs.current[i] = el; }}
              src={s.src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={s.src}
              alt={s.title}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ${i === current ? 'scale-110' : 'scale-100'
                }`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div
            key={current}
            className="max-w-2xl animate-slide-up"
          >
            {slide.badge && (
              <div className="inline-flex items-center gap-2 bg-[#00ABB2]/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-lg">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                {slide.badge}
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 drop-shadow-lg whitespace-pre-line">
              {slide.title}
            </h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-lg drop-shadow">
              {slide.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={slide.ctaPath}
                className="px-7 py-3.5 bg-[#00ABB2] hover:bg-[#00868B] text-white font-semibold rounded-full shadow-xl hover:shadow-teal-500/50 transition-all duration-200 hover:scale-105"
              >
                {slide.ctaLabel}
              </Link>
              <Link
                to="/about"
                className="px-7 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        {/* Dots + progress */}
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { clearTimers(); goTo(i); if (isPlaying) startAutoplay(); }}
              className="relative group"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-10 bg-white' : 'w-4 bg-white/50 hover:bg-white/70'
                }`}>
                {i === current && (
                  <div
                    className="h-full bg-[#00ABB2] rounded-full transition-none"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Prev/Next + play/pause */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => { clearTimers(); prev_(); if (isPlaying) startAutoplay(); }}
            className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => { clearTimers(); next(); if (isPlaying) startAutoplay(); }}
            className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-1/2 right-6 sm:right-10 z-30 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-3xl font-bold text-white/80 tabular-nums">
          {String(current + 1).padStart(2, '0')}
        </span>
        <div className="w-px h-12 bg-white/30" />
        <span className="text-sm font-medium text-white/40 tabular-nums">
          {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 opacity-70">
        <span className="text-[10px] text-white/60 tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </div>
  );
}
