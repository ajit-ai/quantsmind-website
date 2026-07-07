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
