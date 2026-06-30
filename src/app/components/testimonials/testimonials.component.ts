import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  sector: 'Fintech' | 'Cloud' | 'Healthcare' | 'AI';
  avatarInitials: string;
  avatarBgColor: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="py-24 bg-[#0a0b10] border-t border-white/5 relative">
      <!-- Glow backgrounds -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div class="absolute top-[30%] left-[50%] w-[35rem] h-[35rem] rounded-full bg-cyan-500/5 blur-[120px] -translate-x-1/2"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-3 font-display">Leadership Trust</h2>
          <p class="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Trusted by engineering teams driving progress
          </p>
          <p class="text-gray-400 font-light leading-relaxed">
            See how technical leaders rely on our platforms and systems to remove bottlenecks, improve throughput, and move faster with confidence.
          </p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          @for (filter of filters; track filter) {
            <button 
              (click)="activeFilter.set(filter)"
              class="px-5 py-2 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer"
              [class]="activeFilter() === filter 
                ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/25' 
                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'"
            >
              {{ filter }}
            </button>
          }
        </div>

        <!-- Grid Container -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (item of filteredTestimonials(); track item.author) {
            <div class="glass-panel rounded-2xl p-8 flex flex-col justify-between border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden">
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 opacity-80"></div>
              <!-- Rating / Quote icon -->
              <div class="flex items-center justify-between mb-6">
                <!-- Stars -->
                <div class="flex space-x-1">
                  @for (star of [1,2,3,4,5]; track star) {
                    <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  }
                </div>
                <!-- Quote mark SVG -->
                <svg class="w-8 h-8 text-gray-700 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.988zm-12 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <!-- Quote Text -->
              <p class="text-sm text-gray-300 leading-relaxed font-light mb-8 italic">
                "{{ item.quote }}"
              </p>

              <!-- Author Info -->
              <div class="flex items-center border-t border-white/5 pt-6">
                <!-- Avatar Circle -->
                <div 
                  class="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white mr-4 shadow-inner"
                  [class]="item.avatarBgColor"
                >
                  {{ item.avatarInitials }}
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-white">{{ item.author }}</h4>
                  <p class="text-xs text-gray-500 font-light mt-0.5">{{ item.role }}, <span class="text-cyan-400 font-medium">{{ item.company }}</span></p>
                  <span class="inline-flex mt-2 items-center rounded-full bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-gray-400">{{ item.sector }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  filters = ['All', 'Fintech', 'Cloud', 'Healthcare', 'AI'];
  activeFilter = signal<string>('All');

  testimonials: TestimonialItem[] = [
    {
      quote: "QuantsMind's simulator libraries changed the timeline of our portfolio optimization solver build. We compiled massive circuit models on standard classical clusters with zero friction.",
      author: "Marcus Vane",
      role: "Head of Quantitative Strategy",
      company: "Aether Capital Management",
      sector: 'Fintech',
      avatarInitials: 'MV',
      avatarBgColor: 'bg-cyan-500'
    },
    {
      quote: "The vector caching system built by QuantsMind handles 30,000 queries per second with a sub-millisecond response curve. It has drastically cut down our generative model staging costs.",
      author: "Dr. Sarah Lin",
      role: "VP of AI Foundations",
      company: "NeuralDynamics Inc.",
      sector: 'AI',
      avatarInitials: 'SL',
      avatarBgColor: 'bg-indigo-500'
    },
    {
      quote: "Scaling our multi-tenant Kubernetes nodes to process raw telemetry logs was a bottleneck until we integrated QuantsMind's cloud-native scaling layers. The stability has been flawless.",
      author: "Elena Rostova",
      role: "Director of Infrastructure",
      company: "CloudSentry Labs",
      sector: 'Cloud',
      avatarInitials: 'ER',
      avatarBgColor: 'bg-emerald-500'
    },
    {
      quote: "We leveraged QuantsMind for custom genomic folding computational pipelines. Their optimization strategies resulted in a 40x solver speedup over traditional solvers.",
      author: "Dr. Arthur Vance",
      role: "Chief Bioinformatics Officer",
      company: "Genomix Health Systems",
      sector: 'Healthcare',
      avatarInitials: 'AV',
      avatarBgColor: 'bg-violet-500'
    },
    {
      quote: "Their mathematical modeling and Rust-based engineering transformed our legacy ledger ingestion pipelines. The throughput and concurrency efficiency are outstanding.",
      author: "Jonathan Pierce",
      role: "Lead Systems Architect",
      company: "LedgerFlux Finance",
      sector: 'Fintech',
      avatarInitials: 'JP',
      avatarBgColor: 'bg-cyan-600'
    },
    {
      quote: "QuantsMind provided excellent consulting and implementation of our hybrid cloud staging and vector store configuration. Highly technical and extremely reliable team.",
      author: "Clara Reynolds",
      role: "CTO",
      company: "Axiom SaaS Solutions",
      sector: 'Cloud',
      avatarInitials: 'CR',
      avatarBgColor: 'bg-emerald-600'
    }
  ];

  filteredTestimonials = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') {
      return this.testimonials;
    }
    return this.testimonials.filter(item => item.sector === filter);
  });
}
