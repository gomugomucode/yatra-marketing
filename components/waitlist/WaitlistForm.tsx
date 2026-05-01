'use client';

import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type WaitlistFormProps = {
  compact?: boolean;
  className?: string;
};

export default function WaitlistForm({ compact = false, className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage("You're on the list. Keep an eye on your inbox.");
        setEmail('');
        setName('');
        return;
      }

      if (response.status === 409) {
        setStatus('duplicate');
        setMessage('This email is already registered.');
        return;
      }

      setStatus('error');
      setMessage(data.error || 'Unable to join the waitlist right now.');
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`w-full py-6 text-center ${className}`}
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--yatra-accent-50)] shadow-[0_0_20px_rgba(234,139,45,0.15)]">
          <svg className="h-8 w-8 text-[var(--yatra-accent-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-3 text-2xl font-semibold text-[var(--foreground)]">Spot secured</h3>
        <p className="mx-auto max-w-[250px] text-sm leading-relaxed text-[var(--muted-foreground)]">{message}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className={`flex flex-col gap-5 ${compact ? 'md:flex-row md:items-end' : ''}`}>
        
        <div className={`flex flex-col gap-2 text-left ${compact ? 'flex-1' : ''}`}>
          {!compact && <label htmlFor="name" className="ml-1 text-xs font-medium text-[var(--muted-foreground)]">Full Name</label>}
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="John Doe"
            className="h-12 w-full rounded-xl border border-[var(--yatra-stroke)] bg-white px-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition-all hover:border-[var(--yatra-accent-200)] focus:border-[var(--yatra-accent-600)] focus:outline-none focus:ring-2 focus:ring-[var(--yatra-accent-200)] dark:bg-[var(--card)]"
          />
        </div>

        <div className={`flex flex-col gap-2 text-left ${compact ? 'flex-1' : ''}`}>
          {!compact && <label htmlFor="email" className="ml-1 text-xs font-medium text-[var(--muted-foreground)]">Email Address <span className="text-[var(--yatra-accent-600)]">*</span></label>}
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="john@example.com"
            className="h-12 w-full rounded-xl border border-[var(--yatra-stroke)] bg-white px-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition-all hover:border-[var(--yatra-accent-200)] focus:border-[var(--yatra-accent-600)] focus:outline-none focus:ring-2 focus:ring-[var(--yatra-accent-200)] dark:bg-[var(--card)]"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`group relative h-12 rounded-xl bg-[var(--yatra-accent-600)] px-8 text-sm font-semibold text-white transition-all hover:bg-[var(--yatra-accent-700)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-[var(--yatra-accent-600)] ${compact ? '' : 'mt-2 w-full'}`}
        >
          <span className="flex items-center justify-center gap-2">
            {status === 'loading' ? (
              <>
                <svg className="h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                {compact ? 'Join Waitlist' : 'Join the Waitlist'}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </span>
        </button>

      </div>

      <AnimatePresence>
        {(status === 'error' || status === 'duplicate') && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 rounded-lg border border-red-200 bg-red-50 py-2 text-center text-sm font-medium text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300">
              {message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}