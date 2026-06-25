import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-[#0a0b10]/75 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <a [routerLink]="['/']" class="flex items-center group cursor-pointer">
            <svg class="w-9 h-9 mr-3 text-cyan-400 transition-transform duration-500 group-hover:rotate-180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6" class="opacity-40" />
              <path d="M50 15 L25 50 L50 85 L75 50 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" class="opacity-80" />
              <path d="M25 50 L75 50" stroke="currentColor" stroke-width="1.5" class="opacity-30" />
              <path d="M50 15 L50 85" stroke="currentColor" stroke-width="1.5" class="opacity-30" />
              <circle cx="50" cy="50" r="12" fill="url(#logoGradient)" class="animate-pulse" />
              <circle cx="25" cy="50" r="4" fill="#6366F1" />
              <circle cx="75" cy="50" r="4" fill="#6366F1" />
              <circle cx="50" cy="15" r="4" fill="#10B981" />
              <circle cx="50" cy="85" r="4" fill="#10B981" />
              <defs>
                <radialGradient id="logoGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" transform="translate(50 50) rotate(90) scale(12)">
                  <stop stop-color="#06b6d4" />
                  <stop offset="1" stop-color="#8b5cf6" />
                </radialGradient>
              </defs>
            </svg>
            <span class="text-xl font-bold font-display tracking-wider text-white">
              Quants<span class="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Mind</span>
            </span>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            @for (item of navItems; track item.label) {
              <a 
                [routerLink]="item.link" 
                [fragment]="item.fragment"
                class="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
              >
                {{ item.label }}
              </a>
            }
            <a 
              [routerLink]="['/']" 
              fragment="contact"
              class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-indigo-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-800"
            >
              <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0a0b10] rounded-md group-hover:bg-opacity-0">
                Get Started
              </span>
            </a>
          </nav>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button 
              (click)="toggleMenu()" 
              type="button" 
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-controls="mobile-menu" 
              [aria-expanded]="menuOpen()"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Menu Icon -->
              <svg 
                [class.hidden]="menuOpen()" 
                class="block h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!-- Close Icon -->
              <svg 
                [class.hidden]="!menuOpen()" 
                class="block h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        [class.hidden]="!menuOpen()" 
        class="md:hidden border-b border-white/5 bg-[#0a0b10]/95 backdrop-blur-lg" 
        id="mobile-menu"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          @for (item of navItems; track item.label) {
            <a 
              [routerLink]="item.link" 
              [fragment]="item.fragment"
              (click)="closeMenu()"
              class="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200"
            >
              {{ item.label }}
            </a>
          }
          <div class="px-3 py-4">
            <a 
              [routerLink]="['/']" 
              fragment="contact"
              (click)="closeMenu()"
              class="w-full text-center block px-4 py-2.5 rounded-md text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 shadow-md shadow-cyan-500/20"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  menuOpen = signal(false);

  navItems = [
    { label: 'Home', link: ['/'], fragment: 'top' },
    { label: 'Services', link: ['/'], fragment: 'services' },
    { label: 'Products', link: ['/'], fragment: 'products' },
    { label: 'Testimonials', link: ['/'], fragment: 'testimonials' },
    { label: 'Research', link: ['/research'] },
    { label: 'Contact', link: ['/'], fragment: 'contact' }
  ];

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
