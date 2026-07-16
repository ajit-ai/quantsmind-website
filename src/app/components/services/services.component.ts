import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ServiceItem {
  id: string;
  icon: string;
  badge: string;
  title: string;
  desc: string;
  accentClass: string;
  borderHoverClass: string;
  iconBgClass: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="services" class="py-24 bg-[#0a0b10] border-t border-white/5 relative">
      <!-- Glow backgrounds -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div class="absolute top-[40%] right-[5%] w-[30rem] h-[30rem] rounded-full bg-[#10b981]/5 blur-[120px] animate-pulse"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-20">
          <h2 class="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-3 font-display">Engineering Capabilities</h2>
          <p class="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Advanced systems engineered for scale
          </p>
          <p class="text-gray-400 font-light leading-relaxed">
            We deliver industry-leading technology that accelerates analytical workloads, optimizes workflow automation, and scales enterprise-grade architectures.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          @for (service of services; track service.id) {
            <div 
              class="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden hover:-translate-y-1 hover:shadow-2xl"
              [class]="service.borderHoverClass"
            >
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 opacity-80"></div>
              <!-- Card Top -->
              <div>
                <!-- Icon Outer Wrapper -->
                <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110" [class]="service.iconBgClass">
                  <!-- SVG Icons render dynamically -->
                  @if (service.id === 'ai') {
                    <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM9 7h6M9 11h6"/>
                    </svg>
                  } @else if (service.id === 'quantum') {
                    <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0a7.5 7.5 0 00-15 0"/>
                    </svg>
                  } @else if (service.id === 'cloud') {
                    <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                    </svg>
                  } @else if (service.id === 'software') {
                    <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
                    </svg>
                  }
                </div>

                <span class="text-[10px] font-semibold tracking-wider uppercase mb-2 block font-mono text-gray-500">{{ service.badge }}</span>
                <h3 class="text-xl font-bold font-display text-white mb-3">{{ service.title }}</h3>
                <p class="text-sm text-gray-400 leading-relaxed mb-6 font-light">{{ service.desc }}</p>
              </div>

              <!-- Card Bottom -->
              <div>
                <ul class="space-y-2 mb-6 border-t border-white/5 pt-4">
                  @for (feat of service.features; track feat) {
                    <li class="flex items-center text-xs text-gray-400">
                      <svg class="w-3.5 h-3.5 mr-2 text-cyan-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                      {{ feat }}
                    </li>
                  }
                </ul>
                <a
                  [routerLink]="['/services', service.id]"
                  class="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-white transition-colors duration-200 group/link"
                >
                  Learn More
                  <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                </a>
              </div>

            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      id: 'space-science',
      badge: 'Space Systems',
      title: 'Space Science & Deep Space',
      desc: 'Mission planning, autonomous navigation, and swarm coordination for orbital and interplanetary systems.',
      borderHoverClass: 'hover:border-cyan-500/30',
      iconBgClass: 'bg-cyan-500/10 text-cyan-400',
      accentClass: 'text-cyan-400',
      features: ['Trajectory Optimization', 'Autonomous Control', 'Telemetry Intelligence', 'Mission-Ready Simulation'],
      icon: ''
    },
    {
      id: 'cosmic-data',
      badge: 'Remote Sensing',
      title: 'Cosmic Data & Earth Observation',
      desc: 'Quantum-enhanced signal processing and scientific pipelines for telescope, climate, and satellite intelligence.',
      borderHoverClass: 'hover:border-sky-500/30',
      iconBgClass: 'bg-sky-500/10 text-sky-400',
      accentClass: 'text-sky-400',
      features: ['Petabyte Data Pipelines', 'Anomaly Detection', 'Multi-Sensor Fusion', 'Scientific Workflows'],
      icon: ''
    },
    {
      id: 'biopharma',
      badge: 'Life Sciences',
      title: 'Bio-Pharma & Molecular Intelligence',
      desc: 'High-fidelity molecular simulation, protein folding studies, and therapeutic design acceleration.',
      borderHoverClass: 'hover:border-emerald-500/30',
      iconBgClass: 'bg-emerald-500/10 text-emerald-400',
      accentClass: 'text-emerald-400',
      features: ['Molecular Docking', 'Protein Folding Models', 'Drug Discovery Workflows', 'Bioinformatics Pipelines'],
      icon: ''
    },
    {
      id: 'finance',
      badge: 'Markets',
      title: 'Quantitative Finance & Risk',
      desc: 'Real-time risk modeling, Monte Carlo simulation, and volatility analysis tailored for modern markets.',
      borderHoverClass: 'hover:border-amber-500/30',
      iconBgClass: 'bg-amber-500/10 text-amber-400',
      accentClass: 'text-amber-400',
      features: ['Monte Carlo Engines', 'Portfolio Optimization', 'Fraud & Anomaly Detection', 'Live Market Intelligence'],
      icon: ''
    },
    {
      id: 'logistics',
      badge: 'Operations',
      title: 'Supply Chain & Logistics',
      desc: 'Large-scale route planning, fleet coordination, and global distribution optimization for unpredictability.',
      borderHoverClass: 'hover:border-indigo-500/30',
      iconBgClass: 'bg-indigo-500/10 text-indigo-400',
      accentClass: 'text-indigo-400',
      features: ['Global Route Optimization', 'Fleet Coordination', 'Constraint Planning', 'Disruption Replanning'],
      icon: ''
    },
    {
      id: 'energy',
      badge: 'Infrastructure',
      title: 'Energy & Smart Grid',
      desc: 'Predictive grid orchestration for renewable supply, dispatch planning, storage balancing, and resilience.',
      borderHoverClass: 'hover:border-lime-500/30',
      iconBgClass: 'bg-lime-500/10 text-lime-400',
      accentClass: 'text-lime-400',
      features: ['Renewable Forecasting', 'Demand Balancing', 'Storage Coordination', 'Grid Reliability Planning'],
      icon: ''
    },
    {
      id: 'cybersecurity',
      badge: 'Defense',
      title: 'Cybersecurity & Integrity',
      desc: 'Post-quantum protections and telemetry shielding for critical enterprise and orbital data channels.',
      borderHoverClass: 'hover:border-rose-500/30',
      iconBgClass: 'bg-rose-500/10 text-rose-400',
      accentClass: 'text-rose-400',
      features: ['Post-Quantum Cryptography', 'Telemetry Protection', 'Zero Trust Access', 'Key Lifecycle Governance'],
      icon: ''
    },
    {
      id: 'integration',
      badge: 'Integration',
      title: 'Industrial Integration Hub',
      desc: 'Bridge legacy systems and cloud-native ecosystems into one secure, quantum-ready platform layer.',
      borderHoverClass: 'hover:border-violet-500/30',
      iconBgClass: 'bg-violet-500/10 text-violet-400',
      accentClass: 'text-violet-400',
      features: ['API Bridge Layers', 'Legacy Modernization', 'Cloud Migration', 'Platform Enablement'],
      icon: ''
    }
  ];
}
