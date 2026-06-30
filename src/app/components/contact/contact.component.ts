import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="py-24 bg-[#08090d] border-t border-white/5 relative">
      <!-- Glow backgrounds -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div class="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-cyan-500/5 blur-[120px]"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Left Column: Contact details (5 cols) -->
          <div class="lg:col-span-5 space-y-8">
            <div>
              <h2 class="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-3 font-display">Let's Connect</h2>
              <p class="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
                Start your next engineering breakthrough
              </p>
              <p class="text-gray-400 font-light leading-relaxed">
                Whether you want to validate a quantum algorithm concept, scale model workloads, or build a high-performance software system, we are ready to help you move faster.
              </p>
            </div>

            <!-- Communication Blocks -->
            <div class="space-y-6">
              <!-- Tel -->
              <a href="tel:+918956941357" class="flex items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-300 group">
                <div class="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mr-4 transition-transform duration-300 group-hover:scale-110">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.502-5.132-3.811-6.634-6.634l1.293-.97c.362-.271.528-.733.417-1.173L6.763 3.69c-.125-.501-.575-.852-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                </div>
                <div>
                  <span class="text-[10px] font-mono text-gray-500 block uppercase">Call Us</span>
                  <span class="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">+91 (895) 694-1357</span>
                </div>
              </a>

              <!-- Email -->
              <a href="mailto:ajitkumar&#64;quantsmind.com" class="flex items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-300 group">
                <div class="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mr-4 transition-transform duration-300 group-hover:scale-110">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                  </svg>
                </div>
                <div>
                  <span class="text-[10px] font-mono text-gray-500 block uppercase">Email</span>
                  <span class="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">info&#64;quantsmind.com</span>
                </div>
              </a>

              <!-- WhatsApp -->
              <a href="https://wa.me/18005550199?text=Hello%20QuantsMind" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all duration-300 group">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mr-4 transition-transform duration-300 group-hover:scale-110">
                  <!-- Custom WhatsApp icon -->
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.9 5.86L2.6 22.3l4.57-1.3C8.68 21.6 10.29 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.46 0-2.85-.35-4.11-1l-.29-.17-2.73.78.79-2.61-.19-.3A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
                <div>
                  <span class="text-[10px] font-mono text-gray-500 block uppercase">Instant Messaging</span>
                  <span class="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">Chat on WhatsApp</span>
                </div>
              </a>

              <!-- LinkedIn -->
              <a href="https://linkedin.com/company/quantsmind" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-300 group">
                <div class="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mr-4 transition-transform duration-300 group-hover:scale-110">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <span class="text-[10px] font-mono text-gray-500 block uppercase">Professional Network</span>
                  <span class="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">LinkedIn Profile</span>
                </div>
              </a>
            </div>
          </div>

          <!-- Right Column: Interactive Form (7 cols) -->
          <div class="lg:col-span-7">
            <div class="glass-panel border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              
              <!-- Form Success Overlay -->
              @if (isSuccess()) {
                <div class="absolute inset-0 bg-[#08090d]/95 z-20 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                  <div class="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold font-display text-white mb-2">Request Submitted!</h3>
                  <p class="text-sm text-gray-400 max-w-md leading-relaxed mb-6 font-light">
                    Your message is on its way. We’ll reach out to you within one business day to discuss next steps.
                  </p>
                  <button 
                    (click)="resetForm()"
                    class="py-3 px-6 rounded-xl text-xs font-semibold text-white bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              }

              <!-- Actual Form -->
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <!-- Name -->
                  <div>
                    <label for="name" class="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-display">Your Name</label>
                    <input 
                      id="name"
                      type="text" 
                      formControlName="name"
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="e.g. Liam Anderson"
                    >
                    @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                      <span class="text-xs text-red-400 mt-1.5 block">Name is required (min 2 characters).</span>
                    }
                  </div>

                  <!-- Email -->
                  <div>
                    <label for="email" class="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-display">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      formControlName="email"
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="e.g. liam&#64;company.com"
                    >
                    @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                      <span class="text-xs text-red-400 mt-1.5 block">Please supply a valid email.</span>
                    }
                  </div>
                </div>

                <!-- Subject -->
                <div>
                  <label for="subject" class="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-display">Inquiry Subject</label>
                  <select 
                    id="subject"
                    formControlName="subject"
                    class="w-full bg-[#0a0b10] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                  >
                    <option value="" disabled>Select inquiry focus...</option>
                    <option value="quantum">Quantum Algorithms R&D</option>
                    <option value="ai">AI & Neural Solutions</option>
                    <option value="cloud">Cloud Architecture & Scaling</option>
                    <option value="software">Software Engineering Project</option>
                    <option value="other">General Partnership</option>
                  </select>
                  @if (contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched) {
                    <span class="text-xs text-red-400 mt-1.5 block">Please pick a subject category.</span>
                  }
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-display">Detailed Message</label>
                  <textarea 
                    id="message"
                    formControlName="message"
                    rows="5"
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Provide context regarding your technical requirements..."
                  ></textarea>
                  @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                    <span class="text-xs text-red-400 mt-1.5 block">Message must be at least 15 characters.</span>
                  }
                </div>

                <!-- Button -->
                <button 
                  type="submit" 
                  [disabled]="contactForm.invalid || isLoading()"
                  class="w-full py-4 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/35 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 cursor-pointer flex items-center justify-center space-x-2"
                >
                  @if (isLoading()) {
                    <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending request...</span>
                  } @else {
                    <span>Send Request</span>
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  isLoading = signal(false);
  isSuccess = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.isLoading.set(true);

    // Simulate network latency (1.5 seconds)
    setTimeout(() => {
      this.isLoading.set(false);
      this.isSuccess.set(true);

      // Save to localStorage as mock database records!
      const submissions = JSON.parse(localStorage.getItem('quantsmind_inquiries') || '[]');
      submissions.push({
        ...this.contactForm.value,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('quantsmind_inquiries', JSON.stringify(submissions));
    }, 1500);
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
