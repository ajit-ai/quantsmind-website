import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface ArticleDetail {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  tagline?: string;
  bgGradClass: string;
  abstract: string;
  sections: { heading: string; body: string; code?: string; math?: string }[];
  references: string[];
}

@Component({
  selector: 'app-research-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="min-h-screen pt-32 pb-24 bg-[#0a0b10] relative">
      <!-- Glow backgrounds -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div class="absolute top-[10%] left-[30%] w-[35rem] h-[35rem] rounded-full bg-violet-500/5 blur-[120px]"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <!-- Back button -->
        <a 
          [routerLink]="['/research']"
          class="inline-flex items-center text-xs font-semibold text-gray-400 hover:text-cyan-400 mb-10 transition-colors cursor-pointer"
        >
          <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Back to Research Repository
        </a>

        @if (article()) {
          <article class="space-y-12">
            <!-- Article Header -->
            <div class="border-b border-white/10 pb-8">
              <span class="text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded bg-violet-950/80 border border-violet-800/30 mb-4 inline-block text-violet-300">
                {{ article()?.category }}
              </span>
              <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white mb-6 leading-tight">
                {{ article()?.title }}
              </h1>
              
              <div class="flex flex-wrap items-center text-sm text-gray-500 gap-6">
                <div>
                  <span class="text-xs text-gray-600 block uppercase font-mono">Lead Author</span>
                  <span class="text-white font-medium">{{ article()?.author }}</span>
                </div>
                <div class="h-8 w-px bg-white/10 hidden sm:block"></div>
                <div>
                  <span class="text-xs text-gray-600 block uppercase font-mono">Published</span>
                  <span class="text-gray-300">{{ article()?.date }}</span>
                </div>
                <div class="h-8 w-px bg-white/10 hidden sm:block"></div>
                <div>
                  <span class="text-xs text-gray-600 block uppercase font-mono">Reading Time</span>
                  <span class="text-gray-300">{{ article()?.readTime }}</span>
                </div>
              </div>
            </div>

            <!-- Abstract Panel -->
            <div class="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden">
              <div class="absolute top-0 left-0 w-1.5 h-full bg-violet-500"></div>
              <h3 class="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3 font-display">Executive Summary / Abstract</h3>
              <p class="text-sm text-gray-300 leading-relaxed font-light italic">
                "{{ article()?.abstract }}"
              </p>
            </div>

            <!-- Sections -->
            @for (sec of article()?.sections; track sec.heading) {
              <div class="space-y-4">
                <h2 class="text-xl sm:text-2xl font-bold font-display text-white mt-8 mb-4 border-l-2 border-cyan-500 pl-3">
                  {{ sec.heading }}
                </h2>
                <p class="text-sm text-gray-400 leading-relaxed font-light whitespace-pre-line">
                  {{ sec.body }}
                </p>

                <!-- Code Visual (Optional) -->
                @if (sec.code) {
                  <div class="rounded-xl bg-[#030406] border border-white/5 p-5 my-6 overflow-hidden">
                    <pre class="font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">{{ sec.code }}</pre>
                  </div>
                }

                <!-- Math Equation Block (Optional) -->
                @if (sec.math) {
                  <div class="p-6 rounded-xl bg-white/5 border border-white/5 text-center my-6">
                    <span class="font-mono text-cyan-300 text-sm md:text-base select-all">{{ sec.math }}</span>
                  </div>
                }
              </div>
            }

            <!-- References -->
            @if (article()?.references?.length) {
              <div class="border-t border-white/10 pt-10 mt-12 space-y-4">
                <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-500 font-mono">Academic References & Citations</h3>
                <ol class="list-decimal list-inside text-xs text-gray-500 space-y-2">
                  @for (ref of article()?.references; track ref) {
                    <li>{{ ref }}</li>
                  }
                </ol>
              </div>
            }
          </article>
        } @else {
          <div class="text-center py-20 glass-panel rounded-2xl border border-white/5">
            <h3 class="text-xl font-bold text-white mb-2 font-display">Article Not Resolved</h3>
            <p class="text-sm text-gray-400 font-light mb-6">The requested whitepaper does not exist or has been archived.</p>
            <a [routerLink]="['/research']" class="px-6 py-2.5 rounded-xl bg-violet-500 text-white text-xs font-semibold hover:bg-violet-400 transition-colors">Return to Library</a>
          </div>
        }
      </div>
    </section>
  `
})
export class ResearchDetailComponent implements OnInit {
  article = signal<ArticleDetail | null>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.article.set(this.database[id] || null);
      }
    });
  }

  // Local articles database
  database: Record<string, ArticleDetail> = {
    'quantum-compiler-optimization': {
      id: 'quantum-compiler-optimization',
      title: 'Optimizing Classical Compile Pipelines for Low-Qubit Hardware Targets',
      category: 'Quantum',
      author: 'Dr. Arthur Vance',
      date: 'June 18, 2026',
      readTime: '12 min',
      summary: 'This paper outlines mathematical compilation techniques that reduce gate depth requirements on NISQ hardware.',
      bgGradClass: 'from-violet-950 via-indigo-900 to-cyan-900',
      abstract: 'Noisy Intermediate-Scale Quantum (NISQ) devices suffer from high gate error rates and short qubit coherence times. To run algorithms successfully, compilers must minimize gate depth. This paper introduces a quantum circuit compiler optimizer that simulates density matrix transforms on classical hardware grids. The optimizer is capable of pruning redundant CNOT loops and restructuring unitary matrices to yield up to a 28% decrease in gate depth.',
      sections: [
        {
          heading: '1. Introduction and NISQ Limitations',
          body: 'Modern quantum hardware operates in the NISQ regime, where environmental interactions lead to rapid decoherence. Every logic gate applied increases the probability of state collapse. Therefore, classical pre-compilation optimization is critical to map high-level algorithms to hardware topologies with minimal gates.\n\nOur simulator framework, QuantsCore SDK, focuses on topological mapping optimizations to limit operations between physically unconnected qubits.'
        },
        {
          heading: '2. Quantum Circuit Unitary Reductions',
          body: 'We utilize matrix decompositions to simplify adjacent multi-qubit unitary operations. The reduction of a double CNOT gate on entangled qubits can be written as follows:',
          math: 'U = CX_{0,1} \\cdot (R_z(\\theta) \\otimes I) \\cdot CX_{0,1} \\Longrightarrow R_z(\\theta) \\otimes I'
        },
        {
          heading: '3. Compiler Optimizer Code Interface',
          body: 'We implemented the pass optimization pipeline in Rust to maximize classical simulation efficiency. The compilation logic checks qubit density matrix intersections and prunes identity rotations:',
          code: `// Optimizer pass code mapping gate topologies
pub fn optimize_circuit(circuit: &mut QuantumCircuit) {
    let mut gate_idx = 0;
    while gate_idx < circuit.gates.len() - 1 {
        let gate_a = &circuit.gates[gate_idx];
        let gate_b = &circuit.gates[gate_idx + 1];
        
        if gate_a.is_inverse_of(gate_b) && gate_a.target_qubit == gate_b.target_qubit {
            // Remove both gates as they cancel out
            circuit.gates.drain(gate_idx..=gate_idx + 1);
            if gate_idx > 0 { gate_idx -= 1; }
        } else {
            gate_idx += 1;
        }
    }
}`
        },
        {
          heading: '4. Benchmarking Results',
          body: 'Benchmarking on a mock 16-qubit quantum processor topology showed that compilation times were cut below 15ms. The average gate count for QAOA algorithms decreased by 28%, significantly increasing state fidelity before readout.'
        }
      ],
      references: [
        'Vance, A. & Reynolds, C. (2025). Classical Simulation of Multi-Qubit Unitary Transformations. Journal of Computational Physics, 42(3), 112-124.',
        'Preskill, J. (2018). Quantum Computing in the NISQ Era and Beyond. Quantum, 2, 79.',
        'Nielsen, M. A., & Chuang, I. L. (2010). Quantum Computation and Quantum Information. Cambridge University Press.'
      ]
    },
    'hnsw-vector-indexing-latency': {
      id: 'hnsw-vector-indexing-latency',
      title: 'Accelerating Nearest-Neighbor Search Curves on SIMD-Bound Clusters',
      category: 'Machine Learning',
      tagline: 'High-throughput semantic database vector queries at scale.',
      author: 'Dr. Sarah Lin',
      date: 'May 24, 2026',
      readTime: '8 min',
      summary: 'An exploration into structuring high-dimensional vector databases to run index traversals entirely in vector registers (AVX-512).',
      bgGradClass: 'from-cyan-950 via-emerald-950 to-indigo-950',
      abstract: 'Retrieval-Augmented Generation (RAG) pipelines require fast, sub-millisecond lookups on massive embedding files. Traditional index structures (like standard HNSW graphs) suffer from L2 cache misses due to pointer-heavy tree nodes. This research presents a vector storage structure that packs HNSW node metrics in dense arrays, allowing CPU SIMD vector units (AVX-512 / ARM Neon) to evaluate vector distances on multiple embeddings concurrently. This decreases memory latency and spikes query throughput to 45k QPS.',
      sections: [
        {
          heading: '1. Memory Bound Limits in Semantic Search',
          body: 'As vector sizes expand to 1536 or 3072 dimensions, semantic queries spend the majority of CPU cycles waiting for floating-point values to load from RAM. Storing graph edges as references causes memory fragmentation. Our approach resolves this by caching the flat arrays of coordinate sets in memory page boundaries.'
        },
        {
          heading: '2. SIMD Distance Calculation',
          body: 'To compute the cosine similarity between an incoming query vector Q and a node vector V, we use parallel multiply-accumulate logic:',
          math: 'Cosine\\;Distance(Q, V) = 1 - \\frac{\\sum_{i=1}^{d} Q_i \\cdot V_i}{\\sqrt{\\sum_{i=1}^{d} Q_i^2} \\cdot \\sqrt{\\sum_{i=1}^{d} V_i^2}}'
        },
        {
          heading: '3. Vector Ingestion Pipeline',
          body: 'Here is the core lookup method written in optimized Go assembly wrappers to handle vector arithmetic lanes:',
          code: `// Go assembly loop wrapper representation for AVX-512 distance math
func CalculateCosineDistanceAVX512(vecA []float32, vecB []float32) float32 {
    // Under the hood, this loops through 16 float32 elements (512 bits) at a time
    // using VMULPS (Vector Multiply Packed Single-Precision) instruction lanes.
    var dotProduct float32 = 0.0
    for i := 0; i < len(vecA); i += 16 {
        dotProduct += simdMultiplyAccumulate(&vecA[i], &vecB[i])
    }
    return dotProduct
}`
        },
        {
          heading: '4. Summary and Real-World Latency curves',
          body: 'Implementing AVX-512 arrays resulted in a 4.2x speedup compared to standard index traversals. Mean latency remained below 0.85ms at 95th percentile under continuous high QPS simulations.'
        }
      ],
      references: [
        'Lin, S. (2026). Architectural Concurrency in Vector Ingestion Pipelines. VLDB Proceedings, 14(7), 543-556.',
        'Malkov, Y. A., & Yashunin, D. A. (2018). Efficient and Robust Approximate Nearest Neighbor Search Using Hierarchical Navigable Small World Graphs. IEEE Transactions on Pattern Analysis and Machine Intelligence, 42(4), 824-836.'
      ]
    },
    'distributed-raft-concurrency': {
      id: 'distributed-raft-concurrency',
      title: 'Solving Raft Log Ingestion Locking in High-Write Microservices',
      category: 'Systems',
      tagline: 'Techniques for asynchronous write caching in distributed states.',
      author: 'Elena Rostova',
      date: 'April 09, 2026',
      readTime: '15 min',
      summary: 'This whitepaper presents our asynchronous write-cache pipeline built on top of Raft consensus nodes.',
      bgGradClass: 'from-indigo-950 via-violet-950 to-emerald-950',
      abstract: 'Distributed databases utilizing the Raft consensus algorithm suffer from write serialization bottlenecks: all write proposals must be appended to the leader\'s state log and replicated across a quorum before return. Under intense load, locking on the state machine thread causes severe latency spikes. This paper outlines an asynchronous write-back staging buffer designed in Rust that decouples transaction reception from state replication without breaking consistency contracts.',
      sections: [
        {
          heading: '1. The Raft Bottleneck',
          body: 'The Raft consensus model ensures state machine safety by strict ordering. However, when writing thousands of audit events per second, the state lock blocks incoming network sockets. To bypass this, we introduce a non-blocking rings queue buffer that handles transient staging.'
        },
        {
          heading: '2. Safety Contracts and Commit Boundaries',
          body: 'We preserve linearizability by delaying read confirmations until the asynchronous queue commits to disk. The safety invariant ensures that a client only reads confirmed logs:',
          math: 'Commit\\;Index \\ge Match\\;Index_{quorum}'
        },
        {
          heading: '3. Caching Loop Implementation',
          body: 'The cache loop written in Rust uses asynchronous Tokio channels to poll proposals and flush log blocks to the storage layer:',
          code: `// Async worker flushing logs to Disk
async fn start_log_flusher(
    mut rx: tokio::sync::mpsc::Receiver<LogProposal>,
    log_store: Arc<LogStore>
) {
    let mut batch = Vec::with_capacity(1024);
    
    while let Some(proposal) = rx.recv().await {
        batch.push(proposal);
        if batch.len() >= 1024 {
            log_store.write_batch(&batch).await.expect("Failed log persistence");
            batch.clear();
        }
    }
}`
        }
      ],
      references: [
        'Rostova, E. (2025). Mitigating Lock Contention in Consensus Runtimes. ACM Transactions on Computer Systems, 18(2), 201-215.',
        'Ongaro, D., & Ousterhout, J. (2014). In Search of an Understandable Consensus Algorithm. USENIX Annual Technical Conference, 305-320.'
      ]
    },
    'quantum-portfolio-optimization': {
      id: 'quantum-portfolio-optimization',
      title: 'Quantum-Annealing Simulated Heuristics for Financial Allocations',
      category: 'Quantum',
      author: 'Marcus Vane',
      date: 'March 14, 2026',
      readTime: '10 min',
      summary: 'We model the classic Markowitz mean-variance portfolio allocation as a Quadratic Unconstrained Binary Optimization (QUBO) problem.',
      bgGradClass: 'from-violet-950 via-cyan-950 to-indigo-950',
      abstract: 'Traditional financial optimization relies on quadratic programming to allocate assets under risk constraints. As asset sizes and variable constraints grow, classical solvers struggle with NP-hard combinatorial boundaries. In this paper, we map the portfolio optimization variables to a Quadratic Unconstrained Binary Optimization (QUBO) structure. We demonstrate that simulated quantum annealing outperforms classical Mixed-Integer Programming solvers by a factor of 40 on large-scale portfolios.',
      sections: [
        {
          heading: '1. Markowitz Formulation to QUBO Staging',
          body: 'The standard objective is to minimize portfolio variance while targeting a specific expected return. The QUBO representation converts integer constraints into penalty variables added to the energy function:',
          math: 'H(x) = -A \\sum_{i} R_i x_i + B \\sum_{i,j} \\sigma_{i,j} x_i x_j + C ( \\sum_{i} w_i x_i - Target )^2'
        },
        {
          heading: '2. Solver Loop Execution',
          body: 'We utilize a simulated quantum annealing compiler to compute minimum energy configurations, simulating quantum tunnel effects over classical barrier limits.'
        }
      ],
      references: [
        'Vane, M. (2026). Portfolio Risk Minimization via Quantum Annealers. Journal of Quantitative Finance, 12(4), 88-102.'
      ]
    },
    'rag-context-filtering-llm': {
      id: 'rag-context-filtering-llm',
      title: 'Neural Document Chunk Selection via Sparse Semantic Vector Scores',
      category: 'Machine Learning',
      author: 'Dr. Sarah Lin',
      date: 'February 10, 2026',
      readTime: '7 min',
      summary: 'A study on context retrieval pipelines using hybrid vector scoring.',
      bgGradClass: 'from-cyan-950 via-violet-950 to-emerald-950',
      abstract: 'Large Language Models (LLMs) suffer from context limits and high pricing on token usage. Providing raw vector search matches directly into LLM prompts often introduces redundant information. This study presents a hybrid document chunk filter that pairs sparse lexical searches with semantic embedding reranking to strip out duplicate records. In our testing, this hybrid pipeline reduced overall context-window sizes by 35% without degrading model response accuracy.',
      sections: [
        {
          heading: '1. Context Noise and the "Lost in the Middle" Problem',
          body: 'LLMs process information efficiently at the beginning and end of prompts, but frequently fail to retrieve details hidden in the middle of long texts. Keeping prompts concise is therefore an optimization necessity.'
        },
        {
          heading: '2. Rerank Scoring Equations',
          body: 'We merge the dense cosine search similarity with BM25 score metrics using a weighted interpolation parameter lambda:',
          math: 'Score_{Hybrid}(D) = \\lambda \\cdot Score_{Dense}(D) + (1 - \\lambda) \\cdot Score_{Sparse}(D)'
        }
      ],
      references: [
        'Lin, S. (2025). Sparse-Dense Intersections in Enterprise Search Systems. Journal of AI Engineering, 8(1), 32-45.'
      ]
    }
  };
}
