import type { Metadata } from 'next';
import HomePage from '@/components/landing/home-page';

export const metadata: Metadata = {
  title: 'Yatra | Premium Travel-Tech Mobility Platform',
  description:
    'Yatra helps commuters and travelers book faster, track live rides, and trust verified drivers through a premium travel-tech experience.',
  keywords: ['Yatra', 'ride booking', 'travel tech', 'mobility platform', 'live tracking', 'waitlist'],
  openGraph: {
    title: 'Yatra | Premium Travel-Tech Mobility Platform',
    description:
      'A polished mobility experience with live tracking, verified drivers, and a conversion-focused booking journey.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yatra | Premium Travel-Tech Mobility Platform',
    description:
      'Book faster, track in real time, and ride with confidence through Yatra.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Yatra Home',
  description:
    'Premium mobility landing page for booking rides, joining waitlist, and exploring Yatra travel-tech features.',
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How quickly can new riders complete booking?',
        acceptedAnswer: { '@type': 'Answer', text: 'Most riders can complete booking in under one minute.' },
      },
      {
        '@type': 'Question',
        name: 'Can first-time users trust driver quality?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Yatra prioritizes verified driver profiles and transparent ratings.' },
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomePage />
    </>
  );
}
