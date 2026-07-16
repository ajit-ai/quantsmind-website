import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface ServiceDetail {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  accentText: string;
  overview: string;
  stats: { value: string; label: string }[];
  capabilities: { title: string; desc: string }[];
  engagement: { step: string; title: string; desc: string }[];
  deliverables: string[];
  useCases: { title: string; desc: string; icon: string }[];
  techStack: string[];
  industryFocus?: string;
  problem?: string;
  serviceRecommended?: string;
  headline?: string;
  subheading?: string;
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (service()) {
      <main class="min-h-screen bg-[#05060b] text-white">
        <section class="relative overflow-hidden pt-36 pb-24">
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-cyan-500/10 blur-[120px]"></div>
            <div class="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[100px]"></div>
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.06),transparent_60%)]"></div>
          </div>

          <div class="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <nav class="mb-10 flex items-center gap-2 text-xs text-gray-500">
              <a [routerLink]="['/']" class="transition-colors hover:text-cyan-400">Home</a>
              <span>/</span>
              <a [routerLink]="['/']" fragment="services" class="transition-colors hover:text-cyan-400">Services</a>
              <span>/</span>
              <span class="text-gray-300">{{ service()!.title }}</span>
            </nav>

            <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                 [ngClass]="service()!.accentText">
              {{ service()!.badge }}
            </div>

            <h1 class="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {{ service()!.title }}
            </h1>
            <p class="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              {{ service()!.tagline }}
            </p>

            <div class="flex flex-wrap gap-4">
              <a [routerLink]="['/']" fragment="contact"
                 class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5">
                Get Started
              </a>
              <a [routerLink]="['/']" fragment="services"
                 class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-gray-100 transition duration-300 hover:bg-white/10">
                All Services
              </a>
            </div>
          </div>
        </section>

        <section class="border-y border-white/5 py-10">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
              @for (stat of service()!.stats; track stat.label) {
                <div class="text-center">
                  <div class="mb-1 text-3xl font-extrabold" [ngClass]="service()!.accentText">{{ stat.value }}</div>
                  <div class="text-xs uppercase tracking-widest text-gray-500">{{ stat.label }}</div>
                </div>
              }
            </div>
          </div>
        </section>

        <section class="py-20">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 class="mb-3 text-xs font-semibold uppercase tracking-widest" [ngClass]="service()!.accentText">Overview</h2>
                <h3 class="mb-6 text-3xl font-bold text-white">What we deliver</h3>
                <p class="text-base leading-relaxed text-gray-400">{{ service()!.overview }}</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-7">
                <p class="mb-5 text-xs uppercase tracking-widest text-gray-500">Technology Stack</p>
                <div class="flex flex-wrap gap-2">
                  @for (tech of service()!.techStack; track tech) {
                    <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">{{ tech }}</span>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-20">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 shadow-2xl shadow-cyan-950/20 sm:p-10">
              <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Mission Focus</p>
                  <h3 class="text-2xl font-bold text-white">Operational context and recommended path</h3>
                </div>
                @if (service()!.serviceRecommended) {
                  <div class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                    {{ service()!.serviceRecommended }}
                  </div>
                }
              </div>

              <div class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div class="space-y-5">
                  @if (service()!.industryFocus) {
                    <div>
                      <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">Industry Focus</p>
                      <p class="text-sm leading-7 text-gray-300">{{ service()!.industryFocus }}</p>
                    </div>
                  }
                  @if (service()!.problem) {
                    <div>
                      <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">The Problem</p>
                      <p class="text-sm leading-7 text-gray-300">{{ service()!.problem }}</p>
                    </div>
                  }
                </div>

                <div class="rounded-2xl border border-white/10 bg-[#080910]/80 p-6">
                  @if (service()!.headline) {
                    <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">Headline</p>
                    <h4 class="mb-4 text-xl font-semibold text-white">{{ service()!.headline }}</h4>
                  }
                  @if (service()!.subheading) {
                    <p class="text-sm leading-7 text-gray-400">{{ service()!.subheading }}</p>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="border-y border-white/5 bg-[#080910] py-20">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="mb-14 text-center">
              <h2 class="mb-3 text-xs font-semibold uppercase tracking-widest" [ngClass]="service()!.accentText">Capabilities</h2>
              <h3 class="text-3xl font-bold text-white">Core competencies</h3>
            </div>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              @for (cap of service()!.capabilities; track cap.title) {
                <div class="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-cyan-400/25">
                  <h4 class="mb-2 text-sm font-semibold text-white">{{ cap.title }}</h4>
                  <p class="text-xs leading-relaxed text-gray-400">{{ cap.desc }}</p>
                </div>
              }
            </div>
          </div>
        </section>

        <section class="py-20">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 class="mb-3 text-xs font-semibold uppercase tracking-widest" [ngClass]="service()!.accentText">Delivery Model</h2>
                <h3 class="mb-8 text-3xl font-bold text-white">How we build this service</h3>
                <div class="space-y-5">
                  @for (phase of service()!.engagement; track phase.step) {
                    <div class="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs font-bold" [ngClass]="service()!.accentText">
                        {{ phase.step }}
                      </div>
                      <div>
                        <h4 class="mb-1 text-sm font-semibold text-white">{{ phase.title }}</h4>
                        <p class="text-xs leading-relaxed text-gray-400">{{ phase.desc }}</p>
                      </div>
                    </div>
                  }
                </div>
              </div>

              <div class="rounded-2xl border border-white/10 bg-[#080910] p-7">
                <h3 class="mb-5 text-lg font-bold text-white">Typical deliverables</h3>
                <ul class="space-y-3">
                  @for (item of service()!.deliverables; track item) {
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
              <h2 class="mb-3 text-xs font-semibold uppercase tracking-widest" [ngClass]="service()!.accentText">Use Cases</h2>
              <h3 class="text-3xl font-bold text-white">Real-world applications</h3>
            </div>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
              @for (uc of service()!.useCases; track uc.title) {
                <div class="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25">
                  <div class="mb-4 inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg bg-cyan-400/10 px-2 text-xs font-bold text-cyan-300">{{ uc.icon }}</div>
                  <h4 class="mb-2 text-sm font-semibold text-white">{{ uc.title }}</h4>
                  <p class="text-xs leading-relaxed text-gray-400">{{ uc.desc }}</p>
                </div>
              }
            </div>
          </div>
        </section>

        <section class="border-t border-white/5 py-20">
          <div class="mx-auto max-w-3xl px-4 text-center">
            <h2 class="mb-4 text-3xl font-bold text-white">Ready to get started?</h2>
            <p class="mb-8 text-gray-400">Talk to our team and discover how {{ service()!.title }} can transform your operations.</p>
            <a [routerLink]="['/']" fragment="contact"
               class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 px-10 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>
    } @else {
      <div class="flex min-h-screen items-center justify-center bg-[#05060b]">
        <div class="text-center">
          <p class="mb-4 text-gray-400">Service not found.</p>
          <a [routerLink]="['/']" fragment="services" class="text-cyan-400 hover:underline">Back to Services</a>
        </div>
      </div>
    }
  `
})
export class ServiceDetailComponent implements OnInit {
  service = signal<ServiceDetail | null>(null);

  private readonly serviceData: Record<string, ServiceDetail> = {
    ai: {
      id: 'ai',
      badge: 'Cognitive Computing',
      title: 'AI Solutions & Models',
      tagline: 'Bespoke deep learning architectures, large language model integrations, and intelligent automation pipelines built for enterprise scale.',
      accentText: 'text-cyan-400',
      overview: 'We design and deploy production-grade AI systems tailored to your domain. From fine-tuned language models and semantic retrieval engines to computer vision pipelines and real-time inference APIs, the service covers model design, data preparation, evaluation, deployment, monitoring, and long-term governance.',
      stats: [
        { value: '10x', label: 'Inference Speed' },
        { value: '99.2%', label: 'Model Accuracy' },
        { value: '<50ms', label: 'Latency P99' },
        { value: '100B+', label: 'Tokens Processed' }
      ],
      capabilities: [
        { title: 'Custom Deep Learning Models', desc: 'Neural architecture design, training, tuning, and evaluation for classification, regression, generation, forecasting, and anomaly detection.' },
        { title: 'LLM Integration', desc: 'RAG, agents, structured extraction, prompt systems, fine-tuning workflows, guardrails, and secure model APIs.' },
        { title: 'Semantic Search', desc: 'Embedding pipelines, vector databases, hybrid search, reranking, metadata filters, and knowledge graph integration.' },
        { title: 'Computer Vision', desc: 'Object detection, OCR, segmentation, video analytics, quality inspection, and document vision workflows.' },
        { title: 'Predictive Analytics', desc: 'Demand forecasting, churn prediction, fraud scoring, risk modeling, and explainable decision support.' },
        { title: 'MLOps', desc: 'Model registry, CI/CD for ML, drift detection, monitoring, A/B testing, retraining, and rollback practices.' }
      ],
      engagement: [
        { step: '01', title: 'Data and workflow discovery', desc: 'Map source systems, domain rules, success metrics, risk constraints, and human review points before model selection.' },
        { step: '02', title: 'Prototype and evaluation', desc: 'Build a focused proof of value with offline benchmarks, prompt tests, retrieval quality checks, and error analysis.' },
        { step: '03', title: 'Production integration', desc: 'Expose models through secure APIs, connect business systems, add monitoring, and prepare rollback and retraining paths.' },
        { step: '04', title: 'Optimization and governance', desc: 'Tune latency, cost, accuracy, safety filters, model drift alerts, and approval workflows for long-term operation.' }
      ],
      deliverables: [
        'Model architecture, evaluation report, and measurable acceptance criteria.',
        'RAG or inference API with authentication, logging, and monitoring.',
        'Deployment pipeline, model registry, versioning, and rollback plan.',
        'Operational playbook for prompts, datasets, retraining, and quality reviews.'
      ],
      useCases: [
        { title: 'Financial Risk Modeling', desc: 'Real-time credit scoring, fraud detection, and portfolio risk assessment using explainable ML models.', icon: 'AI' },
        { title: 'Document Intelligence', desc: 'Automated extraction, classification, summarization, and Q&A over large document collections.', icon: 'RAG' },
        { title: 'Predictive Maintenance', desc: 'Sensor analytics that predict failures before downtime, with alerts and technician workflows.', icon: 'IoT' }
      ],
      techStack: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'OpenAI API', 'Pinecone', 'Weaviate', 'FastAPI', 'Ray', 'MLflow', 'ONNX', 'Triton']
    },
    quantum: {
      id: 'quantum',
      badge: 'Quantum Systems',
      title: 'Quantum Algorithms R&D',
      tagline: 'Mathematical and computational designs optimized for quantum processors, from variational circuits to quantum-classical hybrid solvers.',
      accentText: 'text-violet-400',
      overview: 'Our quantum research service turns complex optimization, simulation, and cryptography problems into rigorous algorithmic prototypes. We combine classical baselines, quantum simulation, circuit design, tensor networks, and hardware-aware testing so teams can explore quantum advantage with discipline.',
      stats: [
        { value: '1000+', label: 'Qubit Simulations' },
        { value: '1M+', label: 'State Evaluations' },
        { value: '99.9%', label: 'Circuit Fidelity' },
        { value: '5+', label: 'Quantum Platforms' }
      ],
      capabilities: [
        { title: 'Variational Algorithms', desc: 'VQE, QAOA, and hybrid quantum-classical optimization loops for constrained optimization problems.' },
        { title: 'Quantum Circuit Design', desc: 'Gate-level circuit synthesis, transpilation, noise-aware compilation, and hardware execution planning.' },
        { title: 'Tensor Network Simulation', desc: 'MPS, PEPS, and MERA-style simulation for quantum systems, materials, and high-dimensional states.' },
        { title: 'Quantum Annealing', desc: 'QUBO formulation, annealing schedules, constraint handling, and D-Wave style solver integration.' },
        { title: 'Post-Quantum Cryptography', desc: 'Lattice-based, hash-based, and code-based cryptographic migration support aligned with modern standards.' },
        { title: 'Quantum Machine Learning', desc: 'Quantum kernels, feature maps, quantum neural networks, and comparative classical benchmarks.' }
      ],
      engagement: [
        { step: '01', title: 'Problem formulation', desc: 'Translate business or scientific constraints into QUBO, Hamiltonian, circuit, or tensor-network representations.' },
        { step: '02', title: 'Classical baseline', desc: 'Create strong classical solvers first, so quantum or hybrid approaches are measured against credible benchmarks.' },
        { step: '03', title: 'Quantum simulation', desc: 'Evaluate circuits, noise profiles, annealing schedules, and optimizer behavior before targeting hardware execution.' },
        { step: '04', title: 'Research handoff', desc: 'Deliver reproducible notebooks, mathematical notes, code, and a roadmap for hardware readiness or publication.' }
      ],
      deliverables: [
        'Mathematical problem formulation and feasibility assessment.',
        'Quantum or hybrid algorithm prototype with benchmark results.',
        'Simulation notebooks, reproducible experiments, and parameter studies.',
        'Hardware execution plan across IBM Quantum, IonQ, D-Wave, or compatible platforms.'
      ],
      useCases: [
        { title: 'Supply Chain Optimization', desc: 'Vehicle routing, warehouse allocation, and multi-constraint scheduling with QAOA or annealing formulations.', icon: 'QAOA' },
        { title: 'Drug Discovery Simulation', desc: 'Molecular energy estimation and compound screening using variational quantum approaches.', icon: 'VQE' },
        { title: 'Cryptographic Hardening', desc: 'Enterprise migration planning for post-quantum cryptographic standards and key infrastructure.', icon: 'PQC' }
      ],
      techStack: ['Qiskit', 'Cirq', 'PennyLane', 'D-Wave Ocean', 'QuTiP', 'TensorNetwork', 'NumPy', 'SciPy', 'IBM Quantum', 'IonQ API', 'CUDA-Q', 'OpenFermion']
    },
    'space-science': {
      id: 'space-science',
      badge: 'Space Systems',
      title: 'Space Science & Deep Space Exploration',
      tagline: 'Hybrid quantum-classical solvers for interplanetary mission planning, autonomous navigation, and swarm coordination under extreme latency.',
      accentText: 'text-cyan-400',
      overview: 'We build mission-planning and autonomous navigation systems that model orbital mechanics, gravitational perturbations, and real-time telemetry while optimizing for safety, fuel, and timing.',
      stats: [
        { value: '90%', label: 'Planning Speedup' },
        { value: '24/7', label: 'Autonomous Adjustments' },
        { value: '1M+', label: 'Trajectory Scenarios' },
        { value: 'μs', label: 'Signal Response' }
      ],
      capabilities: [
        { title: 'Trajectory Optimization', desc: 'Model multi-body gravitation, debris avoidance, and deep-space navigation in one hybrid solver.' },
        { title: 'Swarm Coordination', desc: 'Synchronize satellite fleets and probes around changing mission constraints and telemetry conditions.' },
        { title: 'Autonomous Control', desc: 'Run real-time course corrections with low-latency decision engines and mission safety guardrails.' },
        { title: 'Telemetry Intelligence', desc: 'Extract operational signals from noisy comms streams and turn them into actionable plans.' }
      ],
      engagement: [
        { step: '01', title: 'Mission model', desc: 'Capture mission architecture, constraints, orbital assumptions, and communication limitations.' },
        { step: '02', title: 'Simulation stack', desc: 'Prototype trajectory and swarm optimization models against realistic space scenarios.' },
        { step: '03', title: 'Autonomy layer', desc: 'Deploy control logic, fallback rules, and telemetry processors into edge or cloud systems.' },
        { step: '04', title: 'Flight operations', desc: 'Support validation, monitoring, and iteration for operational mission readiness.' }
      ],
      deliverables: [
        'Trajectory optimization engine and mission simulation environment.',
        'Autonomous decision layer with safety and failover controls.',
        'Telemetry ingestion and anomaly detection workflows.',
        'Mission readiness documentation and deployment playbooks.'
      ],
      useCases: [
        { title: 'Interplanetary Missions', desc: 'Plan efficient routes and autonomous maneuvers for probes and orbiters.', icon: '🚀' },
        { title: 'Satellite Swarms', desc: 'Coordinate fleets for observation, communications, and relays.', icon: '🛰️' },
        { title: 'Deep Space Navigation', desc: 'Continuously adjust trajectories from delayed or noisy telemetry.', icon: '✨' }
      ],
      techStack: ['Python', 'Rust', 'NumPy', 'SciPy', 'Orbital Mechanics', 'TensorFlow', 'CUDA', 'ROS 2', 'Azure', 'AWS'],
      industryFocus: 'Interplanetary mission design, satellite swarm management, and deep-space navigation.',
      problem: 'Planning trajectories through complex gravitational fields while dynamically avoiding cosmic debris requires testing billions of real-time variables—a massive strain for classical networks, especially with communication lag.',
      serviceRecommended: 'Quantum Machine Learning for Trajectory & Swarm Optimization',
      headline: 'Navigating the Deep Cosmos via Subatomic Trajectories',
      subheading: 'Reduce interplanetary mission planning timelines by up to 90%. Our hybrid quantum-classical solvers calculate infinite orbital, gravitational, and telemetry vectors simultaneously, enabling deep-space probes to execute autonomous, real-time course corrections.'
    },
    'cosmic-data': {
      id: 'cosmic-data',
      badge: 'Remote Sensing',
      title: 'Cosmic Data Analysis & Earth Observation',
      tagline: 'Quantum-enhanced signal processing for telescopes, orbital sensors, and climate intelligence at extreme scale.',
      accentText: 'text-sky-400',
      overview: 'We help science and climate teams turn raw sensing streams into actionable discoveries by combining high-throughput data pipelines with quantum-inspired pattern recognition.',
      stats: [
        { value: 'PB+', label: 'Data Throughput' },
        { value: 'μs', label: 'Anomaly Detection' },
        { value: '99.4%', label: 'Signal Recall' },
        { value: '10x', label: 'Faster Review' }
      ],
      capabilities: [
        { title: 'Pattern Recognition', desc: 'Isolate planetary signals, exoplanet candidates, and atmospheric anomalies from noisy data.' },
        { title: 'Multi-Sensor Fusion', desc: 'Combine radar, optical, thermal, and spectroscopic feeds into coherent intelligence products.' },
        { title: 'Climate Modeling', desc: 'Accelerate environmental forecasting and planetary change detection with hybrid analytics.' },
        { title: 'Scientific Pipelines', desc: 'Build reproducible observation workflows for research teams and mission operations.' }
      ],
      engagement: [
        { step: '01', title: 'Data audit', desc: 'Catalog raw data formats, quality issues, bandwidth constraints, and user requirements.' },
        { step: '02', title: 'Signal model', desc: 'Design detection and classification workflows for targeted science and operations objectives.' },
        { step: '03', title: 'Compute deployment', desc: 'Deploy inference services, storage architecture, and human review flows for scale.' },
        { step: '04', title: 'Research refinement', desc: 'Tune performance metrics and enable continuous model improvements.' }
      ],
      deliverables: [
        'Data processing pipeline for telescopes and orbital sensors.',
        'Anomaly detection and classification models for scientific workflows.',
        'Operational dashboard for monitoring critical signals and trends.',
        'Reproducible notebook and deployment guide for research teams.'
      ],
      useCases: [
        { title: 'Exoplanet Discovery', desc: 'Identify subtle candidates from massive observational datasets.', icon: '🔭' },
        { title: 'Climate Monitoring', desc: 'Track atmospheric shifts, thermal anomalies, and environmental change.', icon: '🌍' },
        { title: 'Planetary Science', desc: 'Draw insights from spectroscopy, imaging, and remote sensing streams.', icon: '🪐' }
      ],
      techStack: ['Python', 'PyTorch', 'OpenCV', 'Dask', 'Spark', 'PostgreSQL', 'Delta Lake', 'Jupyter', 'Kubernetes'],
      industryFocus: 'Satellite imaging, astrobiology, exoplanet detection, and climate modeling.',
      problem: 'Modern space telescopes and orbital sensors capture petabytes of raw, noisy data daily. Sifting through this cosmic noise to spot an exoplanet or track minute climate changes is painfully slow.',
      serviceRecommended: 'Tensor-Quantum Image Pattern Recognition',
      headline: 'Decoding the Universe from Petabytes of Noise',
      subheading: 'Accelerate cosmic anomaly detection. By routing massive Earth-observation and deep-space telescope datasets through quantum neural networks, our software isolates critical planetary data, gravitational waves, and atmospheric variations in microseconds.'
    },
    biopharma: {
      id: 'biopharma',
      badge: 'Life Sciences',
      title: 'Bio-Pharma & Molecular Intelligence',
      tagline: 'Quantum-simulated molecular docking and therapeutic design for faster drug discovery and precision medicine.',
      accentText: 'text-emerald-400',
      overview: 'We build molecular intelligence pipelines that model atomic interactions, binding affinity, and protein dynamics with a quantum-informed simulation layer.',
      stats: [
        { value: 'Days', label: 'Drug Screening' },
        { value: '99.8%', label: 'Binding Fidelity' },
        { value: '10x', label: 'Simulation Speed' },
        { value: '1M+', label: 'Molecular Variants' }
      ],
      capabilities: [
        { title: 'Molecular Docking', desc: 'Simulate protein-ligand interactions and predict binding properties with high precision.' },
        { title: 'Protein Folding', desc: 'Study protein structure and dynamics through physics-informed models and hybrid compute.' },
        { title: 'Therapeutic Design', desc: 'Compare compound candidates, optimize lead selection, and support targeted development.' },
        { title: 'Bioinformatics Workflows', desc: 'Connect genomics, proteomics, and assay data into continuous scientific pipelines.' }
      ],
      engagement: [
        { step: '01', title: 'Target assessment', desc: 'Understand the molecular target, assay goals, and available experimental datasets.' },
        { step: '02', title: 'Simulation design', desc: 'Create a hybrid compute workflow for docking, scoring, and candidate ranking.' },
        { step: '03', title: 'Experiment integration', desc: 'Link outputs with lab systems, research notebooks, and decision workflows.' },
        { step: '04', title: 'Scale and govern', desc: 'Operationalize the approach with reproducible results and model governance.' }
      ],
      deliverables: [
        'Molecular simulation workflow for docking and affinity prediction.',
        'Candidate ranking and lead selection reports.',
        'Interoperable lab and research data pipelines.',
        'Scientific notebooks and implementation documentation.'
      ],
      useCases: [
        { title: 'Precision Medicine', desc: 'Model patient-specific targets and therapeutic response pathways.', icon: '🧬' },
        { title: 'Proteomics', desc: 'Map molecular interactions and protein networks across large datasets.', icon: '🧪' },
        { title: 'Drug Discovery', desc: 'Shorten discovery cycles from years to days for select programs.', icon: '💊' }
      ],
      techStack: ['Python', 'PyTorch', 'RDKit', 'OpenMM', 'NumPy', 'SciPy', 'Jupyter', 'Docker', 'Kubernetes'],
      industryFocus: 'Precision medicine, proteomics, and molecular therapeutics.',
      problem: 'Classical supercomputers take years to simulate molecular bonds and folding proteins, slowing drug development down to a crawl.',
      serviceRecommended: 'Quantum-Simulated Molecular Docking',
      headline: 'Accelerating Drug Discovery from Decades to Days',
      subheading: 'Our simulation engine utilizes quantum mechanics to model atomic interactions in real time, enabling pharmaceutical pioneers to predict protein-ligand binding affinities with flawless precision.'
    },
    finance: {
      id: 'finance',
      badge: 'Markets',
      title: 'Quantitative Finance & Risk Analysis',
      tagline: 'Hybrid quantum-classical Monte Carlo engines for pricing, volatility modeling, and fraud detection at market speed.',
      accentText: 'text-amber-400',
      overview: 'We build risk and portfolio systems that evaluate thousands of market variables simultaneously so institutions can act on volatility before it becomes a crisis.',
      stats: [
        { value: '10x', label: 'Scenario Throughput' },
        { value: 'Real-time', label: 'Risk Updates' },
        { value: '99.9%', label: 'Model Stability' },
        { value: '24/7', label: 'Monitoring' }
      ],
      capabilities: [
        { title: 'Monte Carlo Simulation', desc: 'Scale derivative simulations and scenario analysis beyond classical runtimes.' },
        { title: 'Portfolio Optimization', desc: 'Balance risk, liquidity, and expected return across dynamic market constraints.' },
        { title: 'Fraud Detection', desc: 'Surface anomalies and suspicious activity in near-real time with streaming analytics.' },
        { title: 'Market Intelligence', desc: 'Translate high-frequency signals into operational decisions and executive reporting.' }
      ],
      engagement: [
        { step: '01', title: 'Risk landscape', desc: 'Map instruments, market constraints, governance rules, and critical decision loops.' },
        { step: '02', title: 'Model design', desc: 'Build baseline simulations and identify high-value quantum or hybrid accelerations.' },
        { step: '03', title: 'Deployment', desc: 'Operationalize workflows through secure APIs, data feeds, and monitoring.' },
        { step: '04', title: 'Governance', desc: 'Embed explainability, controls, and approval processes into production decisioning.' }
      ],
      deliverables: [
        'Risk and pricing simulation framework.',
        'Portfolio optimization engine with live scenario analysis.',
        'Fraud and anomaly monitoring workflows.',
        'Operational documentation and compliance support.'
      ],
      useCases: [
        { title: 'Asset Management', desc: 'Stress test portfolios and optimize allocations under change.', icon: '📈' },
        { title: 'Derivative Pricing', desc: 'Run high-fidelity scenario modeling for complex financial products.', icon: '🧮' },
        { title: 'Arbitrage Engines', desc: 'Detect and evaluate fast-moving market opportunities.', icon: '⚡' }
      ],
      techStack: ['Python', 'NumPy', 'SciPy', 'TensorFlow', 'Kafka', 'PostgreSQL', 'Redis', 'Grafana', 'Azure'],
      industryFocus: 'Asset management, derivative pricing, and arbitrage mechanics.',
      problem: 'Processing thousands of dynamic market variables simultaneously forces institutions to rely on heavily diluted, slow simulations.',
      serviceRecommended: 'Quantum-Accelerated Monte Carlo Simulations',
      headline: 'Decoding Market Volatility Before It Happens',
      subheading: 'Shatter processing constraints. Deploy hybrid classical-quantum models to run deep risk-assessments, portfolio optimizations, and continuous fraud detection pipelines ahead of global market shifts.'
    },
    logistics: {
      id: 'logistics',
      badge: 'Operations',
      title: 'Global Supply Chain & Logistics',
      tagline: 'Combinatorial optimization for routed fleets, maritime shipping, and global distribution networks.',
      accentText: 'text-indigo-400',
      overview: 'We create optimization engines that solve the deepest routing and scheduling challenges across freight, warehousing, and last-mile delivery.',
      stats: [
        { value: 'Billions', label: 'Route Permutations' },
        { value: 'Real-time', label: 'Replanning' },
        { value: '30%', label: 'Fuel Reduction' },
        { value: '40%', label: 'Delivery Improvement' }
      ],
      capabilities: [
        { title: 'Route Optimization', desc: 'Solve multi-stop and network-wide routing problems under timing and capacity constraints.' },
        { title: 'Constraint Planning', desc: 'Balance weather, capacity, cost, lead times, and disruptions across global logistics networks.' },
        { title: 'Fleet Coordination', desc: 'Synchronize shipments, vessels, trucks, and resources without service degradation.' },
        { title: 'Scenario Planning', desc: 'Recompute plans dynamically as new disruptions and demand signals emerge.' }
      ],
      engagement: [
        { step: '01', title: 'Network mapping', desc: 'Capture routes, nodes, carriers, constraints, and service-level objectives.' },
        { step: '02', title: 'Optimization model', desc: 'Translate the planning challenge into a performant combinatorial formulation.' },
        { step: '03', title: 'Runtime deployment', desc: 'Integrate with dispatch systems, ERP layers, and live operational feeds.' },
        { step: '04', title: 'Continuous tuning', desc: 'Iterate based on changing routing conditions and performance metrics.' }
      ],
      deliverables: [
        'Optimization engine for fleet and route planning.',
        'Live planning dashboards and decision surfaces.',
        'Scenario simulation and disruption response tools.',
        'Integration layer for enterprise operations platforms.'
      ],
      useCases: [
        { title: 'Fleet Routing', desc: 'Reduce travel time and improve throughput for vehicle operations.', icon: '🚚' },
        { title: 'Maritime Shipping', desc: 'Coordinate vessels and ports around dynamic travel conditions.', icon: '⚓' },
        { title: 'Distribution Networks', desc: 'Optimize warehouses, depots, and fulfillment pathways globally.', icon: '📦' }
      ],
      techStack: ['Python', 'OR-Tools', 'NetworkX', 'NumPy', 'PostgreSQL', 'Kafka', 'FastAPI', 'React', 'Kubernetes'],
      industryFocus: 'Fleet routing, maritime shipping, and dynamic distribution networks.',
      problem: 'As variables grow, figuring out the absolute most efficient path for thousands of global shipments becomes mathematically impossible for binary machines.',
      serviceRecommended: 'Combinatorial Optimization Engine (Q-Annealing Layer)',
      headline: 'Solving the World’s Most Complex Gridlocks',
      subheading: 'Transform chaotic global freight into synchronized precision. Our software instantly calculates billions of routing permutations to bypass supply disruptions, fuel inefficiencies, and delivery delays in real time.'
    },
    energy: {
      id: 'energy',
      badge: 'Infrastructure',
      title: 'Energy Systems & Smart Grid Balancing',
      tagline: 'Predictive orchestration for renewable energy, dispatch planning, and resilient grid operations.',
      accentText: 'text-lime-400',
      overview: 'We build energy intelligence systems that balance intermittent power sources with industrial demand while maximizing storage efficiency and grid stability.',
      stats: [
        { value: 'Real-time', label: 'Load Balancing' },
        { value: '99.9%', label: 'Grid Stability' },
        { value: '40%', label: 'Efficiency Gain' },
        { value: '24/7', label: 'Forecasting' }
      ],
      capabilities: [
        { title: 'Grid Forecasting', desc: 'Predict renewable generation, demand swings, and network constraints with high-fidelity models.' },
        { title: 'Dispatch Orchestration', desc: 'Coordinate storage, generation, and demand response for resilient operations.' },
        { title: 'Resource Planning', desc: 'Optimize infra investments, backup storage, and energy distribution strategies.' },
        { title: 'Operations Dashboards', desc: 'Bring distributed field and control-room data into one visible operating picture.' }
      ],
      engagement: [
        { step: '01', title: 'Grid assessment', desc: 'Understand generation mix, load profiles, constraints, and current control systems.' },
        { step: '02', title: 'Forecast model', desc: 'Design predictive and optimization layers around renewable variability and demand shifts.' },
        { step: '03', title: 'Control integration', desc: 'Link planning logic with dispatch, storage, and operations tooling.' },
        { step: '04', title: 'Reliability hardening', desc: 'Validate resilience, response times, and operational failover under stress conditions.' }
      ],
      deliverables: [
        'Renewable forecasting and grid orchestration models.',
        'Live controls and dispatch planning interface.',
        'Storage and load balancing optimization workflows.',
        'Operations runbook and reliability playbooks.'
      ],
      useCases: [
        { title: 'Renewable Integration', desc: 'Coordinate solar, wind, and storage around real-time demand.', icon: '⚡' },
        { title: 'Grid Dispatch', desc: 'Rebalance generation and storage across regional network constraints.', icon: '🔋' },
        { title: 'Utilities Planning', desc: 'Model reliability, resilience, and future infrastructure scenarios.', icon: '🏙️' }
      ],
      techStack: ['Python', 'PyTorch', 'TimescaleDB', 'Kafka', 'Grafana', 'FastAPI', 'React', 'Azure', 'AWS'],
      industryFocus: 'Renewable energy integration, grid dispatches, and resource planning.',
      problem: 'Balancing unpredictable power inputs (like wind and solar) across an entire continent’s electric grid requires immediate multi-variable calculation.',
      serviceRecommended: 'Predictive Quantum Grid Orchestration',
      headline: 'Orchestrating the Next-Generation Clean Energy Grid',
      subheading: 'Harmonize fluctuating renewable inputs with industrial load demands. Our platform processes massive regional sensory data to optimize energy storage distribution and eliminate power grid failures.'
    },
    cybersecurity: {
      id: 'cybersecurity',
      badge: 'Defense',
      title: 'Enterprise Cybersecurity & Space-Based Data Integrity',
      tagline: 'Quantum-resistant cryptography and satellite-safe security for ground, orbital, and interconnect systems.',
      accentText: 'text-rose-400',
      overview: 'We build post-quantum security layers for telemetry, communications, and enterprise systems so sensitive networks remain resilient as encryption standards evolve.',
      stats: [
        { value: 'PQC', label: 'Protection Layer' },
        { value: '100%', label: 'Key Rotation Workflow' },
        { value: '24/7', label: 'Threat Monitoring' },
        { value: 'Zero Trust', label: 'Access Model' }
      ],
      capabilities: [
        { title: 'Post-Quantum Cryptography', desc: 'Deploy lattice-based, hash-based, and code-based algorithms for key exchange and signatures.' },
        { title: 'QKD & Free-Space Security', desc: 'Design secure protocols for satellite-to-ground and air-gap style channels.' },
        { title: 'Telemetry Protection', desc: 'Shield sensitive command, control, and data links against interception or tampering.' },
        { title: 'Key Lifecycle Governance', desc: 'Manage certificate rotation, revocation, auditable policies, and incident response.' }
      ],
      engagement: [
        { step: '01', title: 'Risk review', desc: 'Inspect current cryptography, communications links, and risk exposure for post-quantum threats.' },
        { step: '02', title: 'Architecture design', desc: 'Define PQC rollout strategy, key management, and deployment boundaries.' },
        { step: '03', title: 'Implementation', desc: 'Integrate new cryptographic primitives into services, devices, and communications gateways.' },
        { step: '04', title: 'Validation', desc: 'Perform testing, incident drills, and policy review for operational security.' }
      ],
      deliverables: [
        'Post-quantum security architecture and migration roadmap.',
        'QKD or PQC gateway implementation for telemetry and communications.',
        'Key lifecycle and access governance design.',
        'Security validation and operations documentation.'
      ],
      useCases: [
        { title: 'Satellite Telemetry', desc: 'Secure links between space assets and ground control stations.', icon: '🛰️' },
        { title: 'Enterprise Systems', desc: 'Protect critical apps, identity, and data infrastructures against future threats.', icon: '🔐' },
        { title: 'Defense Communications', desc: 'Defend mission-sensitive exchanges across terrestrial and orbital channels.', icon: '🛡️' }
      ],
      techStack: ['OpenSSL', 'Bouncy Castle', 'Go', 'Rust', 'Python', 'KMS', 'Vault', 'PKI', 'Zero Trust'],
      industryFocus: 'Satellite-to-ground telemetry protection and post-quantum cryptography.',
      problem: 'Emerging quantum hardware threatens standard encryption, putting sensitive terrestrial data networks and military/civilian satellite communication links at extreme risk.',
      serviceRecommended: 'Quantum Key Distribution (QKD) & Satellite PQC Gateway',
      headline: 'Building an Absolute Shield Against Quantum Interception',
      subheading: 'Secure your telemetry from the ground to the exosphere. Our middleware deploys quantum-resistant cryptographic keys designed for free-space and satellite communication, neutralizing advanced brute-force decryption tactics entirely.'
    },
    integration: {
      id: 'integration',
      badge: 'Integration',
      title: 'The Industrial Integration Hub',
      tagline: 'Bridge legacy enterprise and aerospace stacks into quantum-ready cloud ecosystems with a single API gateway.',
      accentText: 'text-violet-400',
      overview: 'We help organizations modernize incrementally by connecting existing software, telemetry pipelines, and AI systems to quantum cloud services without wholesale rewrites.',
      stats: [
        { value: 'Zero', label: 'Rip-and-Replace' },
        { value: 'Single', label: 'API Token' },
        { value: '24/7', label: 'Runtime Support' },
        { value: '100%', label: 'Legacy Compatibility' }
      ],
      capabilities: [
        { title: 'API Bridge', desc: 'Expose existing systems to quantum runtimes with clean, secure integration layers.' },
        { title: 'Cloud Migration', desc: 'Modernize data lakes, ETL, and analytics to hybrid cloud and edge deployment models.' },
        { title: 'Aerospace Connectors', desc: 'Tie telemetry pipelines and mission systems to new compute and orchestration services.' },
        { title: 'Platform Enablement', desc: 'Give teams the SDKs, docs, and runtime patterns to build with confidence.' }
      ],
      engagement: [
        { step: '01', title: 'Stack audit', desc: 'Review current systems, integrations, dependencies, and modernization goals.' },
        { step: '02', title: 'Bridge design', desc: 'Map the legacy surface area to new runtime capabilities and API contracts.' },
        { step: '03', title: 'Deployment', desc: 'Roll out the integration layer, gateways, and automation workflows.' },
        { step: '04', title: 'Evolution', desc: 'Support adoption, performance tuning, and future service expansion.' }
      ],
      deliverables: [
        'Universal SDK and API bridge for quantum cloud services.',
        'Legacy integration plan and migration architecture.',
        'Secure runtime deployment and observability layer.',
        'Developer onboarding toolkit and operational docs.'
      ],
      useCases: [
        { title: 'Enterprise IT Modernization', desc: 'Connect existing applications to cloud and quantum-ready infrastructure.', icon: '🏢' },
        { title: 'Aerospace Systems', desc: 'Link telemetry and mission tooling to new analytics and compute stacks.', icon: '🛩️' },
        { title: 'Cloud-Native Adoption', desc: 'Bridge old workflows into new architecture with minimal disruption.', icon: '🔌' }
      ],
      techStack: ['Node.js', 'Python', 'TypeScript', 'FastAPI', 'Docker', 'Kubernetes', 'Azure', 'AWS', 'REST', 'gRPC'],
      industryFocus: 'Enterprise IT architecture, cloud-native migration, and aerospace systems.',
      problem: 'Most operations cannot simply discard their legacy software infrastructure to build entirely new quantum pipelines from scratch.',
      serviceRecommended: 'Universal Tensor-Quantum SDK & API Bridge',
      headline: 'Plug Your Mission-Critical Stack Direct Into Quantum Cloud Ecosystems',
      subheading: 'Zero friction. Absolute acceleration. Connect your current enterprise data lakes, aerospace telemetry pipelines, and AI frameworks directly to our fault-tolerant quantum runtime cloud with a single API token.'
    },
    cloud: {
      id: 'cloud',
      badge: 'Scalable Systems',
      title: 'Cloud-Native Architecture',
      tagline: 'Secure, distributed infrastructure with automated orchestration, vector stores, and global content delivery built for zero-downtime scale.',
      accentText: 'text-emerald-400',
      overview: 'We architect and deploy cloud-native systems that are resilient, observable, and cost-efficient. The service covers Kubernetes, serverless systems, distributed databases, cloud security, observability, CI/CD, and operational runbooks for teams that need reliable platforms at scale.',
      stats: [
        { value: '99.99%', label: 'Uptime SLA' },
        { value: '<80ms', label: 'Global P95 Latency' },
        { value: '10M+', label: 'Requests / Day' },
        { value: '60%', label: 'Cost Reduction' }
      ],
      capabilities: [
        { title: 'Kubernetes Orchestration', desc: 'Multi-cluster deployments with Helm, ArgoCD, autoscaling, ingress, service mesh, and secure namespaces.' },
        { title: 'Serverless Systems', desc: 'Event-driven workloads using functions, queues, Pub/Sub, Kafka, and managed cloud services.' },
        { title: 'Distributed Databases', desc: 'PostgreSQL, CockroachDB, Cassandra, Redis, replication, backup, sharding, and failover strategies.' },
        { title: 'Vector Store Infrastructure', desc: 'Pinecone, Weaviate, Qdrant, pgvector, and AI search infrastructure for high-volume semantic retrieval.' },
        { title: 'Security and Compliance', desc: 'Zero-trust networking, IAM, secrets management, vulnerability scanning, encryption, and audit preparation.' },
        { title: 'Observability', desc: 'Metrics, traces, logs, dashboards, alerting, SLOs, and incident response workflows.' }
      ],
      engagement: [
        { step: '01', title: 'Platform assessment', desc: 'Review workloads, traffic, failure modes, compliance requirements, deployment frequency, and cloud spend.' },
        { step: '02', title: 'Reference architecture', desc: 'Design environments, networking, identity, data stores, observability, scaling policies, and disaster recovery.' },
        { step: '03', title: 'Infrastructure as code', desc: 'Implement Terraform, GitOps, container orchestration, CI/CD gates, secrets management, and environment promotion.' },
        { step: '04', title: 'Reliability hardening', desc: 'Run load tests, backup restores, cost reviews, security scans, and incident response drills.' }
      ],
      deliverables: [
        'Cloud architecture blueprint with network, security, data, and deployment diagrams.',
        'Terraform or equivalent infrastructure modules with environment configuration.',
        'CI/CD, GitOps, monitoring dashboards, alerts, and runbooks.',
        'Reliability, security, and cost optimization report with prioritized next steps.'
      ],
      useCases: [
        { title: 'Trading Platform Infrastructure', desc: 'Low-latency services, real-time risk controls, and resilient market-data processing.', icon: 'HFT' },
        { title: 'Global SaaS Platform', desc: 'Multi-region active-active deployment with failover, observability, and reliable releases.', icon: 'SaaS' },
        { title: 'AI Inference at Scale', desc: 'GPU orchestration, model caching, dynamic batching, and high-throughput inference endpoints.', icon: 'GPU' }
      ],
      techStack: ['Kubernetes', 'Terraform', 'ArgoCD', 'Istio', 'Kafka', 'PostgreSQL', 'Redis', 'Prometheus', 'Grafana', 'AWS', 'GCP', 'Azure', 'Vault', 'OpenTelemetry']
    },
    software: {
      id: 'software',
      badge: 'Custom Engineering',
      title: 'Software Development',
      tagline: 'Robust, low-latency applications and real-time analytics platforms engineered with precision across the full technology stack.',
      accentText: 'text-indigo-400',
      overview: 'Our engineering teams build high-performance software systems from the ground up, including real-time analytics dashboards, microservice backends, custom enterprise tools, APIs, data platforms, and low-latency applications. We focus on correctness, maintainability, performance, and clean handover.',
      stats: [
        { value: '50+', label: 'Systems Delivered' },
        { value: '<5ms', label: 'API Response Time' },
        { value: '10M+', label: 'Events / Second' },
        { value: '100%', label: 'Test Coverage Target' }
      ],
      capabilities: [
        { title: 'Backend Systems', desc: 'Python, Java, Go, Rust, and C++ services optimized for throughput, reliability, and low latency.' },
        { title: 'Real-Time Dashboards', desc: 'WebSocket-driven analytics, streaming data, charts, alerts, role-based views, and operational screens.' },
        { title: 'Microservice Architecture', desc: 'Domain-driven design, API gateways, gRPC, event sourcing, CQRS, and service ownership boundaries.' },
        { title: 'Frontend Engineering', desc: 'Angular, React, Next.js, TypeScript, Tailwind CSS, accessibility, and polished product workflows.' },
        { title: 'Database Architecture', desc: 'Schema design, query optimization, indexes, migrations, caching, and SQL or NoSQL storage patterns.' },
        { title: 'Developer Automation', desc: 'Internal tools, CI/CD, code generation, test automation, release pipelines, and developer experience platforms.' }
      ],
      engagement: [
        { step: '01', title: 'Product and system design', desc: 'Clarify workflows, users, data contracts, integrations, performance needs, and release priorities.' },
        { step: '02', title: 'Architecture and backlog', desc: 'Define modules, APIs, storage, security model, deployment path, technical risks, and sprint-level milestones.' },
        { step: '03', title: 'Iterative delivery', desc: 'Ship tested increments with demos, code review, automated checks, telemetry, and production-readiness gates.' },
        { step: '04', title: 'Launch and evolution', desc: 'Support rollout, fix operational issues, document ownership, and plan future product or platform enhancements.' }
      ],
      deliverables: [
        'Application architecture, API contracts, data model, and implementation backlog.',
        'Production-ready frontend, backend, database, and integration code.',
        'Automated tests, CI/CD pipeline, observability, and deployment documentation.',
        'Handover guide covering operations, maintenance, security, and roadmap recommendations.'
      ],
      useCases: [
        { title: 'Algorithmic Trading Engine', desc: 'Low-latency order management with deterministic execution, monitoring, and audit controls.', icon: 'API' },
        { title: 'Enterprise Data Platform', desc: 'Lakehouse, ETL, scheduling, dashboards, and governed business intelligence workflows.', icon: 'Data' },
        { title: 'Real-Time Collaboration Tool', desc: 'Collaborative editing, conflict resolution, offline sync, permissions, and event-driven updates.', icon: 'Sync' }
      ],
      techStack: ['Python', 'Rust', 'Go', 'Java', 'TypeScript', 'Angular', 'React', 'FastAPI', 'Spring Boot', 'PostgreSQL', 'ClickHouse', 'Apache Kafka', 'gRPC', 'GraphQL']
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      this.service.set(this.serviceData[id] ?? null);
    });
  }
}
