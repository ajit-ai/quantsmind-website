import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  styles: [`
    @keyframes orbit1 {
      from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
      to   { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
    }
    @keyframes orbit2 {
      from { transform: rotate(120deg) translateX(180px) rotate(-120deg); }
      to   { transform: rotate(480deg) translateX(180px) rotate(-480deg); }
    }
    @keyframes orbit3 {
      from { transform: rotate(240deg) translateX(240px) rotate(-240deg); }
      to   { transform: rotate(-120deg) translateX(240px) rotate(120deg); }
    }
    @keyframes spinRing1 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes spinRing2 { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
    @keyframes spinRing3 { from { transform: rotate(30deg); } to { transform: rotate(390deg); } }
    @keyframes dashFlow {
      from { stroke-dashoffset: 200; }
      to   { stroke-dashoffset: 0; }
    }
    @keyframes teleport {
      0%   { stroke-dashoffset: 600; opacity: 0.2; }
      50%  { opacity: 1; }
      100% { stroke-dashoffset: 0; opacity: 0.2; }
    }
    @keyframes corePulse {
      0%, 100% { r: 18; opacity: 0.9; }
      50%       { r: 26; opacity: 0.5; }
    }
    @keyframes nodeGlow {
      0%, 100% { opacity: 0.6; r: 5; }
      50%       { opacity: 1;   r: 8; }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes latticeGlow {
      0%, 100% { opacity: 0.15; }
      50%       { opacity: 0.45; }
    }
    .qubit-orbit-1 { animation: orbit1 6s linear infinite; }
    .qubit-orbit-2 { animation: orbit2 9s linear infinite; }
    .qubit-orbit-3 { animation: orbit3 13s linear infinite reverse; }
    .ring-spin-1   { animation: spinRing1 12s linear infinite; transform-origin: 50% 50%; }
    .ring-spin-2   { animation: spinRing2 18s linear infinite; transform-origin: 50% 50%; }
    .ring-spin-3   { animation: spinRing3 8s linear infinite; transform-origin: 50% 50%; }
    .dash-flow     { animation: dashFlow 3s linear infinite; }
    .teleport-arc  { animation: teleport 4s ease-in-out infinite; }
    .core-pulse    { animation: corePulse 2.5s ease-in-out infinite; }
    .node-glow     { animation: nodeGlow 2s ease-in-out infinite; }
    .lattice-glow  { animation: latticeGlow 3s ease-in-out infinite; }
    .hero-text     { animation: fadeUp 1s ease-out both; }
    .hero-text-delay { animation: fadeUp 1s ease-out 0.3s both; }
    .hero-btn-delay  { animation: fadeUp 1s ease-out 0.6s both; }
  `],
  template: `
    <section id="top" class="relative min-h-screen overflow-hidden bg-[#05060b] flex flex-col">

      <!-- Ambient glow blobs -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-cyan-500/10 blur-[120px]"></div>
        <div class="absolute right-0 bottom-0 h-[40rem] w-[40rem] rounded-full bg-violet-600/10 blur-[140px]"></div>
        <div class="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-[100px]"></div>
      </div>

      <!-- Full-screen quantum SVG -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 900 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full h-full max-w-5xl opacity-90"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stop-color="#22d3ee" stop-opacity="1"/>
              <stop offset="60%"  stop-color="#6366f1" stop-opacity="0.6"/>
              <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="qubitGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stop-color="#22d3ee" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="qubitGrad2" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stop-color="#a855f7" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="arcGrad1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stop-color="#22d3ee" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#a855f7" stop-opacity="0.9"/>
            </linearGradient>
            <linearGradient id="arcGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stop-color="#6366f1" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#22d3ee" stop-opacity="0.8"/>
            </linearGradient>
            <linearGradient id="latticeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stop-color="#38bdf8" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="#818cf8" stop-opacity="0.2"/>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="8" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <!-- Qubit Lattice background grid -->
          <g class="lattice-glow" filter="url(#glow)">
            <line x1="80"  y1="200" x2="820" y2="200" stroke="url(#latticeGrad)" stroke-width="0.8" stroke-dasharray="6 10"/>
            <line x1="80"  y1="280" x2="820" y2="280" stroke="url(#latticeGrad)" stroke-width="0.8" stroke-dasharray="6 10"/>
            <line x1="80"  y1="360" x2="820" y2="360" stroke="url(#latticeGrad)" stroke-width="0.8" stroke-dasharray="6 10"/>
            <line x1="80"  y1="440" x2="820" y2="440" stroke="url(#latticeGrad)" stroke-width="0.8" stroke-dasharray="6 10"/>
            <line x1="80"  y1="520" x2="820" y2="520" stroke="url(#latticeGrad)" stroke-width="0.8" stroke-dasharray="6 10"/>
            <line x1="160" y1="160" x2="160" y2="560" stroke="url(#latticeGrad)" stroke-width="0.8" stroke-dasharray="6 10"/>
            <line x1="280" y1="160" x2="280" y2="560" stroke="url(#latticeGrad)" stroke-width="0.8" stroke-dasharray="6 10"/>
            <line x1="400" y1="160" x2="400" y2="560" stroke="url(#latticeGrad)" stroke-width="0.8" stroke-dasharray="6 10"/>
            <line x1="520" y1="160" x2="520" y2="560" stroke="url(#latticeGrad)" stroke-width="0.8" stroke-dasharray="6 10"/>
            <line x1="640" y1="160" x2="640" y2="560" stroke="url(#latticeGrad)" stroke-width="0.8" stroke-dasharray="6 10"/>
            <line x1="760" y1="160" x2="760" y2="560" stroke="url(#latticeGrad)" stroke-width="0.8" stroke-dasharray="6 10"/>
            <circle cx="160" cy="200" r="3" fill="#38bdf8" class="node-glow"/>
            <circle cx="280" cy="200" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:0.3s"/>
            <circle cx="400" cy="200" r="3" fill="#818cf8" class="node-glow" style="animation-delay:0.6s"/>
            <circle cx="520" cy="200" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:0.9s"/>
            <circle cx="640" cy="200" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:1.2s"/>
            <circle cx="760" cy="200" r="3" fill="#818cf8" class="node-glow" style="animation-delay:1.5s"/>
            <circle cx="160" cy="280" r="3" fill="#a855f7" class="node-glow" style="animation-delay:0.2s"/>
            <circle cx="280" cy="280" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:0.5s"/>
            <circle cx="520" cy="280" r="3" fill="#a855f7" class="node-glow" style="animation-delay:1.1s"/>
            <circle cx="640" cy="280" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:1.4s"/>
            <circle cx="760" cy="280" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:1.7s"/>
            <circle cx="160" cy="440" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:0.4s"/>
            <circle cx="280" cy="440" r="3" fill="#818cf8" class="node-glow" style="animation-delay:0.7s"/>
            <circle cx="520" cy="440" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:1.3s"/>
            <circle cx="640" cy="440" r="3" fill="#a855f7" class="node-glow" style="animation-delay:1.6s"/>
            <circle cx="760" cy="440" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:1.9s"/>
            <circle cx="160" cy="520" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:0.1s"/>
            <circle cx="280" cy="520" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:0.4s"/>
            <circle cx="400" cy="520" r="3" fill="#818cf8" class="node-glow" style="animation-delay:0.7s"/>
            <circle cx="520" cy="520" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:1.0s"/>
            <circle cx="640" cy="520" r="3" fill="#38bdf8" class="node-glow" style="animation-delay:1.3s"/>
            <circle cx="760" cy="520" r="3" fill="#a855f7" class="node-glow" style="animation-delay:1.6s"/>
          </g>

          <!-- Interference wave patterns -->
          <g opacity="0.5">
            <path d="M0 360 C120 310, 240 410, 360 360 C480 310, 600 410, 720 360 C840 310, 900 380, 900 360"
                  stroke="#38bdf8" stroke-width="1.5" fill="none" stroke-dasharray="8 6" class="dash-flow"/>
            <path d="M0 380 C120 430, 240 330, 360 380 C480 430, 600 330, 720 380 C840 430, 900 360, 900 380"
                  stroke="#a855f7" stroke-width="1.5" fill="none" stroke-dasharray="8 6" class="dash-flow" style="animation-delay:1.5s"/>
            <path d="M0 340 C150 290, 300 390, 450 340 C600 290, 750 390, 900 340"
                  stroke="#6366f1" stroke-width="1" fill="none" stroke-dasharray="5 8" class="dash-flow" style="animation-delay:0.8s"/>
          </g>

          <!-- Entanglement central core -->
          <g transform="translate(450, 350)" filter="url(#softGlow)">
            <ellipse cx="0" cy="0" rx="240" ry="80" stroke="#38bdf8" stroke-width="1.2" fill="none" opacity="0.3" class="ring-spin-1"/>
            <ellipse cx="0" cy="0" rx="180" ry="60" stroke="#a855f7" stroke-width="1.2" fill="none" opacity="0.35" class="ring-spin-2"/>
            <ellipse cx="0" cy="0" rx="120" ry="40" stroke="#6366f1" stroke-width="1.5" fill="none" opacity="0.4" class="ring-spin-3"/>
            <circle cx="0" cy="0" r="40" fill="url(#coreGrad)" opacity="0.7" class="core-pulse"/>
            <circle cx="0" cy="0" r="18" fill="#22d3ee" opacity="0.9" class="core-pulse"/>
            <circle cx="0" cy="0" r="8"  fill="white" opacity="1"/>
          </g>

          <!-- Orbiting qubits -->
          <g transform="translate(450, 350)">
            <circle cx="0" cy="0" r="120" stroke="#38bdf8" stroke-width="0.6" fill="none" opacity="0.2"/>
            <circle cx="0" cy="0" r="180" stroke="#a855f7" stroke-width="0.6" fill="none" opacity="0.2"/>
            <circle cx="0" cy="0" r="240" stroke="#6366f1" stroke-width="0.6" fill="none" opacity="0.15"/>
            <g class="qubit-orbit-1" filter="url(#glow)">
              <circle cx="0" cy="0" r="16" fill="url(#qubitGrad)" opacity="0.6"/>
              <circle cx="0" cy="0" r="7"  fill="#22d3ee"/>
            </g>
            <g class="qubit-orbit-2" filter="url(#glow)">
              <circle cx="0" cy="0" r="20" fill="url(#qubitGrad2)" opacity="0.6"/>
              <circle cx="0" cy="0" r="8"  fill="#a855f7"/>
            </g>
            <g class="qubit-orbit-3" filter="url(#glow)">
              <circle cx="0" cy="0" r="14" fill="url(#qubitGrad)" opacity="0.5"/>
              <circle cx="0" cy="0" r="6"  fill="#818cf8"/>
            </g>
          </g>

          <!-- Teleportation arcs -->
          <g filter="url(#glow)">
            <path d="M160 280 Q 280 180, 450 350" stroke="url(#arcGrad1)" stroke-width="2" fill="none" stroke-dasharray="12 8" class="teleport-arc"/>
            <circle cx="160" cy="280" r="10" fill="#22d3ee" class="node-glow"/>
            <circle cx="160" cy="280" r="20" fill="#22d3ee" opacity="0.15" class="node-glow"/>
            <path d="M740 280 Q 620 180, 450 350" stroke="url(#arcGrad2)" stroke-width="2" fill="none" stroke-dasharray="12 8" class="teleport-arc" style="animation-delay:2s"/>
            <circle cx="740" cy="280" r="10" fill="#a855f7" class="node-glow" style="animation-delay:0.5s"/>
            <circle cx="740" cy="280" r="20" fill="#a855f7" opacity="0.15" class="node-glow" style="animation-delay:0.5s"/>
            <path d="M200 520 Q 300 460, 450 350" stroke="#6366f1" stroke-width="1.5" fill="none" stroke-dasharray="10 8" class="teleport-arc" style="animation-delay:1s"/>
            <circle cx="200" cy="520" r="8" fill="#6366f1" class="node-glow" style="animation-delay:1s"/>
            <path d="M700 520 Q 600 460, 450 350" stroke="#38bdf8" stroke-width="1.5" fill="none" stroke-dasharray="10 8" class="teleport-arc" style="animation-delay:3s"/>
            <circle cx="700" cy="520" r="8" fill="#38bdf8" class="node-glow" style="animation-delay:1.5s"/>
            <path d="M220 160 Q 320 240, 450 350" stroke="#c084fc" stroke-width="1.5" fill="none" stroke-dasharray="10 8" class="teleport-arc" style="animation-delay:1.5s"/>
            <circle cx="220" cy="160" r="8" fill="#c084fc" class="node-glow" style="animation-delay:0.8s"/>
            <path d="M680 160 Q 580 240, 450 350" stroke="#818cf8" stroke-width="1.5" fill="none" stroke-dasharray="10 8" class="teleport-arc" style="animation-delay:2.5s"/>
            <circle cx="680" cy="160" r="8" fill="#818cf8" class="node-glow" style="animation-delay:1.2s"/>
          </g>

          <!-- Bloch sphere top-right -->
          <g transform="translate(780, 130)" opacity="0.55" filter="url(#glow)">
            <circle cx="0" cy="0" r="70" stroke="#38bdf8" stroke-width="1.2" fill="none"/>
            <ellipse cx="0" cy="0" rx="70" ry="22" stroke="#38bdf8" stroke-width="1" fill="none" opacity="0.5" class="ring-spin-2"/>
            <ellipse cx="0" cy="0" rx="22" ry="70" stroke="#a855f7" stroke-width="1" fill="none" opacity="0.5" class="ring-spin-1"/>
            <line x1="0" y1="0" x2="40" y2="-55" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/>
            <circle cx="40" cy="-55" r="5" fill="#22d3ee"/>
            <circle cx="0" cy="-70" r="4" fill="#38bdf8" opacity="0.8"/>
            <circle cx="0" cy="70"  r="4" fill="#a855f7" opacity="0.8"/>
            <text x="6" y="-74" fill="#38bdf8" font-size="11" font-family="monospace" opacity="0.8">|0&#x27E9;</text>
            <text x="6" y="84"  fill="#a855f7" font-size="11" font-family="monospace" opacity="0.8">|1&#x27E9;</text>
          </g>

          <!-- Bloch sphere bottom-left -->
          <g transform="translate(120, 560)" opacity="0.45" filter="url(#glow)">
            <circle cx="0" cy="0" r="50" stroke="#6366f1" stroke-width="1" fill="none"/>
            <ellipse cx="0" cy="0" rx="50" ry="16" stroke="#6366f1" stroke-width="0.8" fill="none" opacity="0.5" class="ring-spin-3"/>
            <ellipse cx="0" cy="0" rx="16" ry="50" stroke="#c084fc" stroke-width="0.8" fill="none" opacity="0.5" class="ring-spin-2"/>
            <line x1="0" y1="0" x2="-28" y2="-38" stroke="#c084fc" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="-28" cy="-38" r="4" fill="#c084fc"/>
            <circle cx="0" cy="-50" r="3" fill="#6366f1" opacity="0.8"/>
            <circle cx="0" cy="50"  r="3" fill="#c084fc" opacity="0.8"/>
          </g>

          <!-- Superposition label badges -->
          <g font-family="monospace" font-size="12" opacity="0.7">
            <rect x="60"  y="330" width="90" height="24" rx="6" fill="#38bdf8" fill-opacity="0.08" stroke="#38bdf8" stroke-width="0.8"/>
            <text x="72"  y="347" fill="#38bdf8">|&#x03C8;&#x27E9; = &#x03B1;|0&#x27E9;</text>
            <rect x="750" y="330" width="90" height="24" rx="6" fill="#a855f7" fill-opacity="0.08" stroke="#a855f7" stroke-width="0.8"/>
            <text x="762" y="347" fill="#a855f7">+ &#x03B2;|1&#x27E9;</text>

          </g>
        </svg>
      </div>

      <!-- Hero text overlay -->
      <div class="relative z-10 flex flex-col items-center justify-end flex-1 pb-20 px-4 sm:px-8 text-center">
        <div class="max-w-4xl mx-auto space-y-8">

          <div class="hero-text inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-500/8 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300 font-semibold backdrop-blur-sm">
            Quantum + AI Research Platform
          </div>

          <div class="hero-text-delay space-y-5">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-2xl">
              Quantum computing meets<br class="hidden sm:block"/>
              <span class="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                intelligent AI
              </span>
            </h1>
            <p class="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
              Build adaptive, quantum-aware solutions for high-throughput inference,
              secure compute, and future-ready enterprise workflows.
            </p>
          </div>

          <div class="hero-btn-delay flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              [routerLink]="['/research']"
              class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 px-9 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 transition duration-300"
            >
              Explore Labs
            </a>
            <a
              [routerLink]="['/']"
              fragment="contact"
              class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-9 py-4 text-sm font-semibold text-gray-100 hover:bg-white/10 transition duration-300"
            >
              Schedule a Call
            </a>
          </div>

          <div class="hero-btn-delay flex flex-wrap items-center justify-center gap-6 pt-2">
            <div class="text-center">
              <div class="text-2xl font-bold text-white">99.9%</div>
              <div class="text-xs uppercase tracking-[0.3em] text-gray-400 mt-1">Uptime</div>
            </div>
            <div class="h-8 w-px bg-white/10"></div>
            <div class="text-center">
              <div class="text-2xl font-bold text-white">20x</div>
              <div class="text-xs uppercase tracking-[0.3em] text-gray-400 mt-1">Throughput</div>
            </div>
            <div class="h-8 w-px bg-white/10"></div>
            <div class="text-center">
              <div class="text-2xl font-bold text-white">AI + Quantum</div>
              <div class="text-xs uppercase tracking-[0.3em] text-gray-400 mt-1">Hybrid systems</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom fade -->
      <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05060b] to-transparent pointer-events-none"></div>
    </section>
  `
})
export class HeroComponent {}
