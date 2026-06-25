import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-[#07080c] border-t border-white/5 pt-20 pb-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <!-- Brand Info -->
          <div>
            <a [routerLink]="['/']" class="flex items-center mb-6 group">
              <svg class="w-8 h-8 mr-3 text-cyan-400 transition-transform duration-500 group-hover:rotate-180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6" class="opacity-40" />
                <path d="M50 15 L25 50 L50 85 L75 50 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" class="opacity-80" />
                <circle cx="50" cy="50" r="10" fill="#06b6d4" />
              </svg>
              <span class="text-lg font-bold font-display tracking-wider text-white">
                Quants<span class="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Mind</span>
              </span>
            </a>
            <p class="text-sm text-gray-400 mb-6 leading-relaxed">
              Pioneering quantum-ready algorithms, neural AI solutions, and high-performance distributed systems for forward-thinking enterprises.
            </p>
            <!-- Social Links -->
            <div class="flex space-x-4">
              <a href="https://linkedin.com/company/quantsmind" target="_blank" rel="noopener noreferrer" class="p-2 bg-white/5 hover:bg-cyan-500/10 rounded-lg text-gray-400 hover:text-cyan-400 transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://wa.me/18005550199?text=Hello%20QuantsMind" target="_blank" rel="noopener noreferrer" class="p-2 bg-white/5 hover:bg-emerald-500/10 rounded-lg text-gray-400 hover:text-emerald-400 transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.9 5.86L2.6 22.3l4.57-1.3C8.68 21.6 10.29 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.46 0-2.85-.35-4.11-1l-.29-.17-2.73.78.79-2.61-.19-.3A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Services Sitemap -->
          <div>
            <h3 class="text-sm font-semibold text-white tracking-widest uppercase mb-6 font-display">Services</h3>
            <ul class="space-y-4">
              @for (srv of services; track srv) {
                <li>
                  <a [routerLink]="['/']" fragment="services" class="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">{{ srv }}</a>
                </li>
              }
            </ul>
          </div>

          <!-- Research / Company -->
          <div>
            <h3 class="text-sm font-semibold text-white tracking-widest uppercase mb-6 font-display">Insights & Labs</h3>
            <ul class="space-y-4">
              <li>
                <a [routerLink]="['/research']" class="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200">Research & Insights</a>
              </li>
              <li>
                <a [routerLink]="['/']" fragment="products" class="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">Product Ecosystem</a>
              </li>
              <li>
                <a [routerLink]="['/']" fragment="testimonials" class="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">Client Testimonials</a>
              </li>
            </ul>
          </div>

          <!-- Contact / Newsletter -->
          <div>
            <h3 class="text-sm font-semibold text-white tracking-widest uppercase mb-6 font-display">Connect</h3>
            <ul class="space-y-3 mb-6 text-sm text-gray-400">
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.502-5.132-3.811-6.634-6.634l1.293-.97c.362-.271.528-.733.417-1.173L6.763 3.69c-.125-.501-.575-.852-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                <a href="tel:+18005550199" class="hover:text-cyan-400 transition-colors">+1 (800) 555-0199</a>
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                <a href="mailto:info&#64;quantsmind.com" class="hover:text-cyan-400 transition-colors">info&#64;quantsmind.com</a>
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
                <a href="https://wa.me/18005550199?text=Hello%20QuantsMind" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition-colors">Direct WhatsApp Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 QuantsMind. All rights reserved. www.QuantsMind.com</p>
          <div class="flex space-x-6 mt-4 sm:mt-0">
            <a class="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
            <a class="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
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
