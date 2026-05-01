import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import WaitlistForm from '@/components/waitlist/WaitlistForm';
import ThemeToggle from '@/components/shared/theme-toggle';

export const metadata: Metadata = {
  title: 'Join Yatra Waitlist | Early Access',
  description:
    'Join the Yatra waitlist for early access to premium ride booking, live trip tracking, and trusted mobility features.',
  keywords: ['Yatra waitlist', 'early access', 'ride booking', 'mobility', 'travel app'],
  openGraph: {
    title: 'Join Yatra Waitlist',
    description: 'Reserve early access to Yatra and be first to experience premium mobility.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Yatra Waitlist',
    description: 'Be first in line for Yatra premium mobility.',
  },
};

export default function WaitlistPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] px-4 py-8 text-[var(--foreground)] md:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_15%_0%,rgba(251,191,36,0.18),transparent),radial-gradient(45%_40%_at_85%_15%,rgba(14,165,233,0.18),transparent)]" />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
        <ThemeToggle />
      </div>

      <main className="mx-auto mt-10 grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="yatra-surface rounded-[2rem] p-7 md:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--yatra-accent-200)] bg-[var(--yatra-accent-50)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--yatra-accent-700)]">
            <Sparkles className="h-3.5 w-3.5" />
            Early access
          </span>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Your next ride starts with a smarter waitlist.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
            Join Yatra to get first access to premium booking, trusted driver matching, and live trip intelligence built for everyday travelers.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              'Priority onboarding when your city launches',
              'Live ETA + transparent booking updates',
              'Premium support for early riders',
              'Trusted, verified driver network',
            ].map((item) => (
              <p key={item} className="inline-flex items-start gap-2 rounded-2xl border border-[var(--yatra-stroke)] bg-white p-3 text-sm dark:bg-[var(--card)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="yatra-surface rounded-[2rem] p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--yatra-accent-700)]">Reserve your spot</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Join the Yatra waitlist</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">
            Enter your details and we will notify you when Yatra opens in your area.
          </p>

          <div className="mt-6">
            <WaitlistForm />
          </div>
        </section>
      </main>
    </div>
  );
}
