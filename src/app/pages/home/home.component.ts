import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    :host { display: block; background: #020308; color: #f0f4ff; font-family: 'Inter', -apple-system, sans-serif; overflow-x: hidden; }

    /* ── HERO ── */
    .hero { position:relative; min-height:100vh; display:flex; align-items:center; justify-content:center; overflow:hidden; background:radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,240,255,.08) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(120,0,255,.06) 0%, transparent 70%), #020308; }
    .hero-canvas { position:absolute; inset:0; width:100%; height:100%; z-index:0; }
    .hero-content { position:relative; z-index:10; text-align:center; padding:0 1.5rem; max-width:900px; }
    .hero-eyebrow { display:inline-flex; align-items:center; gap:.6rem; font-size:.7rem; font-weight:700; letter-spacing:.3em; text-transform:uppercase; color:#00f0ff; margin-bottom:2rem; text-shadow:0 0 20px rgba(0,240,255,.5); }
    .hero-eyebrow::before,.hero-eyebrow::after { content:''; display:block; width:30px; height:1px; background:linear-gradient(90deg,transparent,#00f0ff); }
    .hero-eyebrow::after { background:linear-gradient(90deg,#00f0ff,transparent); }
    .hero-title { font-family:'Space Grotesk',sans-serif; font-size:clamp(2.4rem,6vw,5.5rem); font-weight:700; line-height:1.08; letter-spacing:-.04em; color:#fff; margin:0 0 1.5rem; }
    .hero-title .grad { background:linear-gradient(135deg,#00f0ff 0%,#a855f7 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; filter:drop-shadow(0 0 30px rgba(0,240,255,.3)); }
    .hero-sub { font-size:clamp(1rem,2vw,1.2rem); line-height:1.7; color:#8ba3c0; max-width:620px; margin:0 auto 3rem; }
    .hero-ctas { display:flex; justify-content:center; align-items:center; gap:1.25rem; flex-wrap:wrap; }

    .btn-solid { display:inline-flex; align-items:center; gap:.5rem; padding:.875rem 2rem; border-radius:9999px; font-weight:700; font-size:.9rem; letter-spacing:.04em; cursor:pointer; transition:all .3s ease; text-decoration:none; background:linear-gradient(135deg,#00f0ff,#0077ff); color:#020308; border:none; box-shadow:0 0 30px rgba(0,240,255,.3),0 4px 20px rgba(0,0,0,.3); }
    .btn-solid:hover { transform:translateY(-2px) scale(1.03); box-shadow:0 0 50px rgba(0,240,255,.5),0 8px 30px rgba(0,0,0,.4); }
    .btn-ghost { display:inline-flex; align-items:center; gap:.5rem; padding:.875rem 2rem; border-radius:9999px; font-weight:700; font-size:.9rem; cursor:pointer; transition:all .3s ease; text-decoration:none; background:transparent; color:#f0f4ff; border:1px solid rgba(0,240,255,.35); box-shadow:0 0 20px rgba(0,240,255,.08),inset 0 0 20px rgba(0,240,255,.03); }
    .btn-ghost:hover { background:rgba(0,240,255,.06); border-color:rgba(0,240,255,.7); box-shadow:0 0 35px rgba(0,240,255,.2); transform:translateY(-2px); }

    /* ── SPLIT SECTION ── */
    .split-section { background:linear-gradient(135deg,#020308 0%,#06091a 100%); padding:6rem 1.5rem; }
    .split-grid { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:stretch; }
    @media(max-width:768px){.split-grid{grid-template-columns:1fr;}}
    .split-card { border-radius:1.5rem; padding:2.5rem; border:1px solid rgba(255,255,255,.06); position:relative; overflow:hidden; }
    .split-card-left { background:linear-gradient(135deg,#0a0e1a,#060810); }
    .split-card-right { background:linear-gradient(135deg,#04101a,#061220); border-color:rgba(0,240,255,.12); box-shadow:0 0 60px rgba(0,240,255,.05); }
    .split-label { font-size:.65rem; font-weight:700; letter-spacing:.25em; text-transform:uppercase; margin-bottom:1rem; }
    .lbl-muted { color:#475569; }
    .lbl-active { color:#00f0ff; text-shadow:0 0 10px rgba(0,240,255,.4); }
    .split-heading { font-family:'Space Grotesk',sans-serif; font-size:1.6rem; font-weight:700; color:#fff; margin-bottom:1rem; line-height:1.25; }
    .split-body { font-size:.95rem; line-height:1.75; color:#64748b; }
    .split-card-right .split-body { color:#7da8c0; }

    /* Chip visual */
    .chip-visual { margin:2rem 0; display:flex; align-items:center; justify-content:center; }
    .chip-block { position:relative; width:120px; height:120px; background:linear-gradient(135deg,#1e2435,#0d1120); border:1px solid rgba(255,255,255,.1); border-radius:.75rem; display:flex; align-items:center; justify-content:center; }
    .chip-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:4px; }
    .chip-cell { width:14px; height:14px; border-radius:2px; background:#1a2035; border:1px solid rgba(255,255,255,.05); }
    .chip-cell.lit { background:#2a3255; border-color:rgba(100,120,200,.3); }
    .chip-cell.red { background:rgba(239,68,68,.4); border-color:rgba(239,68,68,.3); animation:chipAlert 1.2s ease-in-out infinite; }
    @keyframes chipAlert{0%,100%{opacity:1}50%{opacity:.3}}
    .overload-bar { margin-top:1.5rem; }
    .overload-bar-track { height:6px; background:rgba(255,255,255,.05); border-radius:99px; overflow:hidden; }
    .overload-bar-fill { height:100%; border-radius:99px; background:linear-gradient(90deg,#ef4444,#f97316); box-shadow:0 0 12px rgba(239,68,68,.4); animation:overload 2s ease-in-out infinite; }
    @keyframes overload{0%{width:88%}50%{width:96%}100%{width:88%}}

    /* Bloch sphere */
    .bloch-visual { display:flex; justify-content:center; margin:2rem 0; }
    .bloch-sphere { position:relative; width:130px; height:130px; }
    .bloch-ring { position:absolute; border-radius:50%; border:1px solid; }
    .bloch-ring-1 { inset:0; border-color:rgba(0,240,255,.35); animation:blochSpin 8s linear infinite; }
    .bloch-ring-2 { inset:15px; border-color:rgba(168,85,247,.3); animation:blochSpin 6s linear infinite reverse; transform:rotateX(65deg); }
    .bloch-ring-3 { inset:30px; border-color:rgba(0,240,255,.2); animation:blochSpin 10s linear infinite; transform:rotateY(65deg); }
    @keyframes blochSpin{from{transform:rotate(0deg) rotateX(65deg)}to{transform:rotate(360deg) rotateX(65deg)}}
    .bloch-core { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:16px; height:16px; border-radius:50%; background:radial-gradient(circle,#00f0ff,#0077ff); box-shadow:0 0 20px rgba(0,240,255,.8); animation:corePulse 2s ease-in-out infinite; }
    .bloch-axis { position:absolute; background:rgba(0,240,255,.3); }
    .bloch-axis-v { width:1px; height:100%; left:50%; top:0; transform:translateX(-50%); }
    .bloch-axis-h { height:1px; width:100%; top:50%; left:0; transform:translateY(-50%); }
    @keyframes corePulse{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.3)}}

    /* ── CARDS ── */
    .cards-section { background:linear-gradient(180deg,#06091a 0%,#020308 100%); padding:6rem 1.5rem; }
    .cards-header { max-width:1200px; margin:0 auto 3.5rem; text-align:center; }
    .cards-grid { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; }
    @media(max-width:900px){.cards-grid{grid-template-columns:1fr;}}
    .glass-card { position:relative; padding:2rem; border-radius:1.5rem; background:rgba(10,15,35,.6); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,.07); cursor:pointer; transition:all .4s cubic-bezier(.16,1,.3,1); overflow:hidden; }
    .glass-card::before { content:''; position:absolute; inset:0; border-radius:inherit; background:linear-gradient(135deg,rgba(0,240,255,.06) 0%,rgba(168,85,247,.04) 100%); opacity:0; transition:opacity .4s; }
    .glass-card:hover::before { opacity:1; }
    .glass-card:hover { border-color:rgba(0,240,255,.3); transform:translateY(-6px); box-shadow:0 0 60px rgba(0,240,255,.1),0 20px 60px rgba(0,0,0,.4); }
    .card-icon { width:54px; height:54px; border-radius:14px; background:linear-gradient(135deg,rgba(0,240,255,.12),rgba(168,85,247,.08)); border:1px solid rgba(0,240,255,.2); display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin-bottom:1.5rem; }
    .card-tag { font-size:.65rem; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:#00f0ff; margin-bottom:.75rem; font-family:'JetBrains Mono',monospace; }
    .card-title { font-family:'Space Grotesk',sans-serif; font-size:1.25rem; font-weight:700; color:#fff; margin-bottom:.75rem; line-height:1.3; }
    .card-desc { font-size:.9rem; line-height:1.7; color:#607080; }

    /* ── INDUSTRY ── */
    .industry-section { padding:5rem 1.5rem; background:linear-gradient(180deg,#020308 0%,#040816 100%); }
    .industry-inner { max-width:1200px; margin:0 auto; }
    .industry-header { text-align:center; margin-bottom:4rem; }
    .industry-row { display:grid; grid-template-columns:1fr 1fr; gap:3rem; align-items:center; margin-bottom:5rem; padding-bottom:5rem; border-bottom:1px solid rgba(255,255,255,.04); }
    .industry-row:last-child { border-bottom:none; margin-bottom:0; padding-bottom:0; }
    .industry-row.reverse { direction:rtl; }
    .industry-row.reverse > * { direction:ltr; }
    @media(max-width:768px){.industry-row,.industry-row.reverse{grid-template-columns:1fr;direction:ltr;}}
    .industry-visual { position:relative; border-radius:1.5rem; overflow:hidden; background:linear-gradient(135deg,#04101a,#060820); border:1px solid rgba(0,240,255,.1); aspect-ratio:16/10; display:flex; align-items:center; justify-content:center; }
    .industry-visual-inner { position:relative; z-index:2; }

    /* Molecular */
    .mol-container { position:relative; width:120px; height:120px; }
    .mol-ring { position:absolute; inset:0; border-radius:50%; border:1px solid rgba(0,240,255,.15); }
    .mol-atom { position:absolute; border-radius:50%; }
    .mol-atom-core { width:24px; height:24px; top:50%; left:50%; transform:translate(-50%,-50%); background:radial-gradient(circle,#00f0ff,#0055ff); box-shadow:0 0 20px rgba(0,240,255,.6); }
    .mol-atom-a { width:12px; height:12px; top:10%; left:50%; margin-left:-6px; background:rgba(0,240,255,.8); box-shadow:0 0 10px rgba(0,240,255,.5); animation:molOrbit 3s linear infinite; }
    .mol-atom-b { width:10px; height:10px; top:50%; right:5%; margin-top:-5px; background:rgba(168,85,247,.9); box-shadow:0 0 10px rgba(168,85,247,.5); animation:molOrbit 4s linear infinite reverse; }
    .mol-atom-c { width:8px; height:8px; bottom:10%; left:30%; background:rgba(0,200,255,.7); animation:molOrbit 2.5s linear infinite; }
    @keyframes molOrbit{from{transform:rotate(0deg) translateX(20px) rotate(0deg)}to{transform:rotate(360deg) translateX(20px) rotate(-360deg)}}

    /* Finance */
    .matrix-visual { display:grid; grid-template-columns:repeat(5,1fr); gap:4px; }
    .matrix-cell { width:16px; height:28px; border-radius:3px; background:rgba(0,240,255,.08); }
    .matrix-cell.up { background:rgba(0,255,120,.4); box-shadow:0 0 6px rgba(0,255,120,.3); }
    .matrix-cell.down { background:rgba(239,68,68,.4); box-shadow:0 0 6px rgba(239,68,68,.3); }

    /* Globe */
    .globe-visual { position:relative; width:100px; height:100px; }
    .globe-ring { position:absolute; border-radius:50%; border:1px solid rgba(0,240,255,.2); }
    .globe-ring-1 { inset:0; animation:spinSlow 12s linear infinite; }
    .globe-ring-2 { inset:12px; border-color:rgba(168,85,247,.2); animation:spinSlow 8s linear infinite reverse; }
    @keyframes spinSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    .globe-dot { position:absolute; width:6px; height:6px; border-radius:50%; background:#00f0ff; box-shadow:0 0 10px rgba(0,240,255,.8); animation:globePulse 2s ease-in-out infinite; }
    @keyframes globePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.5)}}

    .industry-label { font-size:.65rem; font-weight:700; letter-spacing:.25em; text-transform:uppercase; color:#00f0ff; margin-bottom:1rem; }
    .industry-heading { font-family:'Space Grotesk',sans-serif; font-size:1.7rem; font-weight:700; color:#fff; line-height:1.25; margin-bottom:1rem; }
    .industry-body { font-size:.95rem; line-height:1.75; color:#607080; }

    /* ── LABS ── */
    .labs-section { padding:5rem 1.5rem; background:#000; border-top:1px solid rgba(57,255,20,.1); border-bottom:1px solid rgba(57,255,20,.1); }
    .labs-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1.1fr 0.9fr; gap:3rem; align-items:center; }
    @media(max-width:768px){.labs-inner{grid-template-columns:1fr;}}
    .terminal { background:#020502; border:1px solid rgba(57,255,20,.2); border-radius:1rem; overflow:hidden; box-shadow:0 0 40px rgba(57,255,20,.06); }
    .terminal-bar { padding:.75rem 1rem; background:rgba(57,255,20,.05); border-bottom:1px solid rgba(57,255,20,.1); display:flex; align-items:center; gap:.5rem; }
    .terminal-dot { width:10px; height:10px; border-radius:50%; }
    .t-red{background:#ef4444;} .t-yellow{background:#eab308;} .t-green{background:#39ff14;}
    .terminal-title { font-family:'JetBrains Mono',monospace; font-size:.7rem; color:rgba(57,255,20,.5); margin-left:.5rem; }
    .terminal-body { padding:1.5rem; font-family:'JetBrains Mono',monospace; font-size:.78rem; line-height:1.8; color:rgba(57,255,20,.85); min-height:260px; }
    .term-line { display:block; }
    .term-prompt { color:rgba(57,255,20,.4); }
    .term-cmd { color:rgba(57,255,20,.9); }
    .term-output { color:rgba(57,255,20,.55); padding-left:1rem; }
    .term-cursor { display:inline-block; width:8px; height:14px; background:#39ff14; vertical-align:middle; animation:blink 1s step-end infinite; }
    @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
    .labs-mode-tag { display:inline-flex; align-items:center; gap:.5rem; font-size:.65rem; font-weight:700; letter-spacing:.25em; text-transform:uppercase; color:#39ff14; margin-bottom:1.5rem; }
    .labs-mode-dot { width:6px; height:6px; border-radius:50%; background:#39ff14; box-shadow:0 0 8px #39ff14; animation:corePulse 1.5s ease-in-out infinite; }
    .labs-heading { font-family:'Space Grotesk',sans-serif; font-size:2.2rem; font-weight:700; color:#fff; line-height:1.2; margin-bottom:1rem; }
    .labs-body { font-size:.95rem; line-height:1.75; color:#4a6050; margin-bottom:2rem; }
    .btn-laser { display:inline-flex; align-items:center; gap:.5rem; padding:.875rem 2rem; border-radius:9999px; font-weight:700; font-size:.9rem; cursor:pointer; transition:all .3s; background:linear-gradient(135deg,#39ff14,#00cc00); color:#000; border:none; box-shadow:0 0 30px rgba(57,255,20,.35); }
    .btn-laser:hover { transform:translateY(-2px) scale(1.03); box-shadow:0 0 50px rgba(57,255,20,.55); }

    /* ── METRICS ── */
    .metrics-section { padding:6rem 1.5rem; background:linear-gradient(135deg,#040816 0%,#020308 100%); position:relative; overflow:hidden; }
    .metrics-section::before { content:''; position:absolute; inset:0; background-image:linear-gradient(rgba(0,240,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,255,.03) 1px,transparent 1px); background-size:60px 60px; }
    .metrics-inner { position:relative; max-width:1100px; margin:0 auto; text-align:center; }
    .metrics-header { margin-bottom:4rem; }
    .metrics-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; }
    @media(max-width:768px){.metrics-grid{grid-template-columns:1fr;}}
    .metric-card { padding:2.5rem 2rem; border-radius:1.5rem; background:rgba(6,12,30,.8); border:1px solid rgba(255,255,255,.06); backdrop-filter:blur(20px); transition:all .3s; }
    .metric-card:hover { border-color:rgba(0,240,255,.2); box-shadow:0 0 40px rgba(0,240,255,.07); }
    .metric-number { font-family:'Space Grotesk',sans-serif; font-size:clamp(2.5rem,5vw,4rem); font-weight:700; background:linear-gradient(135deg,#00f0ff,#a855f7); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; line-height:1; margin-bottom:1rem; filter:drop-shadow(0 0 20px rgba(0,240,255,.2)); }
    .metric-label { font-size:.9rem; line-height:1.6; color:#506070; }

    /* ── FINAL CTA ── */
    .cta-section { padding:7rem 1.5rem; background:radial-gradient(ellipse 70% 50% at 50% 100%,rgba(0,240,255,.07) 0%,transparent 70%),radial-gradient(ellipse 50% 40% at 20% 50%,rgba(168,85,247,.05) 0%,transparent 70%),#020308; position:relative; overflow:hidden; }
    .cta-inner { position:relative; max-width:680px; margin:0 auto; text-align:center; }
    .cta-heading { font-family:'Space Grotesk',sans-serif; font-size:clamp(2rem,4.5vw,3.5rem); font-weight:700; color:#fff; line-height:1.1; letter-spacing:-.03em; margin-bottom:1.25rem; }
    .cta-grad { background:linear-gradient(135deg,#00f0ff,#a855f7); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
    .cta-sub { font-size:1rem; line-height:1.75; color:#607080; margin-bottom:2.5rem; }
    .cta-input-row { display:flex; align-items:center; background:rgba(8,14,32,.9); border:1px solid rgba(0,240,255,.25); border-radius:9999px; padding:.35rem .35rem .35rem 1.5rem; box-shadow:0 0 40px rgba(0,240,255,.08); gap:.5rem; transition:border-color .3s,box-shadow .3s; }
    .cta-input-row:focus-within { border-color:rgba(0,240,255,.5); box-shadow:0 0 60px rgba(0,240,255,.14); }
    .cta-email { flex:1; background:transparent; border:none; outline:none; font-size:.9rem; color:#f0f4ff; min-width:0; }
    .cta-email::placeholder { color:#3a4a5a; }
    .cta-submit { padding:.75rem 1.5rem; border-radius:9999px; background:linear-gradient(135deg,#00f0ff,#0077ff); color:#020308; font-weight:700; font-size:.85rem; border:none; cursor:pointer; white-space:nowrap; transition:all .3s; box-shadow:0 0 20px rgba(0,240,255,.25); }
    .cta-submit:hover { box-shadow:0 0 35px rgba(0,240,255,.45); transform:scale(1.03); }
    .cta-note { margin-top:1rem; font-size:.75rem; color:#3a4a5a; }

    /* Shared */
    .section-eyebrow { font-size:.7rem; font-weight:700; letter-spacing:.3em; text-transform:uppercase; color:#00f0ff; margin-bottom:1rem; text-shadow:0 0 12px rgba(0,240,255,.4); display:block; }
    .section-heading { font-family:'Space Grotesk',sans-serif; font-size:clamp(1.8rem,3.5vw,3rem); font-weight:700; line-height:1.15; letter-spacing:-.03em; color:#fff; margin-bottom:1rem; }

    /* Reveal animation */
    .reveal { opacity:0; transform:translateY(28px); transition:opacity .7s ease,transform .7s cubic-bezier(.16,1,.3,1); }
    .reveal.visible { opacity:1; transform:translateY(0); }
  `],
  template: `
    <!-- ── HERO ── -->
    <section class="hero">
      <canvas #heroCanvas class="hero-canvas"></canvas>
      <div class="hero-content">
        <p class="hero-eyebrow">The Quantum-AI Nexus</p>
        <h1 class="hero-title">
          Quantum Computing meets<br>
          <span class="grad">Intelligent AI</span>
        </h1>
        <p class="hero-sub">
          Accelerating the future of computation. Where subatomic logic powers
          next-generation machine intelligence.
        </p>
        <div class="hero-ctas">
          <a href="#ecosystem" class="btn-solid"><span>Access Ecosystem</span><span>→</span></a>
          <a href="#labs" class="btn-ghost"><span>Enter Labs</span><span>⌬</span></a>
        </div>
      </div>
    </section>

    <!-- ── SECTION 2: SPLIT ── -->
    <section class="split-section">
      <div class="split-grid">
        <div class="split-card split-card-left reveal">
          <p class="split-label lbl-muted">The Classical Wall</p>
          <h2 class="split-heading">Traditional silicon architectures choke under immense compute demand.</h2>
          <div class="chip-visual">
            <div class="chip-block">
              <div class="chip-grid">
                <div class="chip-cell lit"></div><div class="chip-cell red"></div>
                <div class="chip-cell lit"></div><div class="chip-cell red"></div>
                <div class="chip-cell red"></div><div class="chip-cell lit"></div>
                <div class="chip-cell red"></div><div class="chip-cell lit"></div>
                <div class="chip-cell lit"></div><div class="chip-cell red"></div>
                <div class="chip-cell lit"></div><div class="chip-cell red"></div>
                <div class="chip-cell red"></div><div class="chip-cell lit"></div>
                <div class="chip-cell lit"></div><div class="chip-cell red"></div>
              </div>
            </div>
          </div>
          <div class="overload-bar">
            <div style="display:flex;justify-content:space-between;margin-bottom:.4rem;">
              <span style="font-size:.7rem;color:#475569;font-family:'JetBrains Mono',monospace;">THERMAL LOAD</span>
              <span style="font-size:.7rem;color:#ef4444;font-family:'JetBrains Mono',monospace;">CRITICAL</span>
            </div>
            <div class="overload-bar-track"><div class="overload-bar-fill"></div></div>
          </div>
          <p class="split-body" style="margin-top:1.5rem;">As AI models scale, heat dissipation, memory bandwidth, and power constraints make continued progress increasingly costly and brittle.</p>
        </div>

        <div class="split-card split-card-right reveal">
          <p class="split-label lbl-active">Subatomic Expansion</p>
          <h2 class="split-heading">Multi-dimensional quantum states train AI models in seconds rather than months.</h2>
          <div class="bloch-visual">
            <div class="bloch-sphere">
              <div class="bloch-ring bloch-ring-1"></div>
              <div class="bloch-ring bloch-ring-2"></div>
              <div class="bloch-ring bloch-ring-3"></div>
              <div class="bloch-axis bloch-axis-v"></div>
              <div class="bloch-axis bloch-axis-h"></div>
              <div class="bloch-core"></div>
            </div>
          </div>
          <p class="split-body">We combine quantum-native optimization with intelligent orchestration, so every AI workload lands exactly where it performs best—unlocking capabilities previously considered impossible.</p>
        </div>
      </div>
    </section>

    <!-- ── SECTION 3: CARDS ── -->
    <section class="cards-section" id="ecosystem">
      <div class="cards-header reveal">
        <span class="section-eyebrow">The Architecture Grid</span>
        <h2 class="section-heading">An ecosystem engineered for<br>accelerated intelligence.</h2>
      </div>
      <div class="cards-grid">
        <div class="glass-card reveal">
          <div class="card-icon">🧠</div>
          <p class="card-tag">QNN-core-v2</p>
          <h3 class="card-title">Quantum Neural Networks</h3>
          <p class="card-desc">Designing and deploying machine learning models natively optimized for quantum hardware processors. Runs on trapped-ion and superconducting qubit systems.</p>
        </div>
        <div class="glass-card reveal">
          <div class="card-icon">⚡</div>
          <p class="card-tag">Q-OPT-suite</p>
          <h3 class="card-title">Q-Optimizer Suite</h3>
          <p class="card-desc">Quantum-inspired optimization algorithms running on today's classical cloud frameworks for immediate real-world speedups. No quantum hardware required to start.</p>
        </div>
        <div class="glass-card reveal">
          <div class="card-icon">🔗</div>
          <p class="card-tag">TQ-bridge-SDK</p>
          <h3 class="card-title">Tensor-Quantum Bridge</h3>
          <p class="card-desc">Seamless developer SDKs to integrate quantum processing elements into standard Python pipelines—compatible with PyTorch and TensorFlow out of the box.</p>
        </div>
      </div>
    </section>

    <!-- ── SECTION 4: INDUSTRY ── -->
    <section class="industry-section">
      <div class="industry-inner">
        <div class="industry-header reveal">
          <span class="section-eyebrow">Vertical Horizon</span>
          <h2 class="section-heading">Transforming high-stakes industries<br>through quantum acceleration.</h2>
        </div>

        <div class="industry-row">
          <div class="industry-visual reveal">
            <div class="industry-visual-inner">
              <div class="mol-container">
                <div class="mol-ring"></div>
                <div class="mol-atom mol-atom-core"></div>
                <div class="mol-atom mol-atom-a"></div>
                <div class="mol-atom mol-atom-b"></div>
                <div class="mol-atom mol-atom-c"></div>
              </div>
            </div>
          </div>
          <div class="industry-text reveal">
            <p class="industry-label">Bio-Pharma</p>
            <h3 class="industry-heading">Simulating molecular bonds at an atomic level to discover life-saving therapeutics instantly.</h3>
            <p class="industry-body">Our platform compresses discovery timelines from years to weeks by modeling protein folding interactions, binding kinetics, and therapeutic pathways with unprecedented fidelity.</p>
          </div>
        </div>

        <div class="industry-row reverse">
          <div class="industry-visual reveal">
            <div class="industry-visual-inner">
              <div class="matrix-visual">
                <div class="matrix-cell up"></div><div class="matrix-cell down"></div>
                <div class="matrix-cell up"></div><div class="matrix-cell up"></div>
                <div class="matrix-cell down"></div><div class="matrix-cell down"></div>
                <div class="matrix-cell up"></div><div class="matrix-cell up"></div>
                <div class="matrix-cell down"></div><div class="matrix-cell up"></div>
                <div class="matrix-cell up"></div><div class="matrix-cell down"></div>
                <div class="matrix-cell up"></div><div class="matrix-cell up"></div>
                <div class="matrix-cell up"></div>
              </div>
            </div>
          </div>
          <div class="industry-text reveal">
            <p class="industry-label">Quantitative Finance</p>
            <h3 class="industry-heading">Executing continuous multi-variable portfolio risk assessments ahead of the market.</h3>
            <p class="industry-body">Hybrid classical-quantum workflows power real-time pricing engines, volatility forecasting models, and anomaly detection systems—giving quant desks an unassailable informational edge.</p>
          </div>
        </div>

        <div class="industry-row">
          <div class="industry-visual reveal">
            <div class="industry-visual-inner">
              <div class="globe-visual">
                <div class="globe-ring globe-ring-1"></div>
                <div class="globe-ring globe-ring-2"></div>
                <div class="globe-dot" style="top:20%;left:30%;"></div>
                <div class="globe-dot" style="top:60%;left:65%;animation-delay:.5s;background:#a855f7;box-shadow:0 0 10px rgba(168,85,247,.8);"></div>
                <div class="globe-dot" style="top:40%;left:50%;animation-delay:1s;width:4px;height:4px;"></div>
              </div>
            </div>
          </div>
          <div class="industry-text reveal">
            <p class="industry-label">Next-Gen Logistics</p>
            <h3 class="industry-heading">Solving massive multi-stop routing and fleet orchestrations in real-time.</h3>
            <p class="industry-body">Dynamic multi-variable optimization across live market conditions, weather patterns, and fleet capacity unlocks faster last-mile delivery and significantly lower operating costs at enterprise scale.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SECTION 5: LABS ── -->
    <section class="labs-section" id="labs">
      <div class="labs-inner">
        <div class="reveal">
          <div class="terminal">
            <div class="terminal-bar">
              <span class="terminal-dot t-red"></span>
              <span class="terminal-dot t-yellow"></span>
              <span class="terminal-dot t-green"></span>
              <span class="terminal-title">quantum-gate-array — bash</span>
            </div>
            <div class="terminal-body">
              <span class="term-line"><span class="term-prompt">$ </span><span class="term-cmd">init quantum_gate_array --mode=experimental</span></span>
              <span class="term-line term-output">Loading 127-qubit superconducting backend...</span>
              <span class="term-line term-output">Initializing error-mitigation layers [ZNE + PEC]</span>
              <span class="term-line term-output">Gate fidelity: 99.4% ✓</span>
              <span class="term-line">&nbsp;</span>
              <span class="term-line"><span class="term-prompt">$ </span><span class="term-cmd">run qai_model --algorithm=QAOA --depth=12</span></span>
              <span class="term-line term-output">Compiling variational circuit... 847 gates</span>
              <span class="term-line term-output">Executing on live quantum backend...</span>
              <span class="term-line term-output">Runtime: 11.2ms | Classical equiv: ~4,200 years</span>
              <span class="term-line">&nbsp;</span>
              <span class="term-line"><span class="term-prompt">$ </span><span class="term-cmd">stream telemetry /models/gen-qai/active<span class="term-cursor"></span></span></span>
            </div>
          </div>
        </div>

        <div class="reveal">
          <p class="labs-mode-tag"><span class="labs-mode-dot"></span>Experimental Mode</p>
          <h2 class="labs-heading">Inside the Labs:<br>Experimental R&amp;D</h2>
          <p class="labs-body">A preview of error-mitigated generative quantum AI models currently under wraps. Live quantum backends. Real algorithmic telemetry. No simulation.</p>
          <button class="btn-laser"><span>Launch Sandbox</span><span>→</span></button>
        </div>
      </div>
    </section>

    <!-- ── SECTION 6: METRICS ── -->
    <section class="metrics-section">
      <div class="metrics-inner">
        <div class="metrics-header reveal">
          <span class="section-eyebrow">Quantum Benchmarks</span>
          <h2 class="section-heading">Performance that rewrites the physics of computation.</h2>
        </div>
        <div class="metrics-grid">
          <div class="metric-card reveal">
            <div class="metric-number">$10,000×</div>
            <p class="metric-label">Faster optimization runtimes compared to classical supercomputers on real combinatorial workloads.</p>
          </div>
          <div class="metric-card reveal">
            <div class="metric-number">99.4%</div>
            <p class="metric-label">Predictive accuracy achieved on noisy intermediate-scale quantum devices with active error-mitigation.</p>
          </div>
          <div class="metric-card reveal">
            <div class="metric-number">Hybrid</div>
            <p class="metric-label">Intelligent classical-quantum algorithmic orchestration—deployable on any cloud provider today.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SECTION 7: CTA ── -->
    <section class="cta-section">
      <div class="cta-inner reveal">
        <span class="section-eyebrow">The Convergence Gate</span>
        <h2 class="cta-heading">Ready for the<br><span class="cta-grad">Quantum Leap?</span></h2>
        <p class="cta-sub">The barrier to quantum-accelerated intelligence is officially gone. Secure early developer access to our enterprise API cloud platform.</p>
        <div class="cta-input-row">
          <input class="cta-email" type="email" [(ngModel)]="devEmail" name="devEmail" placeholder="your@organization.com" />
          <button class="cta-submit" (click)="requestToken()">Request Developer Token</button>
        </div>
        <p class="cta-note">No credit card required. Sandbox access granted within 24 hours.</p>
      </div>
    </section>
  `,
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  devEmail = '';
  private animFrameId?: number;
  private particles: Array<{x:number;y:number;vx:number;vy:number;r:number;alpha:number;color:string}> = [];
  private w = 0;
  private h = 0;
  private mouse = { x: -9999, y: -9999 };
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    this.initHeroCanvas();
    this.animateHero();
    this.initReveal();
  }

  ngOnDestroy() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    if (this.observer) this.observer.disconnect();
  }

  @HostListener('window:resize')
  onResize() { this.initHeroCanvas(); }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  requestToken() {
    if (!this.devEmail.trim()) { alert('Please enter your email address.'); return; }
    alert(`✓ Developer token request received for ${this.devEmail}.\nSandbox access will be granted within 24 hours.`);
    this.devEmail = '';
  }

  private initHeroCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.w = canvas.width = window.innerWidth;
    this.h = canvas.height = window.innerHeight;
    this.particles = [];
    const count = Math.floor((this.w * this.h) / 8000);
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.5 + 0.15,
        color: Math.random() > 0.5 ? '0,240,255' : '168,85,247',
      });
    }
  }

  private animateHero = () => {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, this.w, this.h);

    for (const p of this.particles) {
      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120 && dist > 0) {
        p.vx += (dx / dist) * 0.04;
        p.vy += (dy / dist) * 0.04;
      }
      p.vx *= 0.99;
      p.vy *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = this.w;
      if (p.x > this.w) p.x = 0;
      if (p.y < 0) p.y = this.h;
      if (p.y > this.h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();
    }

    // Connection lines
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const a = this.particles[i];
        const b = this.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0,240,255,${(1 - dist / 110) * 0.12})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Central glow
    const cx = this.w / 2;
    const cy = this.h / 2;
    const pulse = Math.sin(Date.now() * 0.0015) * 0.5 + 0.5;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 260 + pulse * 40);
    grad.addColorStop(0, `rgba(0,240,255,${0.06 + pulse * 0.04})`);
    grad.addColorStop(0.5, `rgba(120,0,255,${0.03 + pulse * 0.02})`);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, this.w, this.h);

    this.animFrameId = requestAnimationFrame(this.animateHero);
  };

  private initReveal() {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        }
      },
      { threshold: 0.12 }
    );
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => this.observer!.observe(el));
    }, 100);
  }
}
