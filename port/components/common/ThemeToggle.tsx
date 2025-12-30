'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Sync on mount in case SSR had different default
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    }
  }, []);

  const toggle = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="p-2 rounded-lg hover:bg-surface/80 transition-fast border border-transparent hover:border-primary/20"
    >
      {theme === 'dark' ? (
        <Icon name="SunIcon" size={20} className="text-yellow-400" />
      ) : (
        <Icon name="MoonIcon" size={20} className="text-slate-600" />
      )}
    </button>
  );
}
