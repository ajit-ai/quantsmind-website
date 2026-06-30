import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  techStack: string[];
  specs: { label: string; value: string }[];
  accentClass: string;
  bgGradClass: string;
  sandboxCode: string;
  simulatedLogs: string[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="products" class="py-24 bg-[#08090d] border-t border-white/5 relative">
      <!-- Glow backgrounds -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div class="absolute bottom-[20%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/5 blur-[120px] animate-pulse"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-20">
          <h2 class="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3 font-display">Execution Platform</h2>
          <p class="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Runtime environments built for modern research
          </p>
          <p class="text-gray-400 font-light leading-relaxed">
            Our proprietary libraries and execution layers enable enterprise teams to develop, test, and scale high-performance AI and optimization models.
          </p>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          @for (prod of products; track prod.id) {
            <div class="glass-panel rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 opacity-80"></div>
              <!-- Header Visual -->
              <div class="h-48 relative overflow-hidden bg-gradient-to-br" [class]="prod.bgGradClass">
                <div class="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                <!-- Abstract Math Lines -->
                <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                <div class="absolute bottom-6 left-6 z-10">
                  <span class="text-[10px] font-mono font-semibold tracking-widest text-cyan-300 uppercase px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/30 mb-2 inline-block">PRODUCTION READY</span>
                  <h3 class="text-2xl font-bold font-display text-white">{{ prod.name }}</h3>
                </div>
              </div>

              <!-- Body -->
              <div class="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-300 mb-2 font-display">{{ prod.tagline }}</p>
                  <p class="text-sm text-gray-400 font-light leading-relaxed mb-6">{{ prod.desc }}</p>

                  <div class="flex flex-wrap gap-2 mb-6">
                    @for (tech of prod.techStack; track tech) {
                      <span class="text-[10px] font-mono px-2 py-1 bg-white/5 rounded border border-white/5 text-gray-300">{{ tech }}</span>
                    }
                  </div>
                </div>

                <button 
                  (click)="openModal(prod)"
                  class="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 hover:from-cyan-400 hover:via-indigo-400 hover:to-violet-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 text-center cursor-pointer"
                >
                  Launch Sandbox Monitor
                </button>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Modal Overlay -->
      @if (activeProduct()) {
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          <div 
            class="relative w-full max-w-4xl glass-panel border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-float"
            style="animation-duration: 12s;"
          >
            <!-- Modal Header -->
            <div class="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0c0d12]">
              <div class="flex items-center space-x-2">
                <span class="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
                <span class="font-mono text-xs text-gray-400">SANDBOX // {{ activeProduct()?.name }}</span>
              </div>
              <button 
                (click)="closeModal()" 
                class="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Modal Content -->
            <div class="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 max-h-[80vh] overflow-y-auto">
              <!-- Left side: Specs & description -->
              <div>
                <h4 class="text-xl font-bold font-display text-white mb-2">{{ activeProduct()?.name }}</h4>
                <p class="text-sm text-gray-400 leading-relaxed mb-6 font-light">{{ activeProduct()?.desc }}</p>

                <h5 class="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-display">System Telemetry</h5>
                <div class="space-y-3">
                  @for (spec of activeProduct()?.specs; track spec.label) {
                    <div class="flex justify-between items-center py-2 border-b border-white/5 text-sm">
                      <span class="text-gray-500">{{ spec.label }}</span>
                      <span class="font-mono text-cyan-300">{{ spec.value }}</span>
                    </div>
                  }
                </div>
              </div>

              <!-- Right side: Code & Logs Terminal -->
              <div class="flex flex-col space-y-4">
                <!-- Code Snippet -->
                <div class="rounded-xl bg-[#030406] border border-white/5 p-4 overflow-hidden">
                  <div class="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-2 border-b border-white/5 pb-2">
                    <span>Source Snippet (.ts)</span>
                    <span class="text-cyan-500">READONLY</span>
                  </div>
                  <pre class="font-mono text-xs text-emerald-400 overflow-x-auto select-all leading-relaxed">{{ activeProduct()?.sandboxCode }}</pre>
                </div>

                <!-- Live logs -->
                <div class="rounded-xl bg-[#030406] border border-white/5 p-4 flex-grow">
                  <div class="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-2 border-b border-white/5 pb-2">
                    <span>Active Event Stream</span>
                    <span class="text-indigo-400 animate-pulse">STREAMING</span>
                  </div>
                  <div class="font-mono text-[11px] text-gray-400 space-y-1 overflow-y-auto max-h-48 leading-relaxed">
                    @for (log of activeProduct()?.simulatedLogs; track log) {
                      <div class="flex space-x-2">
                        <span class="text-gray-600">[OK]</span>
                        <span>{{ log }}</span>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  `
})
export class ProductsComponent {
  activeProduct = signal<ProductItem | null>(null);

  products: ProductItem[] = [
    {
      id: 'quants-core',
      name: 'QuantsCore SDK',
      tagline: 'Classical-Quantum Wave Simulation Platform',
      desc: 'An advanced developer SDK containing compilers, simulator kernels, and wave matrix mathematical runtimes. Enables classical GPU nodes to test and optimize quantum circuits before deployment.',
      techStack: ['C++', 'Rust', 'WebAssembly', 'OpenCL'],
      specs: [
        { label: 'Simulator Kernel', value: 'QuantsCore-V3' },
        { label: 'Qubit Simulation Limit', value: '42 Qu/Classical GPU' },
        { label: 'Compiler Targets', value: 'QASM, QIR, Classical LLVM' },
        { label: 'Average Compilation Time', value: '< 18ms' }
      ],
      accentClass: 'text-cyan-400',
      bgGradClass: 'from-cyan-950 via-cyan-900 to-indigo-900',
      sandboxCode: `import { QuantumCircuit, Simulator } from '@quantsmind/core';

const circuit = new QuantumCircuit(3);
circuit.hadamard(0);
circuit.cnot(0, 1);
circuit.cnot(1, 2);

const results = Simulator.run(circuit, { shots: 4096 });
console.log(results.getCounts());`,
      simulatedLogs: [
        'Initializing QuantsCore-V3 Simulator...',
        'Mapping 3 simulated qubits to dynamic C++ matrix engine...',
        'Hadamard gate injected on qubit 0 (Superposition active).',
        'C-NOT gate link applied between qubit 0 -> 1.',
        'Entanglement verified: density score 0.9997',
        'Compilation targets finalized to QASM bytecode.',
        'Simulated run completed in 12.4ms (4096 shots).'
      ]
    },
    {
      id: 'mind-neural',
      name: 'MindNeural Engine',
      tagline: 'Sub-Millisecond Vector Semantic Query Staging',
      desc: 'A super-scalable vector database engine and neural caching server. Optimized to parse high-dimensional numeric arrays and retrieve semantic context for generative AI networks.',
      techStack: ['Go', 'gRPC', 'RocksDB', 'SIMD Assembly'],
      specs: [
        { label: 'Query Latency (HNSW)', value: '0.84ms' },
        { label: 'Dimensions Supported', value: 'Up to 3072 dims' },
        { label: 'Throughput', value: '45,000 queries/sec' },
        { label: 'Cluster Type', value: 'Distributed Raft Consensus' }
      ],
      accentClass: 'text-emerald-400',
      bgGradClass: 'from-emerald-950 via-emerald-900 to-cyan-950',
      sandboxCode: `import { MindNeuralStore } from '@quantsmind/neural';

const store = new MindNeuralStore('semantic-cache');
const queryVector = [0.12, -0.43, 0.94, ...3072];

const context = await store.query({
  vector: queryVector,
  topK: 5,
  minScore: 0.88
});`,
      simulatedLogs: [
        'Starting MindNeural Distributed Node...',
        'Loading index map into SIMD registers...',
        'HNSW search index verified (12M vectors cached).',
        'Incoming batch query request received (3072 dims).',
        'Index query processed in 0.84ms.',
        'Top 5 nearest neighbors resolved with scores > 0.91',
        'Payload stream sent to gRPC channel client.'
      ]
    },
    {
      id: 'quantum-flow',
      name: 'QuantumFlow Optimizer',
      tagline: 'High-Dimensional Combinatorial Solver',
      desc: 'A math optimizer designed to solve huge logistical pipelines, risk assessment allocations, and grid optimization models using simulated annealing algorithms.',
      techStack: ['Rust', 'Tensors', 'Python SDK', 'gRPC'],
      specs: [
        { label: 'Solver Paradigm', value: 'Simulated Quantum Annealing' },
        { label: 'Variable Constraint Limit', value: '1.2B nodes' },
        { label: 'Execution Speedup', value: '40x over standard MIP' },
        { label: 'Output Staging', value: 'JSON, Parquet, Vector-Out' }
      ],
      accentClass: 'text-violet-400',
      bgGradClass: 'from-violet-950 via-violet-900 to-indigo-950',
      sandboxCode: `import { QuantumFlow } from '@quantsmind/optimize';

const solver = new QuantumFlow.Solver();
solver.addVariables(variablesList);
solver.addConstraints(constraintsMap);

const result = await solver.solve({
  steps: 50000,
  temperature: 0.05
});`,
      simulatedLogs: [
        'Parsing optimization constraints graph...',
        'Identified 4.2M node combinations (Variables list).',
        'Executing Annealing Solver loop (Step limit: 50,000)...',
        'Step 10,000: Global temperature 0.041 (Current min: 421.23)',
        'Step 30,000: Global temperature 0.012 (Current min: 388.94)',
        'Annealing complete. Global minimum locked: 387.12',
        'Solution validated: all constraints verified.'
      ]
    }
  ];

  openModal(product: ProductItem) {
    this.activeProduct.set(product);
  }

  closeModal() {
    this.activeProduct.set(null);
  }
}
