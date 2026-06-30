import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section id="top" class="relative min-h-screen overflow-hidden bg-[#05060b]">
      <!-- Animated background layers -->
      <div class="absolute inset-0">
        <div class="absolute -left-24 top-16 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow"></div>
        <div class="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl animate-drift"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_28%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_35%)]"></div>
        <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent_60%)]"></div>
      </div>

      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute left-10 top-12 h-1 w-28 rounded-full bg-white/10 animate-pulse-fast"></div>
        <div class="absolute right-16 top-28 h-1 w-24 rounded-full bg-cyan-400/20 animate-wave"></div>
        <div class="absolute left-20 bottom-24 h-1 w-40 rounded-full bg-violet-400/15 animate-wave" style="animation-delay: 0.7s;"></div>
        <div class="absolute -left-10 bottom-10 h-2 w-2 rounded-full bg-cyan-400/30 animate-pulse-fast"></div>
        <div class="absolute right-10 bottom-14 h-2 w-2 rounded-full bg-violet-400/30 animate-pulse-fast" style="animation-delay: 0.3s;"></div>
        <div class="absolute inset-0 grid grid-cols-8 gap-5 px-10 py-10">
          <div class="h-1 w-1 rounded-full bg-white/10 animate-particle-glow"></div>
          <div class="h-1 w-1 rounded-full bg-cyan-400/20 animate-particle-glow" style="animation-delay: 0.2s;"></div>
          <div class="h-1 w-1 rounded-full bg-violet-400/20 animate-particle-glow" style="animation-delay: 0.4s;"></div>
          <div class="h-1 w-1 rounded-full bg-white/10 animate-particle-glow" style="animation-delay: 0.6s;"></div>
          <div class="h-1 w-1 rounded-full bg-cyan-400/20 animate-particle-glow" style="animation-delay: 0.8s;"></div>
          <div class="h-1 w-1 rounded-full bg-violet-400/20 animate-particle-glow" style="animation-delay: 1s;"></div>
          <div class="h-1 w-1 rounded-full bg-white/10 animate-particle-glow" style="animation-delay: 1.2s;"></div>
          <div class="h-1 w-1 rounded-full bg-cyan-400/20 animate-particle-glow" style="animation-delay: 1.4s;"></div>
          <div class="h-1 w-1 rounded-full bg-violet-400/20 animate-particle-glow" style="animation-delay: 0.15s;"></div>
          <div class="h-1 w-1 rounded-full bg-white/10 animate-particle-glow" style="animation-delay: 0.35s;"></div>
          <div class="h-1 w-1 rounded-full bg-cyan-400/20 animate-particle-glow" style="animation-delay: 0.55s;"></div>
          <div class="h-1 w-1 rounded-full bg-violet-400/20 animate-particle-glow" style="animation-delay: 0.75s;"></div>
          <div class="h-1 w-1 rounded-full bg-white/10 animate-particle-glow" style="animation-delay: 0.95s;"></div>
          <div class="h-1 w-1 rounded-full bg-cyan-400/20 animate-particle-glow" style="animation-delay: 1.15s;"></div>
          <div class="h-1 w-1 rounded-full bg-violet-400/20 animate-particle-glow" style="animation-delay: 1.35s;"></div>
          <div class="h-1 w-1 rounded-full bg-white/10 animate-particle-glow" style="animation-delay: 1.55s;"></div>
        </div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div class="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div class="space-y-8 text-center xl:text-left">
            <div class="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300 font-semibold">
              Quantum + AI Banner
            </div>
            <div class="space-y-6">
              <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Quantum computing meets intelligent AI for next-gen systems
              </h1>
              <p class="max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
                Build adaptive, quantum-aware solutions for high-throughput inference, secure compute, and future-ready enterprise workflows.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center xl:justify-start gap-4">
              <a 
                [routerLink]="['/research']"
                class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 transition duration-300"
              >
                Explore Labs
              </a>
              <a 
                [routerLink]="['/']" 
                fragment="contact"
                class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-gray-100 hover:bg-white/10 transition duration-300"
              >
                Schedule a Call
              </a>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                <div class="text-2xl font-bold text-white">99.9%</div>
                <div class="text-xs uppercase tracking-[0.3em] text-gray-400 mt-2">Uptime</div>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                <div class="text-2xl font-bold text-white">20x</div>
                <div class="text-xs uppercase tracking-[0.3em] text-gray-400 mt-2">Throughput</div>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                <div class="text-2xl font-bold text-white">AI + Quantum</div>
                <div class="text-xs uppercase tracking-[0.3em] text-gray-400 mt-2">Hybrid systems</div>
              </div>
            </div>
          </div>

          <div class="relative mx-auto max-w-[34rem] lg:max-w-none">
            <div class="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"></div>
            <div class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090b12]/90 p-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-4">
                  <div class="rounded-3xl border border-white/10 bg-cyan-500/10 p-4 text-center">
                    <div class="text-sm uppercase tracking-[0.3em] text-cyan-300">Quantum</div>
                    <div class="mt-3 text-2xl font-semibold text-white">Qubit Mesh</div>
                  </div>
                  <div class="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div class="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">Processing</div>
                    <div class="mt-4 h-3 rounded-full bg-white/10 overflow-hidden">
                      <div class="h-full w-2/3 rounded-full bg-cyan-400 animate-progress"></div>
                    </div>
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="rounded-3xl border border-white/10 bg-indigo-500/10 p-4 text-center">
                    <div class="text-sm uppercase tracking-[0.3em] text-indigo-300">AI</div>
                    <div class="mt-3 text-2xl font-semibold text-white">Neural Atlas</div>
                  </div>
                  <div class="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div class="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">Inference</div>
                    <div class="mt-4 h-3 rounded-full bg-white/10 overflow-hidden">
                      <div class="h-full w-4/5 rounded-full bg-violet-400 animate-progress animate-delay-1000"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative mt-6 h-[360px] rounded-[2rem] border border-white/10 bg-[#07080c]/90 overflow-hidden">
                <svg class="absolute inset-0 h-full w-full" viewBox="0 0 560 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="glowLine" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.9"/>
                      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.7"/>
                    </linearGradient>
                  </defs>
                  <path d="M80 280 C150 140 240 60 320 180 C360 220 420 160 500 120" stroke="url(#glowLine)" stroke-width="4" stroke-linecap="round" fill="none"/>
                  <circle class="hero-node animate-pulse-slow" cx="80" cy="280" r="10" fill="#22d3ee"/>
                  <circle class="hero-node animate-drift" cx="200" cy="210" r="8" fill="#a855f7"/>
                  <circle class="hero-node animate-sway" cx="280" cy="120" r="12" fill="#f472b6"/>
                  <circle class="hero-node animate-pulse-slow" cx="380" cy="190" r="9" fill="#818cf8"/>
                  <circle class="hero-node animate-drift" cx="480" cy="150" r="11" fill="#22d3ee"/>
                  <g opacity="0.7">
                    <circle cx="160" cy="240" r="26" stroke="#38bdf8" stroke-width="1" fill="none"/>
                    <circle cx="260" cy="160" r="30" stroke="#a855f7" stroke-width="1" fill="none"/>
                    <circle cx="390" cy="170" r="28" stroke="#c084fc" stroke-width="1" fill="none"/>
                  </g>
                  <g class="hero-orbit animate-spin-slow" transform="translate(320 180)">
                    <circle cx="0" cy="0" r="50" stroke="#38bdf8" stroke-width="1" fill="none" opacity="0.25"/>
                    <circle cx="48" cy="0" r="4" fill="#38bdf8"/>
                  </g>
                  <g class="hero-orbit animate-spin-slow-reverse" transform="translate(430 120)">
                    <circle cx="0" cy="0" r="38" stroke="#a855f7" stroke-width="1" fill="none" opacity="0.2"/>
                    <circle cx="38" cy="0" r="3.5" fill="#a855f7"/>
                  </g>
                  <path class="opacity-40 animate-wave" d="M40 160 C120 110 220 90 300 130 C360 150 410 100 520 90" stroke="#7c3aed" stroke-width="1" stroke-linecap="round" fill="none"/>
                </svg>
              </div>
              <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div class="rounded-3xl border border-cyan-500/10 bg-cyan-500/10 p-4 animate-float-fast">
                  <div class="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-cyan-200">Quantum processing</div>
                  <div class="mt-4 text-sm text-white">High-fidelity qubit orchestration with interference-driven routing.</div>
                </div>
                <div class="rounded-3xl border border-violet-500/10 bg-violet-500/10 p-4 animate-float-fast">
                  <div class="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-violet-200">AI inference</div>
                  <div class="mt-4 text-sm text-white">Adaptive neuron ensembles scaling with multi-modal streams.</div>
                </div>
              </div>
              <div class="relative mt-4 h-20 overflow-hidden rounded-[1.5rem] bg-white/5 border border-white/10">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.12),transparent_35%)]"></div>
                <div class="absolute inset-x-6 bottom-6 h-1 rounded-full bg-cyan-400/30 animate-wave"></div>
                <div class="absolute inset-x-10 bottom-10 h-1 rounded-full bg-violet-400/20 animate-wave" style="animation-delay: 0.5s;"></div>
                <div class="absolute left-8 bottom-5 h-2 w-2 rounded-full bg-cyan-400 animate-pulse-fast"></div>
                <div class="absolute left-28 bottom-8 h-2 w-2 rounded-full bg-violet-400 animate-pulse-fast" style="animation-delay: 0.3s;"></div>
                <div class="absolute right-14 bottom-7 h-2 w-2 rounded-full bg-indigo-300 animate-sway"></div>
              </div>
              <div class="relative mt-4 h-28 overflow-hidden rounded-[2rem] bg-[#0a0b13]/70 border border-white/10">
                <div class="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.04))]"></div>
                <div class="absolute left-8 top-6 h-px w-[18rem] bg-cyan-400/20 animate-wave"></div>
                <div class="absolute right-12 top-12 h-px w-[14rem] bg-violet-400/20 animate-wave" style="animation-delay: 0.35s;"></div>
                <div class="absolute left-16 bottom-8 h-1 w-20 rounded-full bg-cyan-400/30 animate-interference"></div>
                <div class="absolute right-20 bottom-6 h-1 w-32 rounded-full bg-violet-400/30 animate-interference" style="animation-delay: 0.45s;"></div>
                <div class="absolute left-10 bottom-5 h-2 w-2 rounded-full bg-cyan-400 animate-pulse-fast"></div>
                <div class="absolute left-1/2 bottom-8 h-2 w-2 rounded-full bg-violet-400 animate-pulse-fast" style="animation-delay:0.2s;"></div>
                <div class="absolute right-16 bottom-7 h-2 w-2 rounded-full bg-white/40 animate-sway"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 -bottom-10 h-36 overflow-hidden pointer-events-none">
        <div class="absolute left-8 top-8 h-px w-64 bg-cyan-400/20 animate-interference"></div>
        <div class="absolute right-12 top-16 h-px w-56 bg-violet-400/20 animate-wave" style="animation-delay:0.2s"></div>
        <div class="absolute left-28 bottom-4 h-2 w-2 rounded-full bg-cyan-400/70 animate-pulse-fast"></div>
        <div class="absolute right-24 bottom-2 h-2 w-2 rounded-full bg-violet-400/70 animate-pulse-fast" style="animation-delay:0.4s"></div>
      </div>
    </section>
  `
})
export class HeroComponent {}
