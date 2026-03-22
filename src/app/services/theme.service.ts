import { Injectable, signal } from '@angular/core';

const THEME_KEY = 'portfolio-theme';
type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly mode = signal<ThemeMode>('light');

  constructor() {
    const savedTheme = localStorage.getItem(THEME_KEY) as ThemeMode | null;
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme: ThemeMode = savedTheme ?? (preferredDark ? 'dark' : 'light');

    this.setTheme(initialTheme);
  }

  get isDarkMode(): boolean {
    return this.mode() === 'dark';
  }

  toggleTheme(): void {
    this.setTheme(this.isDarkMode ? 'light' : 'dark');
  }

  private setTheme(theme: ThemeMode): void {
    this.mode.set(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }
}