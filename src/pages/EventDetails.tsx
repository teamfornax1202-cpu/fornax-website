import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  CalendarDays,
  MapPin,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  Play,
  Maximize,
  Volume2
} from 'lucide-react'
import { events, EventData, MediaItem } from '../data/events'

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

export default function EventDetails() {
  const { id } = useParams<{ id: string }>()
  const event = events.find((e) => e.id === id)

  const [activeMediaIndex, setActiveMediaIndex] = useState<number | null>(null)
  const [scale, setScale] = useState<number>(1)

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeMediaIndex === null) return
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowRight') {
        navigateMedia('next')
      } else if (e.key === 'ArrowLeft') {
        navigateMedia('prev')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeMediaIndex])

  if (!event) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-red-500">Event Not Found</h1>
        <Link to="/events" className="mt-4 inline-flex items-center gap-2 text-[#00ABB2] font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Events
        </Link>
      </div>
    )
  }

  const openLightbox = (index: number) => {
    setActiveMediaIndex(index)
    setScale(1)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setActiveMediaIndex(null)
    setScale(1)
    document.body.style.overflow = 'unset'
  }

  const navigateMedia = (direction: 'next' | 'prev') => {
    if (activeMediaIndex === null) return
    let newIndex = activeMediaIndex
    if (direction === 'next') {
      newIndex = (activeMediaIndex + 1) % event.media.length
    } else {
      newIndex = (activeMediaIndex - 1 + event.media.length) % event.media.length
    }
    setActiveMediaIndex(newIndex)
    setScale(1)
  }

  const handleZoom = (type: 'in' | 'out') => {
    setScale((prev) => {
      if (type === 'in') return Math.min(prev + 0.25, 3)
      return Math.max(prev - 0.25, 0.5)
    })
  }

  const activeMedia = activeMediaIndex !== null ? event.media[activeMediaIndex] : null

  return (
    <div className="pt-24 pb-20 bg-[#F7FAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#4A5568] hover:text-[#00ABB2] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Events & Experiences
          </Link>
        </div>

        {/* Event Header Banner */}
        <AnimatedSection className="relative rounded-3xl overflow-hidden shadow-lg mb-12 h-[350px] sm:h-[450px]">
          <img
            src={event.coverImage}
            alt={event.name}
            className={`w-full h-full object-cover ${event.coverImageClass || ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest bg-[#00ABB2] text-white px-3 py-1 rounded-full mb-4">
              Event Details
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
              {event.name}
            </h1>
            
            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium text-gray-200">
              <div className="flex items-start gap-2">
                <CalendarDays className="w-4.5 h-4.5 text-[#00ABB2] flex-shrink-0 mt-0.5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4.5 h-4.5 text-[#00ABB2] flex-shrink-0 mt-0.5" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection className="bg-white rounded-3xl p-8 border border-gray-100/80 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-4">About the Event</h2>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed whitespace-pre-line">
                {event.longDetails}
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white rounded-3xl p-8 border border-gray-100/80 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-4">Key Highlights</h2>
              <ul className="space-y-3">
                {event.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#00ABB2] mt-2 flex-shrink-0" />
                    <span className="text-sm text-[#4A5568] leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Stats & Metadata */}
          <div>
            <AnimatedSection className="bg-gradient-to-br from-[#00868B] to-[#00ABB2] rounded-3xl p-8 text-white shadow-md sticky top-24">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-teal-100">
                Impact & Scope
              </h3>
              <div className="space-y-6">
                {event.stats.map((stat, idx) => (
                  <div key={idx} className="pb-6 border-b border-white/10 last:border-0 last:pb-0">
                    <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                    <div className="text-xs text-teal-100 font-semibold uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

        </div>

        {/* Gallery Grid */}
        <AnimatedSection className="mb-10">
          <div className="flex justify-between items-end mb-6">
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#00ABB2] block mb-2">
                Event Media
              </span>
              <h2 className="text-2xl font-extrabold text-[#1A1A2E]">
                Photo & Video <span className="text-gradient">Gallery</span>
              </h2>
            </div>
            <span className="text-xs font-semibold text-[#6B8A8A]">
              {event.media.length} Items
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {event.media.map((item, idx) => {
              const isVideo = item.type === 'video'
              return (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="relative group rounded-2xl overflow-hidden aspect-square bg-[#E8F0F0] cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  {isVideo ? (
                    <video
                      src={item.src}
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${item.rotateClass || ''}`}
                    />
                  )}
                  
                  {/* Media indicator overlay */}
                  <div className="absolute inset-0 bg-[#001E20]/0 group-hover:bg-[#001E20]/40 transition-all duration-200 flex items-center justify-center">
                    {isVideo ? (
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-[#00ABB2] fill-[#00ABB2] ml-0.5" />
                      </div>
                    ) : (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Maximize className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Title overlay bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-[11px] font-bold truncate">{item.title}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </AnimatedSection>

      </div>

      {/* Premium Lightbox Modal */}
      {activeMediaIndex !== null && activeMedia && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between select-none">
          
          {/* Lightbox Header / Controls */}
          <div className="flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-sm z-10">
            <div className="text-white text-xs sm:text-sm font-semibold truncate max-w-[60%]">
              {activeMedia.title}
            </div>
            
            <div className="flex items-center gap-4 text-white">
              {/* Zoom Buttons (only for images) */}
              {activeMedia.type === 'image' && (
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-2 py-1">
                  <button
                    onClick={() => handleZoom('out')}
                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-bold w-12 text-center">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={() => handleZoom('in')}
                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Status Counter */}
              <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full">
                {activeMediaIndex + 1} / {event.media.length}
              </span>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-105"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Container */}
          <div className="relative flex-1 flex items-center justify-center p-4">
            
            {/* Left Button */}
            <button
              onClick={() => navigateMedia('prev')}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-110 z-10"
              title="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Media Content */}
            <div
              className="max-w-full max-h-[80vh] flex items-center justify-center transition-transform duration-200 ease-out"
              style={{ transform: `scale(${scale})` }}
            >
              {activeMedia.type === 'video' ? (
                <video
                  src={activeMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[75vh] rounded-lg shadow-2xl outline-none"
                  poster={activeMedia.poster}
                />
              ) : (
                <img
                  src={activeMedia.src}
                  alt={activeMedia.title}
                  className={`max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl ${activeMedia.rotateClass || ''}`}
                />
              )}
            </div>

            {/* Right Button */}
            <button
              onClick={() => navigateMedia('next')}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-110 z-10"
              title="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Lightbox Footer / Caption */}
          <div className="px-6 py-4 bg-black/40 text-center text-xs text-gray-400">
            Use Left/Right arrows or buttons to navigate. Press ESC to close.
          </div>

        </div>
      )}

    </div>
  )
}
