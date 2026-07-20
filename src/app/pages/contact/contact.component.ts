import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styles: [`
    :host {
      display: block;
      background: #020308;
      color: #f0f4ff;
      font-family: 'Inter', -apple-system, sans-serif;
      overflow-x: hidden;
    }

    /* ── HERO ── */
    .hero {
      position: relative;
      min-height: 55vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0, 240, 255, 0.05) 0%, transparent 70%), #020308;
      border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    }
    .hero-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      opacity: 0.85;
    }
    .hero-content {
      position: relative;
      z-index: 10;
      text-align: center;
      padding: 0 1.5rem;
      max-width: 900px;
    }
    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: .6rem;
      font-size: .7rem;
      font-weight: 700;
      letter-spacing: .3em;
      text-transform: uppercase;
      color: #00f0ff;
      margin-bottom: 1.5rem;
      text-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
    }
    .hero-eyebrow::before, .hero-eyebrow::after {
      content: '';
      display: block;
      width: 30px;
      height: 1px;
      background: linear-gradient(90deg, transparent, #00f0ff);
    }
    .hero-eyebrow::after {
      background: linear-gradient(90deg, #00f0ff, transparent);
    }
    .hero-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2.2rem, 5vw, 4.5rem);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -.03em;
      color: #fff;
      margin-bottom: 1.5rem;
    }
    .hero-title .grad {
      background: linear-gradient(135deg, #00f0ff 0%, #a855f7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      filter: drop-shadow(0 0 30px rgba(0, 240, 255, 0.3));
    }
    .hero-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: clamp(0.85rem, 1.5vw, 1.05rem);
      color: #8ba3c0;
      max-width: 600px;
      margin: 0 auto;
      letter-spacing: 0.05em;
    }

    /* ── SECTION 2: GLOW BOXES ── */
    .contact-methods {
      padding: 6rem 1.5rem;
      background: linear-gradient(180deg, #020308 0%, #06091a 100%);
      position: relative;
    }
    .methods-grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    @media(max-width: 900px) {
      .methods-grid {
        grid-template-columns: 1fr;
      }
    }
    .glow-box {
      background: rgba(10, 15, 35, 0.4);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 1.25rem;
      padding: 2.5rem 2rem;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .glow-box::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(135deg, rgba(0, 240, 255, 0.08) 0%, rgba(168, 85, 247, 0.04) 100%);
      opacity: 0;
      transition: opacity 0.4s;
      pointer-events: none;
    }
    .glow-box:hover::before {
      opacity: 1;
    }
    .glow-box:hover {
      border-color: rgba(0, 240, 255, 0.25);
      transform: translateY(-6px);
      box-shadow: 0 0 40px rgba(0, 240, 255, 0.12), 0 12px 30px rgba(0, 0, 0, 0.4);
    }
    .glow-cyan:hover {
      border-color: rgba(0, 240, 255, 0.3);
      box-shadow: 0 0 45px rgba(0, 240, 255, 0.15), 0 12px 30px rgba(0, 0, 0, 0.4);
    }
    .glow-indigo:hover {
      border-color: rgba(99, 102, 241, 0.3);
      box-shadow: 0 0 45px rgba(99, 102, 241, 0.15), 0 12px 30px rgba(0, 0, 0, 0.4);
    }
    .glow-violet:hover {
      border-color: rgba(168, 85, 247, 0.3);
      box-shadow: 0 0 45px rgba(168, 85, 247, 0.15), 0 12px 30px rgba(0, 0, 0, 0.4);
    }
    .box-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.75rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 1.25rem;
    }
    .icon-cyan {
      background: rgba(0, 240, 255, 0.08);
      color: #00f0ff;
      border-color: rgba(0, 240, 255, 0.2);
    }
    .icon-indigo {
      background: rgba(99, 102, 241, 0.08);
      color: #818cf8;
      border-color: rgba(99, 102, 241, 0.2);
    }
    .icon-violet {
      background: rgba(168, 85, 247, 0.08);
      color: #c084fc;
      border-color: rgba(168, 85, 247, 0.2);
    }
    .box-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.2rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.75rem;
    }
    .box-desc {
      font-size: 0.9rem;
      line-height: 1.6;
      color: #94a3b8;
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }
    .box-link {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: color 0.2s;
    }
    .link-cyan { color: #00f0ff; }
    .link-cyan:hover { color: #fff; }
    .link-indigo { color: #818cf8; }
    .link-indigo:hover { color: #fff; }
    .link-violet { color: #c084fc; }
    .link-violet:hover { color: #fff; }

    /* ── SECTION 3: FORM ── */
    .form-section {
      padding: 6rem 1.5rem 10rem;
      background: #020308;
      position: relative;
    }
    .form-inner {
      max-width: 680px;
      margin: 0 auto;
    }
    .form-header {
      text-align: center;
      margin-bottom: 3.5rem;
    }
    .form-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2.2rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.75rem;
    }
    .form-desc {
      font-size: 0.95rem;
      color: #64748b;
    }
    
    .glass-form-panel {
      background: rgba(10, 15, 35, 0.4);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 1.5rem;
      padding: 3rem;
      position: relative;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    }
    @media(max-width: 600px) {
      .glass-form-panel {
        padding: 2rem 1.5rem;
      }
    }

    /* Subtle Neural Net Pattern Glow on focus */
    .form-group {
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .form-label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #94a3b8;
      margin-bottom: 0.5rem;
      transition: color 0.3s;
    }
    .form-group:focus-within .form-label {
      color: #00f0ff;
    }
    
    .input-wrapper {
      position: relative;
      border-radius: 0.75rem;
      padding: 1px;
      background: rgba(255, 255, 255, 0.08);
      transition: all 0.4s ease;
    }
    .form-group:focus-within .input-wrapper {
      background: linear-gradient(135deg, #00f0ff, #818cf8, #c084fc);
      box-shadow: 0 0 20px rgba(0, 240, 255, 0.25);
    }

    .form-input {
      width: 100%;
      background: #060913;
      border: none;
      border-radius: 0.7rem;
      padding: 0.85rem 1.25rem;
      font-size: 0.9rem;
      color: #fff;
      outline: none;
      transition: all 0.4s ease;
      box-sizing: border-box;
    }
    .form-input::placeholder {
      color: #3f4e66;
    }
    .form-input:focus {
      /* Neural grid pattern base64 SVG background on focus */
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><path d='M10 10 L30 20 L50 10 L40 40 L20 50 Z' stroke='rgba(0, 240, 255, 0.08)' stroke-width='0.7' fill='none'/><circle cx='10' cy='10' r='1.5' fill='rgba(0, 240, 255, 0.2)'/><circle cx='30' cy='20' r='2' fill='rgba(129, 140, 248, 0.2)'/><circle cx='50' cy='10' r='1.5' fill='rgba(0, 240, 255, 0.2)'/><circle cx='40' cy='40' r='2.5' fill='rgba(0, 240, 255, 0.3)'/><circle cx='20' cy='50' r='1.5' fill='rgba(168, 85, 247, 0.2)'/><line x1='10' y1='10' x2='40' y2='40' stroke='rgba(129, 140, 248, 0.06)' stroke-width='0.5'/></svg>");
      background-size: 60px 60px;
    }

    .form-select {
      appearance: none;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>");
      background-repeat: no-repeat;
      background-position: right 1.25rem center;
      background-size: 1rem;
      padding-right: 3rem;
      cursor: pointer;
    }

    /* ── TRANSMISSION CTAS ── */
    .cta-btn-wrapper {
      position: relative;
      margin-top: 2rem;
    }
    .btn-transmission {
      width: 100%;
      padding: 1.1rem 2rem;
      border-radius: 0.75rem;
      background: linear-gradient(135deg, #00f0ff, #818cf8);
      color: #020308;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.05em;
      border: none;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.3s;
      box-shadow: 0 0 25px rgba(0, 240, 255, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }
    .btn-transmission:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 0 40px rgba(0, 240, 255, 0.45);
    }
    .btn-transmission:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .packet-overlay-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      pointer-events: none;
      display: none;
    }
    .packet-overlay-canvas.active {
      display: block;
    }

    /* ── SUCCESS SCREEN ── */
    .success-overlay {
      position: absolute;
      inset: 0;
      background: #04060f;
      z-index: 30;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
      animation: fadeIn 0.4s ease forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }
    .success-icon-container {
      position: relative;
      width: 80px;
      height: 80px;
      margin-bottom: 2rem;
    }
    .success-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 2px solid #00f0ff;
      animation: ringPulse 2s infinite ease-out;
    }
    @keyframes ringPulse {
      0% { transform: scale(0.8); opacity: 0.5; }
      100% { transform: scale(1.6); opacity: 0; }
    }
    .success-icon {
      position: absolute;
      inset: 10px;
      border-radius: 50%;
      background: rgba(0, 240, 255, 0.1);
      color: #00f0ff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      border: 1px solid rgba(0, 240, 255, 0.3);
    }
    .success-headline {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.8rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.75rem;
    }
    .success-desc {
      font-size: 0.95rem;
      color: #94a3b8;
      max-width: 400px;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    .btn-reset {
      padding: 0.75rem 1.5rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 0.5rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: #94a3b8;
      transition: all 0.3s;
      cursor: pointer;
    }
    .btn-reset:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      border-color: rgba(255, 255, 255, 0.2);
    }

    .error-msg {
      font-size: 0.75rem;
      color: #f87171;
      margin-top: 0.35rem;
    }
  `],
  template: `
    <!-- Section 1: Hero – Initiate Connection -->
    <section class="hero">
      <canvas #heroCanvas class="hero-canvas"></canvas>
      <div class="hero-content">
        <p class="hero-eyebrow">Quantum Ingestion Gate</p>
        <h1 class="hero-title">
          Let’s <span class="grad">Entangle Our Minds</span>.
        </h1>
        <p class="hero-sub">
          Current Status: Awaiting Connection Node...
        </p>
      </div>
    </section>

    <!-- Section 2: Contact Methods & Location Collapse -->
    <section class="contact-methods">
      <div class="methods-grid">
        <!-- Quantum Coordinate -->
        <div class="glow-box glow-cyan">
          <div>
            <div class="box-icon icon-cyan">📍</div>
            <h3 class="box-title">Quantum Coordinate</h3>
            <p class="box-desc">
              QuantsMind HQ<br>
              28, Shikargarh,<br>
              Jodhpur - 342015,<br>
              Rajasthan, India
            </p>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=QuantsMind+HQ,+Plot+28,+Shikargarh,+Jodhpur,+Rajasthan+342015" target="_blank" rel="noopener noreferrer" class="box-link link-cyan">
            <span>[ View on Neural Map ]</span>
            <span>↗</span>
          </a>
        </div>

        <!-- Neural Link -->
        <div class="glow-box glow-indigo">
          <div>
            <div class="box-icon icon-indigo">✉️</div>
            <h3 class="box-title">Neural Link</h3>
            <p class="box-desc">
              Direct telemetry channels to our engineering team for algorithms, modeling, and deep technical inquiries.
            </p>
          </div>
          <a href="mailto:ajitkumar&#64;quantsmind.com" class="box-link link-indigo">
            <span>ajitkumar&#64;quantsmind.com</span>
            <span>↗</span>
          </a>
        </div>

        <!-- Voice Frequency -->
        <div class="glow-box glow-violet">
          <div>
            <div class="box-icon icon-violet">📞</div>
            <h3 class="box-title">Voice Frequency</h3>
            <p class="box-desc">
              Synchronous connection. Directly access our switchboard during active operational windows.
            </p>
          </div>
          <a href="tel:+918956941357" class="box-link link-violet">
            <span>+91 895 694 1357</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Section 3: Send a Packet (Contact Form) -->
    <section class="form-section">
      <div class="form-inner">
        <div class="form-header">
          <h2 class="form-title">Send a Packet</h2>
          <p class="form-desc">Compile your operational payload and launch it into our routing matrix.</p>
        </div>

        <div class="glass-form-panel">
          <!-- Success Overlay Screen -->
          @if (isSuccess()) {
            <div class="success-overlay">
              <div class="success-icon-container">
                <div class="success-ring"></div>
                <div class="success-icon">✓</div>
              </div>
              <h3 class="success-headline">Transmission Confirmed</h3>
              <p class="success-desc">
                Your data packet was successfully routed through our nodes. Our core systems are analyzing your inputs. Expect synchronous response shortly.
              </p>
              <button class="btn-reset" (click)="resetForm()">Compile New Packet</button>
            </div>
          }

          <!-- Contact Form -->
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <!-- Identity Identifier -->
            <div class="form-group">
              <label for="name" class="form-label">Identity Identifier</label>
              <div class="input-wrapper">
                <input 
                  id="name"
                  type="text" 
                  formControlName="name" 
                  class="form-input" 
                  placeholder="Enter Your Name"
                  autocomplete="name"
                >
              </div>
              @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                <span class="error-msg">Identity is required (minimum 2 characters).</span>
              }
            </div>

            <!-- Communication Channel -->
            <div class="form-group">
              <label for="email" class="form-label">Communication Channel</label>
              <div class="input-wrapper">
                <input 
                  id="email"
                  type="email" 
                  formControlName="email" 
                  class="form-input" 
                  placeholder="Enter Your Email"
                  autocomplete="email"
                >
              </div>
              @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                <span class="error-msg">Please specify a valid communication path (email).</span>
              }
            </div>

            <!-- Subject Select -->
            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <div class="input-wrapper">
                <select 
                  id="subject"
                  formControlName="subject" 
                  class="form-input form-select"
                >
                  <option value="" disabled>Select subject matrix...</option>
                  <option value="Quantum Solution">Quantum Solution</option>
                  <option value="AI Partnership">AI Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              @if (contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched) {
                <span class="error-msg">Please select an operations route.</span>
              }
            </div>

            <!-- The Message Textarea -->
            <div class="form-group">
              <label for="message" class="form-label">The Message</label>
              <div class="input-wrapper">
                <textarea 
                  id="message"
                  formControlName="message" 
                  rows="5" 
                  class="form-input" 
                  placeholder="Compile Your Thoughts Here..."
                  style="resize: none;"
                ></textarea>
              </div>
              @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                <span class="error-msg">Payload must be at least 15 characters.</span>
              }
            </div>

            <!-- CTA Button + Animate Canvas -->
            <div class="cta-btn-wrapper">
              <canvas #packetCanvas class="packet-overlay-canvas" [class.active]="isLoading()"></canvas>
              <button 
                type="submit" 
                [disabled]="contactForm.invalid || isLoading()" 
                class="btn-transmission"
              >
                @if (isLoading()) {
                  <span>Transmitting...</span>
                } @else {
                  <span>Initiate Transmission</span>
                  <span>⌬</span>
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('packetCanvas') packetCanvasRef!: ElementRef<HTMLCanvasElement>;

  contactForm: FormGroup;
  isLoading = signal(false);
  isSuccess = signal(false);

  private animFrameId?: number;
  private packetAnimFrameId?: number;
  private w = 0;
  private h = 0;

  // Hero Canvas state
  private gridNodes: Array<{ x: number; y: number; baseSize: number; currentSize: number; pulseSpeed: number; pulseOffset: number; color: string; label: string }> = [];
  private nodePaths: Array<[number, number]> = []; // index couples
  private pathPackets: Array<{ pathIdx: number; progress: number; speed: number; size: number; color: string; forward: boolean }> = [];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  ngAfterViewInit() {
    this.initHeroCanvas();
    this.animateHeroGrid();
  }

  ngOnDestroy() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    if (this.packetAnimFrameId) cancelAnimationFrame(this.packetAnimFrameId);
  }

  @HostListener('window:resize')
  onResize() {
    this.initHeroCanvas();
  }

  private initHeroCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.w = canvas.width = window.innerWidth;
    this.h = canvas.height = canvas.parentElement?.offsetHeight || 500;

    // Define a futuristic simplified map layout
    // Coordinates are normalized percentages [x%, y%] of canvas size
    const nodeDefs = [
      { x: 0.15, y: 0.35, label: 'Node // Seattle' },
      { x: 0.28, y: 0.55, label: 'Node // Austin' },
      { x: 0.25, y: 0.30, label: 'Node // NYC' },
      { x: 0.42, y: 0.40, label: 'Node // London' },
      { x: 0.48, y: 0.55, label: 'Node // Lagos' },
      { x: 0.58, y: 0.35, label: 'Node // Moscow' },
      { x: 0.65, y: 0.65, label: 'Node // Jodhpur (HQ)' },
      { x: 0.72, y: 0.48, label: 'Node // Bengaluru' },
      { x: 0.82, y: 0.32, label: 'Node // Tokyo' },
      { x: 0.88, y: 0.72, label: 'Node // Sydney' }
    ];

    this.gridNodes = nodeDefs.map(def => ({
      x: def.x * this.w,
      y: def.y * this.h,
      baseSize: def.label.includes('HQ') ? 6 : 3,
      currentSize: def.label.includes('HQ') ? 6 : 3,
      pulseSpeed: 0.02 + Math.random() * 0.02,
      pulseOffset: Math.random() * Math.PI * 2,
      color: def.label.includes('HQ') ? '0,240,255' : '99,102,241',
      label: def.label
    }));

    // Connect nodes into a cohesive grid
    this.nodePaths = [
      [0, 1], [0, 2], [1, 2], // North America
      [2, 3], // Atlantic
      [3, 4], [3, 5], [4, 5], // Europe/Africa
      [5, 6], [5, 8], // Eurasia
      [6, 7], // India subnet
      [7, 8], [7, 9], // Asia-Pacific
      [8, 9]
    ];

    // Initialize travelling data packets
    this.pathPackets = [];
    for (let i = 0; i < 8; i++) {
      this.spawnTravellingPacket();
    }
  }

  private spawnTravellingPacket() {
    if (this.nodePaths.length === 0) return;
    const pathIdx = Math.floor(Math.random() * this.nodePaths.length);
    this.pathPackets.push({
      pathIdx,
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.005,
      size: 1.5 + Math.random() * 1.5,
      color: Math.random() > 0.4 ? '#00f0ff' : '#c084fc',
      forward: Math.random() > 0.5
    });
  }

  private animateHeroGrid = () => {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, this.w, this.h);

    const time = Date.now();

    // 1. Draw subtle background lines (Pulsing Grid)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < this.w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.h);
      ctx.stroke();
    }
    for (let y = 0; y < this.h; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.w, y);
      ctx.stroke();
    }

    // 2. Draw Map Paths
    ctx.lineWidth = 1;
    for (const [startIdx, endIdx] of this.nodePaths) {
      const nodeA = this.gridNodes[startIdx];
      const nodeB = this.gridNodes[endIdx];
      if (!nodeA || !nodeB) continue;

      const grad = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
      grad.addColorStop(0, `rgba(${nodeA.color}, 0.15)`);
      grad.addColorStop(1, `rgba(${nodeB.color}, 0.15)`);

      ctx.strokeStyle = grad;
      ctx.beginPath();
      ctx.moveTo(nodeA.x, nodeA.y);
      ctx.lineTo(nodeB.x, nodeB.y);
      ctx.stroke();
    }

    // 3. Update & Draw Travelling Packets
    for (let i = this.pathPackets.length - 1; i >= 0; i--) {
      const p = this.pathPackets[i];
      const [startIdx, endIdx] = this.nodePaths[p.pathIdx];
      const nodeA = this.gridNodes[startIdx];
      const nodeB = this.gridNodes[endIdx];
      if (!nodeA || !nodeB) continue;

      if (p.forward) {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          // reroute to another path from the destination node
          const possiblePaths = this.nodePaths
            .map((path, idx) => ({ path, idx }))
            .filter(item => item.path[0] === endIdx || item.path[1] === endIdx);
          if (possiblePaths.length > 0) {
            const next = possiblePaths[Math.floor(Math.random() * possiblePaths.length)];
            p.pathIdx = next.idx;
            p.forward = next.path[0] === endIdx;
          } else {
            p.forward = false;
          }
        }
      } else {
        p.progress -= p.speed;
        if (p.progress <= 0) {
          p.progress = 1;
          // reroute from the start node
          const possiblePaths = this.nodePaths
            .map((path, idx) => ({ path, idx }))
            .filter(item => item.path[0] === startIdx || item.path[1] === startIdx);
          if (possiblePaths.length > 0) {
            const next = possiblePaths[Math.floor(Math.random() * possiblePaths.length)];
            p.pathIdx = next.idx;
            p.forward = next.path[0] === startIdx;
          } else {
            p.forward = true;
          }
        }
      }

      // Calculate exact coordinates
      const packetX = nodeA.x + (nodeB.x - nodeA.x) * p.progress;
      const packetY = nodeA.y + (nodeB.y - nodeA.y) * p.progress;

      // Draw packet glow
      const packetGrad = ctx.createRadialGradient(packetX, packetY, 0, packetX, packetY, p.size * 3);
      packetGrad.addColorStop(0, p.color);
      packetGrad.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = packetGrad;
      ctx.beginPath();
      ctx.arc(packetX, packetY, p.size * 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(packetX, packetY, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    // 4. Update & Draw Grid Nodes
    for (const node of this.gridNodes) {
      const pulse = Math.sin(time * node.pulseSpeed + node.pulseOffset);
      node.currentSize = node.baseSize + pulse * 1.5;

      // Outer halo
      ctx.fillStyle = `rgba(${node.color}, ${0.1 + (pulse + 1) * 0.1})`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.currentSize * 2.8, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = `rgba(${node.color}, 0.8)`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.currentSize, 0, Math.PI * 2);
      ctx.fill();

      // Label (HQ only, or others very subtle)
      if (node.label.includes('HQ') || node.currentSize > node.baseSize + 1.2) {
        ctx.fillStyle = node.label.includes('HQ') ? '#00f0ff' : '#64748b';
        ctx.font = node.label.includes('HQ') ? 'bold 10px JetBrains Mono' : '9px JetBrains Mono';
        ctx.fillText(node.label, node.x + 12, node.y + 4);
      }
    }

    this.animFrameId = requestAnimationFrame(this.animateHeroGrid);
  };

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.isLoading.set(true);

    // Initialize and run the Canvas Packet Launch Animation
    this.runPacketLaunchAnimation();

    // Mock transmission loading time
    setTimeout(() => {
      this.isLoading.set(false);
      this.isSuccess.set(true);

      // Save payload locally
      const submissions = JSON.parse(localStorage.getItem('quantsmind_inquiries') || '[]');
      submissions.push({
        ...this.contactForm.value,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('quantsmind_inquiries', JSON.stringify(submissions));

      if (this.packetAnimFrameId) {
        cancelAnimationFrame(this.packetAnimFrameId);
        this.packetAnimFrameId = undefined;
      }
    }, 1800);
  }

  private runPacketLaunchAnimation() {
    const canvas = this.packetCanvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width = canvas.parentElement?.offsetWidth || 500;
    const h = canvas.height = canvas.parentElement?.offsetHeight || 80;

    // Simulation parameters: a packet fires from the center and moves upward, exploding into lines and rings
    const packet = {
      x: w / 2,
      y: h - 20,
      targetY: -20,
      speed: 4,
      size: 5,
      trail: [] as Array<{ x: number; y: number; opacity: number }>
    };

    const explosionRings = [] as Array<{ radius: number; maxRadius: number; opacity: number }>;
    const sparks = [] as Array<{ x: number; y: number; vx: number; vy: number; life: number; color: string }>;

    const animatePacket = () => {
      ctx.clearRect(0, 0, w, h);

      // 1. Draw Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.02;

        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.life;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0; // Reset alpha

      // 2. Draw Packet Launching
      if (packet.y > packet.targetY) {
        packet.y -= packet.speed;
        packet.trail.push({ x: packet.x, y: packet.y, opacity: 1.0 });

        // Add periodic sparks
        if (Math.random() > 0.4) {
          sparks.push({
            x: packet.x + (Math.random() - 0.5) * 8,
            y: packet.y,
            vx: (Math.random() - 0.5) * 1.5,
            vy: Math.random() * 1.5 + 0.5,
            life: 1.0,
            color: '#00f0ff'
          });
        }
      } else {
        // Trigger a grid splash/explosion at the top
        if (explosionRings.length === 0) {
          for (let i = 0; i < 3; i++) {
            explosionRings.push({
              radius: 0,
              maxRadius: 40 + i * 25,
              opacity: 1.0 - i * 0.25
            });
          }
          // Spawn big spark field
          for (let j = 0; j < 30; j++) {
            const angle = Math.random() * Math.PI * 2;
            const force = 1.5 + Math.random() * 3.5;
            sparks.push({
              x: w / 2,
              y: 0,
              vx: Math.cos(angle) * force,
              vy: Math.abs(Math.sin(angle) * force), // shoot downwards/sideways
              life: 1.0,
              color: Math.random() > 0.5 ? '#00f0ff' : '#818cf8'
            });
          }
        }
      }

      // 3. Draw Trail
      ctx.lineWidth = 3;
      for (let i = packet.trail.length - 1; i >= 0; i--) {
        const t = packet.trail[i];
        t.opacity -= 0.05;
        if (t.opacity <= 0) {
          packet.trail.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(0, 240, 255, ${t.opacity})`;
        ctx.beginPath();
        if (i > 0) {
          ctx.moveTo(packet.trail[i - 1].x, packet.trail[i - 1].y);
          ctx.lineTo(t.x, t.y);
          ctx.stroke();
        }
      }

      // 4. Draw Packet Node
      if (packet.y > packet.targetY) {
        const grad = ctx.createRadialGradient(packet.x, packet.y, 0, packet.x, packet.y, packet.size * 4);
        grad.addColorStop(0, '#00f0ff');
        grad.addColorStop(0.5, 'rgba(129, 140, 248, 0.4)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, packet.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, packet.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Draw Explosion Rings
      for (let i = explosionRings.length - 1; i >= 0; i--) {
        const r = explosionRings[i];
        r.radius += 2.5;
        r.opacity -= 0.025;

        if (r.opacity <= 0) {
          explosionRings.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(168, 85, 247, ${r.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(w / 2, 0, r.radius, 0, Math.PI);
        ctx.stroke();

        ctx.strokeStyle = `rgba(0, 240, 255, ${r.opacity * 0.5})`;
        ctx.beginPath();
        ctx.arc(w / 2, 0, r.radius * 0.7, 0, Math.PI);
        ctx.stroke();
      }

      this.packetAnimFrameId = requestAnimationFrame(animatePacket);
    };

    animatePacket();
  }

  resetForm() {
    this.contactForm.reset({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    this.isSuccess.set(false);
  }
}
