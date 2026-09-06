import Shimla_Event_Video_1 from '../assets/video/shimla-video.mp4'
import Shimla_Event_1 from '../assets/images/event/shimla/shimla-1.webp'
import Shimla_Event_2 from '../assets/images/event/shimla/shimla-2.webp'
import Shimla_Event_3 from '../assets/images/event/shimla/shimla-3.webp'
import Shimla_Event_4 from '../assets/images/event/shimla/shimla-4.webp'
import Shimla_Event_5 from '../assets/images/event/shimla/shimla-5.webp'

import EventImage_1 from '../assets/images/rishi TCH(1).webp'
import EventImage_2 from '../assets/images/PXL_20260104_045659807.webp'
import EventImage_3 from '../assets/images/IMG_0596.webp'
import EventImage_5 from '../assets/images/IMG_1352.webp'
import EventImage_6 from '../assets/images/IMG_1938.webp'
import EventImage_7 from '../assets/images/IMG_1969.webp'
import EventImage_8 from '../assets/images/IMG_0590.webp'
import EventImage_9 from '../assets/images/IMG_0606.webp'
import EventImage_10 from '../assets/images/IMG_1350.webp'
import EventImage_11 from '../assets/images/IMG_0624.webp'
import EventImage_13 from '../assets/images/IMG_1964.webp'
import EventImage_14 from '../assets/images/Rekha_Somwanshi_1.webp'
import EventImage_15 from '../assets/images/Rekha_Somwanshi_2.webp'

export interface MediaItem {
  type: 'image' | 'video'
  src: string
  title: string
  poster?: string
  rotateClass?: string
}

export interface EventData {
  id: string
  name: string
  date: string
  location: string
  coverImage: string
  coverImageClass?: string
  shortDetails: string
  longDetails: string
  stats: { label: string; value: string }[]
  highlights: string[]
  media: MediaItem[]
}

export const events: EventData[] = [
  {
    id: 'tuffman-chandigarh-half-marathon',
    name: 'Tuffman Chandigarh Half Marathon (6th Edition)',
    date: '28th September 2025',
    location: 'Capitol Complex, Near Open Hand Monument, Sector–1, Chandigarh',
    coverImage: EventImage_1,
    shortDetails: 'Fornax provided comprehensive race-day medical support, active recovery stretching, and sports rehab for runners.',
    longDetails: 'At the 6th Edition of the Tuffman Chandigarh Half Marathon at Capitol Complex, Sector–1, Chandigarh, Fornax setup dedicated high-capacity recovery and physical therapy zones. Our specialists provided pre-race warm-up stretching, immediate cramp relief, active recovery protocols, and post-run sports injury treatment for hundreds of participants.',
    stats: [
      { label: 'Athletes Served', value: '450+' },
      { label: 'Physiotherapists on Site', value: '15' },
      { label: 'Recovery Stations', value: '5' }
    ],
    highlights: [
      'On-track emergency physical therapy and active stretching.',
      'Post-race leg recovery, muscle foam rolling & massage support.',
      'Official medical recovery partner for Tuffman Chandigarh Half Marathon.'
    ],
    media: [
      {
        type: 'image',
        src: EventImage_1,
        title: 'Fornax Sports Recovery Team at Chandigarh Half Marathon'
      },
      {
        type: 'image',
        src: EventImage_3,
        title: 'Pre-race runner stretching and muscle warm-up'
      },
      {
        type: 'image',
        src: EventImage_8,
        title: 'Post-marathon sports rehabilitation in action'
      },
      {
        type: 'image',
        src: EventImage_11,
        title: 'Team Fornax appreciation shield'
      }
    ]
  },
  {
    id: 'tuffman-global-10k-new-delhi',
    name: 'Tuffman Global 10K New Delhi',
    date: '4th January 2026',
    location: 'West Block, Jawaharlal Nehru Stadium (JLN Stadium), Entry from Gate No. 1, Pragati Vihar, New Delhi – 110003',
    coverImage: EventImage_2,
    shortDetails: 'Providing elite sports injury assessment, emergency active recovery, and physical care at JLN Stadium.',
    longDetails: 'Fornax partnered as the official physical therapy and athlete wellness provider for the Tuffman Global 10K in New Delhi. Operating from Jawaharlal Nehru Stadium (Gate No. 1), our team of specialized physiotherapists delivered targeted active stretching, taping, joint mobilization, and post-run rehab support for thousands of runners.',
    stats: [
      { label: 'Runners Supported', value: '600+' },
      { label: 'Therapists Deployed', value: '18' },
      { label: 'Consultations & Rehab', value: '300+' }
    ],
    highlights: [
      'Fast-acting active recovery tents set up inside JLN Stadium complex.',
      'Kinesiology taping & pre-race joint movement optimization.',
      'Comprehensive post-finish-line muscle stretching & hydration assistance.'
    ],
    media: [
      {
        type: 'image',
        src: EventImage_2,
        title: 'Fornax Recovery Booth at JLN Stadium New Delhi'
      },
      {
        type: 'image',
        src: EventImage_5,
        title: 'Sports physio team assisting endurance runners',
        rotateClass: '-rotate-90 scale-[1.35]'
      },
      {
        type: 'image',
        src: EventImage_14,
        title: 'One-on-one muscle stretch and recovery session'
      },
      {
        type: 'image',
        src: EventImage_15,
        title: 'Post-event runner checkup and counseling'
      }
    ]
  },
  {
    id: 'tuffman-shimla-ultra-half-marathon',
    name: 'Tuffman Shimla Ultra & Half Marathon Mashobra (10th Edition)',
    date: '6th June 2026',
    location: 'Mashobra Greens, Village Shipur, Shimla, Himachal Pradesh – 171007',
    coverImage: Shimla_Event_1,
    shortDetails: 'Official recovery partner supporting runners in high-altitude ultra marathon terrain at Mashobra Greens.',
    longDetails: 'For the milestone 10th Edition of the Tuffman Shimla Ultra & Half Marathon at Mashobra Greens, Fornax setup high-altitude physical therapy and recovery stations. Our team treated severe muscle exhaustion, elevation-induced fatigue, cramps, and sports injuries, providing specialized post-run rehabilitation along the scenic Himalayan trails.',
    stats: [
      { label: 'Athletes Served', value: '500+' },
      { label: 'Physiotherapists on Site', value: '14' },
      { label: 'Elevation Profile', value: '2,200m' }
    ],
    highlights: [
      'Comprehensive high-altitude post-race active recovery and stretching.',
      'Emergency injury assessment, ice therapy, and dry needling.',
      'Official partner for the 10th landmark edition at Mashobra Greens.'
    ],
    media: [
      {
        type: 'video',
        src: Shimla_Event_Video_1,
        title: 'Team Fornax Physio at Tuffman Shimla Ultra & Half Marathon'
      },
      {
        type: 'image',
        src: Shimla_Event_1,
        title: 'Recovery zone setup at Mashobra Greens'
      },
      {
        type: 'image',
        src: Shimla_Event_2,
        title: 'Physiotherapy team award & appreciation ceremony'
      },
      {
        type: 'image',
        src: Shimla_Event_3,
        title: 'Active post-marathon stretching session'
      },
      {
        type: 'image',
        src: Shimla_Event_4,
        title: 'Fornax Physio supporting ultra marathoners'
      },
      {
        type: 'image',
        src: Shimla_Event_5,
        title: 'Certificates of appreciation ceremony'
      }
    ]
  }
]


