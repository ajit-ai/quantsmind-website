import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <!-- Brand Info -->
          <div>
            <a [routerLink]="['/']" class="flex items-center mb-6 group">
              <svg class="w-8 h-8 mr-3 text-indigo-600 transition-transform duration-500 group-hover:rotate-180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6" class="opacity-40" />
                <path d="M50 15 L25 50 L50 85 L75 50 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" class="opacity-80" />
                <circle cx="50" cy="50" r="10" fill="#4f46e5" />
              </svg>
              <span class="text-lg font-bold font-display tracking-wider text-slate-900">
                Quants<span class="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Mind</span>
              </span>
            </a>
            <p class="text-sm text-slate-500 mb-6 leading-relaxed">
              Pioneering quantum-ready algorithms, neural AI solutions, and high-performance distributed systems for forward-thinking enterprises.
            </p>
            <!-- Social Links -->
            <div class="flex space-x-4">
              <a href="https://linkedin.com/company/quantsmind" target="_blank" rel="noopener noreferrer" class="p-2 bg-slate-200/50 hover:bg-indigo-50 rounded-lg text-slate-500 hover:text-indigo-600 transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Services Sitemap -->
          <div>
            <h3 class="text-sm font-semibold text-slate-900 tracking-widest uppercase mb-6 font-display">Services</h3>
            <ul class="space-y-4">
              @for (srv of services; track srv) {
                <li>
                  <a [routerLink]="['/']" fragment="services" class="text-sm text-slate-500 hover:text-indigo-600 transition-colors duration-200 cursor-pointer">{{ srv }}</a>
                </li>
              }
            </ul>
          </div>

          <!-- Research / Company -->
          <div>
            <h3 class="text-sm font-semibold text-slate-900 tracking-widest uppercase mb-6 font-display">Insights & Labs</h3>
            <ul class="space-y-4">
              <li>
                <a [routerLink]="['/research']" class="text-sm text-slate-500 hover:text-indigo-600 transition-colors duration-200">Research & Insights</a>
              </li>
              <li>
                <a [routerLink]="['/']" fragment="products" class="text-sm text-slate-500 hover:text-indigo-600 transition-colors duration-200 cursor-pointer">Product Ecosystem</a>
              </li>
            </ul>
          </div>

          <!-- Contact / Newsletter -->
          <div>
            <h3 class="text-sm font-semibold text-slate-900 tracking-widest uppercase mb-6 font-display">Contact</h3>
            <ul class="space-y-3 mb-6 text-sm text-slate-500">
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21c-4.418 0-8-3.582-8-8 0-3.314 2.686-6 6-6 1.657 0 3.157.672 4.243 1.757A5.973 5.973 0 0118 13c0 4.418-3.582 8-8 8z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>
                <a href="https://maps.google.com?q=28/85,+Shikargarh,+Uchiyarda+Road,+Jodhpur,+Rajasthan+342015" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-600 transition-colors">Plot 28, Shikargarh, Jodhpur, Rajasthan 342015</a>
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                <a href="mailto:ajitkumar&#64;quantsmind.com" class="hover:text-indigo-600 transition-colors">ajitkumar&#64;quantsmind.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-slate-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
          <p>&copy; 2026 QuantsMind. All rights reserved.</p>
          <div class="flex flex-wrap items-center gap-4 mt-4 sm:mt-0">
            <a href="#" class="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-slate-600 transition-colors">Terms of Service</a>
            <span class="text-gray-500"></span>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  services = [
    'AI Solutions & Modeling',
    'Quantum Algorithms R&D',
    'Cloud-Native Scalability',
    'High-Performance Software'
  ];
}
