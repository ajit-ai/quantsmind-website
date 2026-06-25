import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface ResearchArticle {
  id: string;
  title: string;
  category: 'Quantum' | 'Machine Learning' | 'Systems';
  tagline: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  bgGradClass: string;
}

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <section class="min-h-screen pt-32 pb-24 bg-[#0a0b10] relative">
      <!-- Glow backgrounds -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div class="absolute top-[20%] left-[20%] w-[35rem] h-[35rem] rounded-full bg-violet-500/5 blur-[120px] animate-pulse"></div>
        <div class="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-cyan-500/5 blur-[100px] animate-pulse" style="animation-delay: 3s;"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="max-w-3xl mb-16">
          <h1 class="text-xs font-semibold text-violet-400 tracking-widest uppercase mb-3 font-display">Research & Insights</h1>
          <p class="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Scientific Reports & Technology Whitepapers
          </p>
          <p class="text-gray-400 font-light leading-relaxed">
            Our research and development team consistently publishes insights into quantum simulators, vector database optimization, and high-performance classical architectures.
          </p>
        </div>

        <!-- Controls (Search and Filters) -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-12">
          <!-- Search Bar (7 cols) -->
          <div class="md:col-span-6 relative">
            <input 
              type="text" 
              [(ngModel)]="searchQuery"
              placeholder="Search research repository..."
              class="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
            >
            <svg class="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
            </svg>
          </div>

          <!-- Category Filters (6 cols) -->
          <div class="md:col-span-6 flex flex-wrap gap-2 md:justify-end">
            @for (cat of categories; track cat) {
              <button 
                (click)="activeCategory.set(cat)"
                class="px-4 py-2 rounded-lg text-xs font-semibold border transition-all duration-300 cursor-pointer"
                [class]="activeCategory() === cat 
                  ? 'bg-violet-500 border-violet-500 text-white shadow-lg shadow-violet-500/20' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'"
              >
                {{ cat }}
              </button>
            }
          </div>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (art of filteredArticles(); track art.id) {
            <div class="glass-panel rounded-2xl border border-white/10 hover:border-violet-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <!-- Visual Card Header -->
              <div class="h-44 relative overflow-hidden bg-gradient-to-br" [class]="art.bgGradClass">
                <div class="absolute inset-0 bg-black/45 backdrop-blur-[1px]"></div>
                <!-- Hex Grid Layer -->
                <div class="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:12px_12px]"></div>
                <div class="absolute bottom-6 left-6 z-10">
                  <span class="text-[9px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-violet-950/80 border border-violet-800/30 mb-2 inline-block text-violet-300">{{ art.category }}</span>
                  <h3 class="text-lg font-bold font-display text-white line-clamp-2">{{ art.title }}</h3>
                </div>
              </div>

              <!-- Content Body -->
              <div class="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div class="flex items-center text-[10px] text-gray-500 space-x-3 mb-3 font-mono">
                    <span>By {{ art.author }}</span>
                    <span>&bull;</span>
                    <span>{{ art.date }}</span>
                  </div>
                  <p class="text-xs text-gray-400 font-light leading-relaxed mb-6 line-clamp-3">{{ art.summary }}</p>
                </div>

                <div class="flex items-center justify-between border-t border-white/5 pt-4">
                  <span class="text-[10px] font-mono text-gray-500 flex items-center">
                    <svg class="w-3.5 h-3.5 mr-1 text-violet-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {{ art.readTime }} read
                  </span>
                  <a 
                    [routerLink]="['/research', art.id]"
                    class="text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors flex items-center group/link cursor-pointer"
                  >
                    Read Article
                    <svg class="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                  </a>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Empty state -->
        @if (filteredArticles().length === 0) {
          <div class="text-center py-20 glass-panel rounded-2xl border border-white/5 max-w-xl mx-auto">
            <svg class="w-12 h-12 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.008 1.24l.885 1.77a2.25 2.25 0 002.007 1.24h1.98a2.25 2.25 0 002.007-1.24l.885-1.77a2.25 2.25 0 012.007-1.24h3.86m-18 0h18"/>
            </svg>
            <h3 class="text-lg font-semibold text-white mb-1">No articles match criteria</h3>
            <p class="text-sm text-gray-500 font-light">Try adjusting your category filter or search keywords.</p>
          </div>
        }
      </div>
    </section>
  `
})
export class ResearchComponent {
  searchQuery = '';
  categories = ['All', 'Quantum', 'Machine Learning', 'Systems'];
  activeCategory = signal<string>('All');

  articles: ResearchArticle[] = [
    {
      id: 'quantum-compiler-optimization',
      title: 'Optimizing Classical Compile Pipelines for Low-Qubit Hardware Targets',
      category: 'Quantum',
      tagline: 'Staging compiler runtimes for NISQ-era quantum computing units.',
      author: 'Dr. Arthur Vance',
      date: 'June 18, 2026',
      readTime: '12 min',
      summary: 'This paper outlines mathematical compilation techniques that reduce gate depth requirements on NISQ hardware. By simulating density matrices on optimized C++ grids, we achieve substantial noise reductions.',
      bgGradClass: 'from-violet-950 via-indigo-900 to-cyan-900'
    },
    {
      id: 'hnsw-vector-indexing-latency',
      title: 'Accelerating Nearest-Neighbor Search Curves on SIMD-Bound Clusters',
      category: 'Machine Learning',
      tagline: 'High-throughput semantic database vector queries at scale.',
      author: 'Dr. Sarah Lin',
      date: 'May 24, 2026',
      readTime: '8 min',
      summary: 'An exploration into structuring high-dimensional vector databases to run index traversals entirely in vector registers (AVX-512). Demonstrates latency reductions down to sub-millisecond ranges.',
      bgGradClass: 'from-cyan-950 via-emerald-950 to-indigo-950'
    },
    {
      id: 'distributed-raft-concurrency',
      title: 'Solving Raft Log Ingestion Locking in High-Write Microservices',
      category: 'Systems',
      tagline: 'Techniques for asynchronous write caching in distributed states.',
      author: 'Elena Rostova',
      date: 'April 09, 2026',
      readTime: '15 min',
      summary: 'This whitepaper presents our asynchronous write-cache pipeline built on top of Raft consensus nodes. By batching logs and prioritizing non-blocking I/O in Rust, lock contention is mitigated under heavy load.',
      bgGradClass: 'from-indigo-950 via-violet-950 to-emerald-950'
    },
    {
      id: 'quantum-portfolio-optimization',
      title: 'Quantum-Annealing Simulated Heuristics for Financial Allocations',
      category: 'Quantum',
      tagline: 'Using QUBO equations to optimize stock portfolio constraints.',
      author: 'Marcus Vane',
      date: 'March 14, 2026',
      readTime: '10 min',
      summary: 'We model the classic Markowitz mean-variance portfolio allocation as a Quadratic Unconstrained Binary Optimization (QUBO) problem, solved using Simulated Quantum Annealing algorithms.',
      bgGradClass: 'from-violet-950 via-cyan-950 to-indigo-950'
    },
    {
      id: 'rag-context-filtering-llm',
      title: 'Neural Document Chunk Selection via Sparse Semantic Vector Scores',
      category: 'Machine Learning',
      tagline: 'Streamlining context feeds for generative large language models.',
      author: 'Dr. Sarah Lin',
      date: 'February 10, 2026',
      readTime: '7 min',
      summary: 'A study on context retrieval pipelines. We showcase how scoring document chunks with sparse semantic vectors (BM25 + Cohere Rerank) filters noise and decreases context-window sizes by 35%.',
      bgGradClass: 'from-cyan-950 via-violet-950 to-emerald-950'
    }
  ];

  filteredArticles = computed(() => {
    let list = this.articles;

    // Search Query filter
    const query = this.searchQuery.trim().toLowerCase();
    if (query) {
      list = list.filter(art => 
        art.title.toLowerCase().includes(query) || 
        art.summary.toLowerCase().includes(query) ||
        art.author.toLowerCase().includes(query)
      );
    }

    // Category filter
    const category = this.activeCategory();
    if (category !== 'All') {
      list = list.filter(art => art.category === category);
    }

    return list;
  });
}
