'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock3, MapPinned, ShieldCheck, Sparkles, Ticket } from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type FeatureItem = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

export type StepItem = {
  title: string;
  description: string;
  eta: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  centered?: boolean;
}) {
  return (
    <div className={cn('max-w-2xl space-y-4', centered && 'mx-auto text-center')}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--yatra-accent-600)]">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">{title}</h2>
      <p className="text-pretty text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">{subtitle}</p>
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 24, filter: 'blur(6px)' }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={reducedMotion ? undefined : { duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export function FeatureCard({ feature, index }: { feature: FeatureItem; index: number }) {
  const Icon = feature.icon;

  return (
    <Reveal delay={index * 0.08}>
      <article className="yatra-surface group h-full rounded-3xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="inline-flex rounded-2xl border border-[var(--yatra-accent-200)] bg-[var(--yatra-accent-50)] p-3 text-[var(--yatra-accent-700)]">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{feature.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">{feature.description}</p>
      </article>
    </Reveal>
  );
}

export function JourneyStep({ step, index }: { step: StepItem; index: number }) {
  return (
    <Reveal delay={index * 0.1}>
      <article className="yatra-surface rounded-2xl p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yatra-accent-700)]">Step {index + 1}</p>
          <span className="inline-flex items-center gap-1 rounded-full border border-[var(--yatra-stroke)] bg-white px-3 py-1 text-xs text-[var(--muted-foreground)]">
            <Clock3 className="h-3.5 w-3.5" />
            {step.eta}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{step.description}</p>
      </article>
    </Reveal>
  );
}

export function ConversionRail() {
  const reducedMotion = useReducedMotion();

  return (
    <Reveal>
      <motion.div
        className="yatra-surface relative overflow-hidden rounded-3xl p-6 md:p-8"
        initial={reducedMotion ? false : { scale: 0.98, opacity: 0 }}
        whileInView={reducedMotion ? undefined : { scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={reducedMotion ? undefined : { duration: 0.45, ease: 'easeOut' }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_200px_at_90%_10%,rgba(254,215,170,0.25),transparent)]" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--yatra-accent-700)]">Ready to move</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
          Book in seconds. Ride with confidence.
        </h3>
        <p className="mt-3 max-w-2xl text-sm text-[var(--muted-foreground)] md:text-base">
          Yatra combines live ETAs, verified drivers, and digital receipts so every trip feels fast and reliable.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
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
            className="rounded-full border-[var(--yatra-stroke)] bg-white/80 px-7 text-[var(--foreground)] hover:bg-white"
          >
            <Link href="#booking-flow">See booking flow</Link>
          </Button>
        </div>
      </motion.div>
    </Reveal>
  );
}

export const coreFeatures: FeatureItem[] = [
  {
    title: 'Live trip intelligence',
    description: 'Track your vehicle in real time with accurate ETAs and stop-level updates designed for daily commuters.',
    icon: MapPinned,
  },
  {
    title: 'Verified trust layer',
    description: 'Every driver profile is identity-checked and continuously rated, improving confidence for first-time riders.',
    icon: ShieldCheck,
  },
  {
    title: 'Frictionless booking',
    description: 'A clean, guided booking flow reduces decision fatigue and gets riders from search to seat in under a minute.',
    icon: Ticket,
  },
  {
    title: 'Premium daily experience',
    description: 'Elegant interactions, clear status feedback, and thoughtful spacing make Yatra feel polished and dependable.',
    icon: Sparkles,
  },
];

export const bookingSteps: StepItem[] = [
  {
    title: 'Select route and seat',
    description: 'Search routes, compare ETAs, and choose your preferred seat with clear availability cues.',
    eta: '~20s',
  },
  {
    title: 'Confirm details',
    description: 'Review fare, driver profile, and pickup point before confirming your trip in one action.',
    eta: '~15s',
  },
  {
    title: 'Track and board',
    description: 'Receive live arrival updates and board with a scannable receipt backed by secure trip history.',
    eta: 'Realtime',
  },
];

export function FeedbackStates() {
  const states = [
    { label: 'Loading', text: 'Finding best rides near you', icon: Clock3, tone: 'text-amber-600 bg-amber-50 border-amber-200' },
    { label: 'Success', text: 'Ride confirmed. Driver arriving in 4 min', icon: CheckCircle2, tone: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
    { label: 'Empty', text: 'No rides found. Try a nearby pickup hub', icon: MapPinned, tone: 'text-slate-600 bg-slate-50 border-slate-200' },
  ] as const;

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {states.map((state, index) => {
        const Icon = state.icon;
        return (
          <Reveal key={state.label} delay={index * 0.06}>
            <div className={cn('rounded-2xl border p-4 text-sm', state.tone)}>
              <div className="flex items-center gap-2 font-semibold">
                <Icon className="h-4 w-4" />
                {state.label} state
              </div>
              <p className="mt-2 text-xs md:text-sm">{state.text}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
