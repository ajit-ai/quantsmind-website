import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface EcosystemDetail {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  accentText: string;
  overview: string;
  stats: { value: string; label: string }[];
  architecture: { title: string; desc: string }[];
  workflows: { step: string; title: string; desc: string }[];
  useCases: { title: string; desc: string; label: string }[];
  deliverables: string[];
  techStack: string[];
  code: string;
}

@Component({
  selector: 'app-ecosystem-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (product()) {
      <main class="min-h-screen bg-[#05060b] text-white">
        <section class="relative overflow-hidden pt-36 pb-24">
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-indigo-500/10 blur-[120px]"></div>
            <div class="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[100px]"></div>
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]"></div>
          </div>

          <div class="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <nav class="mb-10 flex items-center gap-2 text-xs text-gray-500">
              <a [routerLink]="['/']" class="transition-colors hover:text-cyan-400">Home</a>
              <span>/</span>
              <a [routerLink]="['/']" fragment="products" class="transition-colors hover:text-cyan-400">Ecosystem</a>
              <span>/</span>
              <span class="text-gray-300">{{ product()!.name }}</span>
            </nav>

            <div class="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                 [ngClass]="product()!.accentText">
              {{ product()!.badge }}
            </div>
            <h1 class="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{{ product()!.name }}</h1>
            <p class="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">{{ product()!.tagline }}</p>
            <div class="flex flex-wrap gap-4">
              <a [routerLink]="['/']" fragment="contact"
                 class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5">
                Discuss Integration
              </a>
              <a [routerLink]="['/']" fragment="products"
                 class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-gray-100 transition duration-300 hover:bg-white/10">
                All Ecosystem
              </a>
            </div>
          </div>
        </section>

        <section class="border-y border-white/5 py-10">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
              @for (stat of product()!.stats; track stat.label) {
                <div class="text-center">
                  <div class="mb-1 text-3xl font-extrabold" [ngClass]="product()!.accentText">{{ stat.value }}</div>
                  <div class="text-xs uppercase tracking-widest text-gray-500">{{ stat.label }}</div>
                </div>
              }
            </div>
          </div>
        </section>

        <section class="py-20">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h2 class="mb-3 text-xs font-semibold uppercase tracking-widest" [ngClass]="product()!.accentText">Overview</h2>
                <h3 class="mb-6 text-3xl font-bold">Product knowledge</h3>
                <p class="text-base leading-relaxed text-gray-400">{{ product()!.overview }}</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-[#030406] p-5">
                <div class="mb-3 flex items-center justify-between border-b border-white/5 pb-3 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                  <span>Developer Snippet</span>
                  <span [ngClass]="product()!.accentText">SDK</span>
                </div>
                <pre class="overflow-x-auto whitespace-pre-wrap text-xs leading-relaxed text-emerald-400">{{ product()!.code }}</pre>
              </div>
            </div>
          </div>
        </section>

        <section class="border-y border-white/5 bg-[#080910] py-20">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="mb-14 text-center">
              <h2 class="mb-3 text-xs font-semibold uppercase tracking-widest" [ngClass]="product()!.accentText">Architecture</h2>
              <h3 class="text-3xl font-bold">Core modules</h3>
            </div>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              @for (item of product()!.architecture; track item.title) {
                <div class="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-indigo-400/25">
                  <h4 class="mb-2 text-sm font-semibold text-white">{{ item.title }}</h4>
                  <p class="text-xs leading-relaxed text-gray-400">{{ item.desc }}</p>
                </div>
              }
            </div>
          </div>
        </section>

        <section class="py-20">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 class="mb-3 text-xs font-semibold uppercase tracking-widest" [ngClass]="product()!.accentText">Workflow</h2>
                <h3 class="mb-8 text-3xl font-bold">How teams use it</h3>
                <div class="space-y-5">
                  @for (step of product()!.workflows; track step.step) {
                    <div class="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs font-bold" [ngClass]="product()!.accentText">{{ step.step }}</div>
                      <div>
                        <h4 class="mb-1 text-sm font-semibold text-white">{{ step.title }}</h4>
                        <p class="text-xs leading-relaxed text-gray-400">{{ step.desc }}</p>
                      </div>
                    </div>
                  }
                </div>
              </div>
              <div class="rounded-2xl border border-white/10 bg-[#080910] p-7">
                <h3 class="mb-5 text-lg font-bold">Integration deliverables</h3>
                <ul class="space-y-3">
                  @for (item of product()!.deliverables; track item) {
                    <li class="flex gap-3 text-sm leading-relaxed text-gray-300">
                      <svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                      </svg>
                      <span>{{ item }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="border-y border-white/5 bg-[#080910] py-20">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="mb-14 text-center">
              <h2 class="mb-3 text-xs font-semibold uppercase tracking-widest" [ngClass]="product()!.accentText">Applications</h2>
              <h3 class="text-3xl font-bold">Where it fits</h3>
            </div>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
              @for (useCase of product()!.useCases; track useCase.title) {
                <div class="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/25">
                  <div class="mb-4 inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg bg-indigo-400/10 px-2 text-xs font-bold text-indigo-300">{{ useCase.label }}</div>
                  <h4 class="mb-2 text-sm font-semibold text-white">{{ useCase.title }}</h4>
                  <p class="text-xs leading-relaxed text-gray-400">{{ useCase.desc }}</p>
                </div>
              }
            </div>
          </div>
        </section>

        <section class="border-t border-white/5 py-20">
          <div class="mx-auto max-w-3xl px-4 text-center">
            <h2 class="mb-4 text-3xl font-bold">Build with {{ product()!.name }}</h2>
            <p class="mb-8 text-gray-400">Use it as a standalone engine or integrate it into your AI, quantum, and optimization workflow.</p>
            <a [routerLink]="['/']" fragment="contact"
               class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 px-10 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5">
              Plan Integration
            </a>
          </div>
        </section>
      </main>
    } @else {
      <div class="flex min-h-screen items-center justify-center bg-[#05060b]">
        <div class="text-center">
          <p class="mb-4 text-gray-400">Ecosystem product not found.</p>
          <a [routerLink]="['/']" fragment="products" class="text-cyan-400 hover:underline">Back to Ecosystem</a>
        </div>
      </div>
    }
  `
})
export class EcosystemDetailComponent implements OnInit {
  product = signal<EcosystemDetail | null>(null);

  private readonly productData: Record<string, EcosystemDetail> = {
    'quants-core': {
      id: 'quants-core',
      name: 'QuantsCore SDK',
      badge: 'Simulation SDK',
      tagline: 'Classical-quantum wave simulation toolkit for circuit design, compiler testing, and hardware-ready experimentation.',
      accentText: 'text-cyan-400',
      overview: 'QuantsCore SDK gives research and engineering teams a programmable environment for designing quantum circuits, running high-speed classical simulations, compiling to portable targets, and comparing circuit behavior before hardware execution. It is built for teams that need reproducible experiments, fast iteration, and clear performance telemetry.',
      stats: [
        { value: '42', label: 'GPU Qubit Limit' },
        { value: '<18ms', label: 'Compile Time' },
        { value: 'QASM', label: 'Target Format' },
        { value: 'V3', label: 'Kernel Series' }
      ],
      architecture: [
        { title: 'Circuit Authoring Layer', desc: 'Typed APIs for gates, measurements, registers, controlled operations, and reusable circuit templates.' },
        { title: 'Wave Matrix Runtime', desc: 'Dense and sparse state simulation with GPU-backed kernels for superposition, entanglement, and measurement sampling.' },
        { title: 'Compiler Pipeline', desc: 'Targets QASM, QIR, and LLVM-oriented intermediate stages for downstream execution or audit.' },
        { title: 'Telemetry Hooks', desc: 'Captures compile timing, gate density, fidelity estimates, memory pressure, and shot-level output distribution.' }
      ],
      workflows: [
        { step: '01', title: 'Model the circuit', desc: 'Define registers, gates, measurements, and reusable experiment templates through the SDK.' },
        { step: '02', title: 'Run simulation', desc: 'Execute local or GPU-backed simulation with controlled shots, seeds, and noise assumptions.' },
        { step: '03', title: 'Analyze output', desc: 'Compare counts, fidelity, entanglement behavior, and circuit depth before changing the design.' },
        { step: '04', title: 'Export targets', desc: 'Compile to QASM or QIR-ready artifacts for hardware planning, notebooks, or CI validation.' }
      ],
      deliverables: [
        'SDK integration guide with circuit templates and example experiments.',
        'Compiler target configuration for QASM, QIR, or internal runtime usage.',
        'Benchmark report covering simulation speed, memory, and circuit fidelity.',
        'Developer handoff with test circuits, CI examples, and telemetry setup.'
      ],
      useCases: [
        { title: 'Quantum Circuit Prototyping', desc: 'Rapidly test gate layouts and measurement strategies before hardware execution.', label: 'QC' },
        { title: 'Research Reproducibility', desc: 'Package simulation notebooks, seeds, outputs, and compiler artifacts for peer review.', label: 'R&D' },
        { title: 'Training Environments', desc: 'Create hands-on quantum programming labs for internal engineering teams.', label: 'Edu' }
      ],
      techStack: ['C++', 'Rust', 'WebAssembly', 'OpenCL', 'QASM', 'QIR', 'LLVM'],
      code: `import { QuantumCircuit, Simulator } from '@quantsmind/core';

const circuit = new QuantumCircuit(3);
circuit.hadamard(0);
circuit.cnot(0, 1);
circuit.cnot(1, 2);

const results = Simulator.run(circuit, { shots: 4096 });`
    },
    'mind-neural': {
      id: 'mind-neural',
      name: 'MindNeural Engine',
      badge: 'Vector Runtime',
      tagline: 'Sub-millisecond semantic retrieval and neural cache infrastructure for AI systems that need context at speed.',
      accentText: 'text-emerald-400',
      overview: 'MindNeural Engine is a distributed vector retrieval layer for AI products, agent workflows, and knowledge platforms. It focuses on low-latency semantic search, high-dimensional vector storage, neural caching, payload filtering, and stable cluster operation under heavy query load.',
      stats: [
        { value: '0.84ms', label: 'Query Latency' },
        { value: '3072', label: 'Max Dimensions' },
        { value: '45K/s', label: 'Query Throughput' },
        { value: 'Raft', label: 'Cluster Mode' }
      ],
      architecture: [
        { title: 'Vector Index Core', desc: 'HNSW-style retrieval with high-dimensional embedding support, shard awareness, and filtered nearest-neighbor search.' },
        { title: 'Neural Cache Server', desc: 'Caches frequently retrieved context, agent memory, and semantic payloads close to inference workloads.' },
        { title: 'Distributed Consensus', desc: 'Cluster coordination with replication, failover, consistency controls, and node health management.' },
        { title: 'gRPC Query Gateway', desc: 'Low-overhead APIs for ingestion, updates, search, metadata filters, and streaming result payloads.' }
      ],
      workflows: [
        { step: '01', title: 'Ingest embeddings', desc: 'Load vectors, metadata, source references, and access controls from documents, logs, or product data.' },
        { step: '02', title: 'Tune retrieval', desc: 'Adjust index parameters, reranking thresholds, cache strategy, and filtering rules.' },
        { step: '03', title: 'Serve AI context', desc: 'Expose low-latency semantic retrieval to RAG, agents, search, and recommendation systems.' },
        { step: '04', title: 'Operate the cluster', desc: 'Monitor latency, recall, shard balance, cache hit rate, replication, and storage growth.' }
      ],
      deliverables: [
        'Vector schema, metadata model, and ingestion pipeline.',
        'Cluster deployment configuration with replication and failover settings.',
        'Query API examples for RAG, agent memory, and semantic search.',
        'Monitoring dashboard for latency, throughput, recall, and cache effectiveness.'
      ],
      useCases: [
        { title: 'Enterprise RAG', desc: 'Retrieve governed context from large knowledge stores for LLM applications.', label: 'RAG' },
        { title: 'Semantic Product Search', desc: 'Match user intent to catalog, policy, or operational records without exact keywords.', label: 'Search' },
        { title: 'Agent Memory', desc: 'Persist and retrieve task history, preferences, and context for multi-step AI agents.', label: 'Agent' }
      ],
      techStack: ['Go', 'gRPC', 'RocksDB', 'SIMD', 'HNSW', 'Raft', 'OpenTelemetry'],
      code: `import { MindNeuralStore } from '@quantsmind/neural';

const store = new MindNeuralStore('semantic-cache');
const context = await store.query({
  vector: queryVector,
  topK: 5,
  minScore: 0.88
});`
    },
    'quantum-flow': {
      id: 'quantum-flow',
      name: 'QuantumFlow Optimizer',
      badge: 'Optimization Solver',
      tagline: 'High-dimensional combinatorial optimization for logistics, allocation, scheduling, risk, and grid planning.',
      accentText: 'text-violet-400',
      overview: 'QuantumFlow Optimizer converts large constraint systems into solver-ready graphs and searches for high-quality solutions using annealing-inspired optimization. It is designed for decision systems where standard mixed-integer programming becomes slow, expensive, or difficult to operate at scale.',
      stats: [
        { value: '1.2B', label: 'Constraint Nodes' },
        { value: '40x', label: 'Speedup Target' },
        { value: '50K', label: 'Anneal Steps' },
        { value: 'JSON', label: 'Output Ready' }
      ],
      architecture: [
        { title: 'Constraint Graph Builder', desc: 'Transforms variables, objectives, penalties, and hard constraints into an optimized graph representation.' },
        { title: 'Annealing Runtime', desc: 'Runs temperature schedules, neighborhood exploration, penalty tuning, and convergence tracking.' },
        { title: 'Python and gRPC SDKs', desc: 'Supports notebooks, backend services, and automated optimization jobs across language boundaries.' },
        { title: 'Result Staging', desc: 'Exports ranked solutions, constraint validation reports, and downstream formats such as JSON or Parquet.' }
      ],
      workflows: [
        { step: '01', title: 'Define variables', desc: 'Model entities, objective functions, constraints, penalties, and domain-specific feasibility rules.' },
        { step: '02', title: 'Build solver graph', desc: 'Compile the optimization problem into graph or tensor structures that the runtime can search efficiently.' },
        { step: '03', title: 'Run optimization', desc: 'Execute annealing schedules, compare candidate solutions, and monitor convergence behavior.' },
        { step: '04', title: 'Validate decisions', desc: 'Check every constraint, rank alternative solutions, and export results for operational systems.' }
      ],
      deliverables: [
        'Optimization model design with variables, constraints, penalties, and objectives.',
        'Solver integration using Python SDK or gRPC service calls.',
        'Benchmark comparison against existing MIP, heuristic, or manual planning workflows.',
        'Validated output pipeline with reports, ranked alternatives, and export formats.'
      ],
      useCases: [
        { title: 'Logistics Planning', desc: 'Optimize routing, fleet assignment, warehouse staging, and delivery windows.', label: 'Ops' },
        { title: 'Portfolio Allocation', desc: 'Balance risk, return, exposure, liquidity, and regulatory constraints.', label: 'Risk' },
        { title: 'Energy Grid Scheduling', desc: 'Plan generation, storage, and load balancing under changing constraints.', label: 'Grid' }
      ],
      techStack: ['Rust', 'Python SDK', 'gRPC', 'Tensors', 'Parquet', 'JSON', 'OpenTelemetry'],
      code: `import { QuantumFlow } from '@quantsmind/optimize';

const solver = new QuantumFlow.Solver();
solver.addVariables(variablesList);
solver.addConstraints(constraintsMap);

const result = await solver.solve({ steps: 50000 });`
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      this.product.set(this.productData[id] ?? null);
    });
  }
}
