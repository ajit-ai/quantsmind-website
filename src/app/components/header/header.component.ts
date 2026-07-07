import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

interface NavItem {
  label: string;
  link: string[];
  fragment?: string;
  path?: string;
  pathPrefix?: string;
  children?: {
    label: string;
    link: string[];
    description: string;
  }[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styles: [`
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #22d3ee, #6366f1, #a855f7);
      border-radius: 9999px;
      transition: width 0.3s ease;
    }
    .nav-link:hover::after {
      width: 100%;
    }
    .nav-link.nav-active {
      color: #ffffff;
    }
    .nav-link.nav-active::after {
      width: 100%;
    }
  `],
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
              <div class="relative group py-7">
                <a 
                  [routerLink]="item.link" 
                  [fragment]="item.fragment"
                  [class.nav-active]="isActive(item)"
                  class="nav-link relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer pb-1"
                >
                  {{ item.label }}
                </a>

                @if (item.children) {
                  <div class="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute left-1/2 top-full z-50 w-[25rem] -translate-x-1/2 rounded-xl border border-white/10 bg-[#0a0b10]/95 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl transition-all duration-200">
                    <div class="grid gap-2">
                      @for (child of item.children; track child.label) {
                        <a
                          [routerLink]="child.link"
                          class="group/item rounded-lg border border-transparent px-4 py-3 transition-colors duration-200 hover:border-cyan-400/20 hover:bg-white/5"
                        >
                          <span class="block text-sm font-semibold text-white">{{ child.label }}</span>
                          <span class="mt-1 block text-xs leading-relaxed text-gray-400 group-hover/item:text-gray-300">{{ child.description }}</span>
                        </a>
                      }
                    </div>
                  </div>
                }
              </div>
            }
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
            <div>
              <a 
                [routerLink]="item.link" 
                [fragment]="item.fragment"
                [class.text-white]="isActive(item)"
                [class.bg-white\/5]="isActive(item)"
                (click)="closeMenu()"
                class="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {{ item.label }}
              </a>
              @if (item.children) {
                <div class="ml-3 mt-1 border-l border-white/10 pl-3">
                  @for (child of item.children; track child.label) {
                    <a
                      [routerLink]="child.link"
                      (click)="closeMenu()"
                      class="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors duration-200"
                    >
                      {{ child.label }}
                    </a>
                  }
                </div>
              }
            </div>
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
  currentPath = signal('/');
  currentFragment = signal<string | null>('top');

  navItems: NavItem[] = [
    { label: 'Home', link: ['/'], fragment: 'top', path: '/' },
    {
      label: 'Services',
      link: ['/'],
      fragment: 'services',
      path: '/',
      pathPrefix: '/services',
      children: [
        {
          label: 'AI Solutions & Models',
          link: ['/services', 'ai'],
          description: 'Production AI models, RAG systems, vision pipelines, and MLOps.'
        },
        {
          label: 'Quantum Algorithms R&D',
          link: ['/services', 'quantum'],
          description: 'Quantum-ready optimization, simulation, and post-quantum research.'
        },
        {
          label: 'Cloud-Native Architecture',
          link: ['/services', 'cloud'],
          description: 'Secure Kubernetes, serverless, data, and observability platforms.'
        },
        {
          label: 'Software Development',
          link: ['/services', 'software'],
          description: 'Low-latency apps, dashboards, APIs, and enterprise workflow tools.'
        }
      ]
    },
    {
      label: 'Ecosystem',
      link: ['/'],
      fragment: 'products',
      path: '/',
      pathPrefix: '/ecosystem',
      children: [
        {
          label: 'QuantsCore SDK',
          link: ['/ecosystem', 'quants-core'],
          description: 'Quantum circuit simulation SDK with compilers, kernels, and GPU runtimes.'
        },
        {
          label: 'MindNeural Engine',
          link: ['/ecosystem', 'mind-neural'],
          description: 'Vector search and neural cache engine for high-throughput AI retrieval.'
        },
        {
          label: 'QuantumFlow Optimizer',
          link: ['/ecosystem', 'quantum-flow'],
          description: 'Combinatorial optimization solver for logistics, risk, and grid planning.'
        }
      ]
    },
    { label: 'Clients', link: ['/'], fragment: 'testimonials', path: '/' },
    { label: 'Labs', link: ['/research'], path: '/research' },
    { label: 'Contact', link: ['/'], fragment: 'contact', path: '/' }
  ];

  constructor(private router: Router) {
    this.syncActiveState(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => this.syncActiveState(event.urlAfterRedirects));
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  isActive(item: NavItem) {
    const path = this.currentPath();
    const matchesPrefix = item.pathPrefix ? path.startsWith(item.pathPrefix) : false;

    if (item.fragment) {
      return (path === '/' && this.currentFragment() === item.fragment) || matchesPrefix;
    }

    return item.path ? path === item.path || path.startsWith(`${item.path}/`) || matchesPrefix : matchesPrefix;
  }

  private syncActiveState(url: string) {
    const tree = this.router.parseUrl(url);
    const path = `/${tree.root.children['primary']?.segments.map(segment => segment.path).join('/') ?? ''}`;

    this.currentPath.set(path === '/' ? '/' : path.replace(/\/$/, ''));
    this.currentFragment.set(tree.fragment ?? (path === '/' ? 'top' : null));
  }
}
