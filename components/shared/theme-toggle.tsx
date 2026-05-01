'use client';

import { useEffect, useState } from 'react';
import { MoonStar, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'yatra-theme';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initialTheme: Theme = savedTheme ?? 'light';

    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  if (!mounted) {
    return (
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full border-[var(--yatra-stroke)] bg-white/70"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4 text-amber-500" />
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="h-10 w-10 rounded-full border-[var(--yatra-stroke)] bg-white/70 backdrop-blur hover:bg-white"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <MoonStar className="h-4 w-4 text-slate-700" /> : <Sun className="h-4 w-4 text-amber-400" />}
    </Button>
  );
}
