import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ProductsComponent } from '../../components/products/products.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    ProductsComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  template: `
    <main class="relative">
      <app-hero></app-hero>
      <app-services></app-services>
      <app-products></app-products>
      <app-testimonials></app-testimonials>
      <app-contact></app-contact>
    </main>
  `
})
export class HomeComponent {}
