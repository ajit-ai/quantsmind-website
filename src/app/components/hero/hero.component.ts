import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section id="top" class="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0a0b10]">
      <!-- Background Glowing Gradients -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-slow"></div>
        <div class="absolute bottom-[20%] right-[10%] w-[40rem] h-[40rem] rounded-full bg-indigo-500/10 blur-[130px] animate-pulse-slow" style="animation-delay: 2s;"></div>
      </div>

      <!-- Tech Grid Pattern -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70 z-0"></div>

      <!-- Main Layout -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Badge -->
        <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-8 animate-float">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>Next-Generation Computational Labs</span>
        </div>

        <!-- Heading -->
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display tracking-tight text-white mb-6 leading-[1.1] max-w-5xl mx-auto">
          Unleash Quantum-Ready <br>
          <span class="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            AI & Computational Power
          </span>
        </h1>

        <!-- Subheading -->
        <p class="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans font-light">
          At QuantsMind, we engineer quantum-ready algorithms, secure cloud architectures, and highly optimized neural systems to supercharge enterprise scalability and drive data-backed breakthroughs.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            [routerLink]="['/']" 
            fragment="contact"
            class="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 hover:from-cyan-400 hover:via-indigo-400 hover:to-violet-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 text-center cursor-pointer"
          >
            Initiate Consultation
          </a>
          <a 
            [routerLink]="['/']" 
            fragment="services"
            class="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 text-center cursor-pointer"
          >
            Explore Services
          </a>
        </div>

        <!-- Hero Graphic (Floating Glassmorphic Qubit Visual) -->
        <div class="relative max-w-4xl mx-auto mt-8 animate-float" style="animation-duration: 8s;">
          <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-20 blur-xl"></div>
          <div class="relative glass-panel rounded-2xl p-6 md:p-10 border border-white/10 shadow-2xl">
            <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs text-gray-400 font-mono">
              <div class="flex space-x-2">
                <span class="w-3 h-3 rounded-full bg-red-500/50"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                <span class="w-3 h-3 rounded-full bg-green-500/50"></span>
              </div>
              <span>www.QuantsMind.com // Quantum Core Sandbox</span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div class="p-5 rounded-xl bg-white/5 border border-white/5">
                <div class="text-cyan-400 font-mono text-xs mb-2">MODULE // 01</div>
                <div class="font-display font-semibold text-lg text-white mb-1">Neural Integration</div>
                <div class="text-sm text-gray-400">Deep learning networks utilizing hybrid classical-quantum models for optimization.</div>
              </div>
              <div class="p-5 rounded-xl bg-white/5 border border-white/5">
                <div class="text-indigo-400 font-mono text-xs mb-2">MODULE // 02</div>
                <div class="font-display font-semibold text-lg text-white mb-1">Vector Engines</div>
                <div class="text-sm text-gray-400">Fast tensor math computations scaled globally across dynamic distributed clusters.</div>
              </div>
              <div class="p-5 rounded-xl bg-white/5 border border-white/5">
                <div class="text-violet-400 font-mono text-xs mb-2">MODULE // 03</div>
                <div class="font-display font-semibold text-lg text-white mb-1">Qubit Flow</div>
                <div class="text-sm text-gray-400">Quantum simulation framework built to deploy algorithms to next-generation hardware.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
