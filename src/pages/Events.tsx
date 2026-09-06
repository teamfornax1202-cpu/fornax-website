import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react'
import { events } from '../data/events'

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

export default function Events() {
  return (
    <div className="pt-24 pb-20 bg-[#F7FAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-[#00ABB2] tracking-widest uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full">
            Our Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A2E] mb-6 tracking-tight">
            Events & <span className="text-gradient">Experiences</span>
          </h1>
          <p className="text-[#4A5568] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Discover how Fornax delivers on-site paramedical support, sports rehabilitation, and wellness outreach programs across key national events.
          </p>
        </AnimatedSection>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <AnimatedSection key={event.id}>
              <Link
                to={`/events/${event.id}`}
                className="group bg-white rounded-3xl overflow-hidden card-hover border border-gray-100/80 shadow-sm flex flex-col h-full hover:shadow-xl transition-all duration-300 cursor-pointer block"
              >
                {/* Cover Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.coverImage}
                    alt={event.name}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${event.coverImageClass || ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-[#00ABB2] text-white px-3 py-1 rounded-full backdrop-blur-sm">
                      Completed Event
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-lg font-bold text-[#1A1A2E] mb-3 group-hover:text-[#00ABB2] transition-colors line-clamp-2">
                    {event.name}
                  </h2>
                  <p className="text-sm text-[#6B8A8A] mb-4 line-clamp-3 leading-relaxed">
                    {event.shortDetails}
                  </p>

                  <div className="mt-auto space-y-2 pb-6 border-b border-gray-50">
                    <div className="flex items-start gap-2 text-xs font-semibold text-[#4A5568]">
                      <CalendarDays className="w-4 h-4 text-[#00ABB2] flex-shrink-0 mt-0.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs font-semibold text-[#4A5568]">
                      <MapPin className="w-4 h-4 text-[#00ABB2] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{event.location}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#00ABB2] group-hover:gap-3 transition-all duration-200">
                      Explore Event Details & Gallery
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </div>
  )
}
