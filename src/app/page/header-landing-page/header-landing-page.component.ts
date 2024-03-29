import { Component, ElementRef } from '@angular/core';
import { ButtonToggleDarkLightComponent } from '../button-toggle-dark-light/button-toggle-dark-light.component';

@Component({
  selector: 'app-header-landing-page',
  standalone: true,
  imports: [ButtonToggleDarkLightComponent],
  templateUrl: './header-landing-page.component.html',
  styleUrl: './header-landing-page.component.css',
})
export class HeaderLandingPageComponent {
  inicio() {
    document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
  }
  porqueJava() {
    document
      .getElementById('porqueJava')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  sobre() {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  }
  evento() {
    document.getElementById('evento')?.scrollIntoView({ behavior: 'smooth' });
  }
  contato() {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  }
}
