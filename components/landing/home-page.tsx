'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MoveRight, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/shared/theme-toggle';
import {
  bookingSteps,
  ConversionRail,
  coreFeatures,
  FeatureCard,
  FeedbackStates,
  JourneyStep,
  Reveal,
  SectionHeading,
} from '@/components/landing/marketing-sections';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#booking-flow', label: 'Booking flow' },
  { href: '#experience', label: 'Experience' },
  { href: '#faq', label: 'FAQ' },
];

const faqs = [
  'How quickly can new riders complete booking?',
  'Can first-time users trust driver quality?',
  'How does Yatra handle poor network connectivity?',
  'Is Yatra usable for both daily commuters and travelers?',
];

export default function HomePage() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_20%_0%,rgba(251,191,36,0.16),transparent),radial-gradient(50%_45%_at_80%_10%,rgba(14,165,233,0.16),transparent)]" />
      <header className="sticky top-0 z-50 border-b border-[var(--yatra-stroke)] bg-[color:var(--background)/0.75] backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--yatra-accent-100)] text-[var(--yatra-accent-700)]">
              <MoveRight className="h-4 w-4" />
            </span>
            <span className="text-lg">Yatra</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm text-[var(--muted-foreground)] md:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="rounded-full bg-[var(--yatra-accent-600)] px-5 text-white hover:bg-[var(--yatra-accent-700)]">
              <Link href="/waitlist">Get started</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={reducedMotion ? undefined : { duration: 0.55, ease: 'easeOut' }}
              className="space-y-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--yatra-accent-200)] bg-[var(--yatra-accent-50)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--yatra-accent-700)]">
                <Star className="h-3.5 w-3.5" />
                Premium mobility experience
              </span>
              <h1 className="max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Move smarter with a travel platform built for real life.
              </h1>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
                Yatra helps commuters and travelers discover, book, and track rides with confidence through a polished, trustworthy interface.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-[var(--yatra-accent-600)] px-7 text-white hover:bg-[var(--yatra-accent-700)]">
                  <Link href="/waitlist">
                    Join waitlist
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[var(--yatra-stroke)] bg-white px-7 text-[var(--foreground)] hover:bg-[var(--yatra-surface)] dark:bg-[var(--card)]"
                >
                  <a href="#booking-flow">Book your first ride</a>
                </Button>
              </div>

              <div className="grid max-w-lg gap-3 sm:grid-cols-3">
                {[
                  { label: 'Daily active users', value: '25K+' },
                  { label: 'Average booking time', value: '42 sec' },
                  { label: 'Driver trust rating', value: '4.9/5' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-[var(--yatra-stroke)] bg-white/80 p-3 dark:bg-[var(--card)]">
                    <p className="text-lg font-semibold">{stat.value}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={reducedMotion ? undefined : { duration: 0.6, delay: 0.08, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-amber-200/40 via-sky-200/20 to-transparent blur-3xl" />
              <div className="yatra-surface relative overflow-hidden rounded-[2rem] p-6 md:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_120px_at_90%_0%,rgba(14,165,233,0.14),transparent)]" />
                <div className="flex items-center justify-between text-sm">
                  <p className="font-semibold text-[var(--yatra-accent-700)]">Yatra Ride Panel</p>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-[var(--yatra-stroke)] bg-white p-4 dark:bg-[var(--card)]">
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">Route</p>
                    <p className="mt-1 text-lg font-semibold">Butwal → Kathmandu</p>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Pickup in 6 minutes • Seat B2 reserved</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--yatra-stroke)] bg-white p-4 dark:bg-[var(--card)]">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Driver</p>
                      <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1 text-xs text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                        <Users className="h-3.5 w-3.5" />
                        Verified
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">Aarav Shrestha • 540 completed trips</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Why Yatra"
              title="A premium travel-tech layer built for trust and speed"
              subtitle="Clear information architecture, better readability, and subtle visual depth help users make decisions quickly."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {coreFeatures.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="booking-flow" className="bg-[var(--yatra-surface)] px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl space-y-10">
            <SectionHeading
              eyebrow="Booking flow"
              title="Designed to convert first-time visitors into confident riders"
              subtitle="The booking experience removes friction with guided actions, predictable steps, and strong feedback at every stage."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {bookingSteps.map((step, index) => (
                <JourneyStep key={step.title} step={step} index={index} />
              ))}
            </div>
            <FeedbackStates />
          </div>
        </section>

        <section id="experience" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl space-y-10">
            <SectionHeading
              eyebrow="Polished experience"
              title="Soft depth, focused motion, and high-clarity actions"
              subtitle="Framer Motion is used for staggered reveal, smooth hover transitions, and gentle entrance animations that guide attention."
              centered
            />
            <ConversionRail />
          </div>
        </section>

        <section id="faq" className="bg-[var(--yatra-surface)] px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="FAQ"
              title="Answers that build confidence"
              subtitle="The interface is optimized for clarity so users always understand what happens next."
              centered
            />
            <div className="mt-8 space-y-3">
              {faqs.map((item, index) => (
                <Reveal key={item} delay={index * 0.04}>
                  <details className="group rounded-2xl border border-[var(--yatra-stroke)] bg-white p-5 dark:bg-[var(--card)]">
                    <summary className="cursor-pointer list-none font-medium text-[var(--foreground)] marker:content-none">
                      {item}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      Yatra keeps every step explicit: clear timing, clear price, clear identity, and clear trip confirmation.
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--yatra-stroke)] px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[var(--muted-foreground)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-[var(--foreground)]">Yatra</p>
            <p className="mt-1">Premium mobility for everyday journeys.</p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/waitlist" className="transition-colors hover:text-[var(--foreground)]">
              Join waitlist
            </Link>
            <a href="#features" className="transition-colors hover:text-[var(--foreground)]">
              Features
            </a>
            <a href="#booking-flow" className="transition-colors hover:text-[var(--foreground)]">
              Booking flow
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
