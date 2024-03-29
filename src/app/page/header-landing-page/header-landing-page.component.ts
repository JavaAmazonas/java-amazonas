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
    if (window.innerWidth < 10) {
      this.removerHidden();
    }
  }
  porqueJava() {
    document
      .getElementById('porqueJava')
      ?.scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth < 1024) {
      this.removerHidden();
    }
  }
  sobre() {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth < 1024) {
      this.removerHidden();
    }
  }
  evento() {
    document.getElementById('evento')?.scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth < 1024) {
      this.removerHidden();
    }
  }
  contato() {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth < 1024) {
      this.removerHidden();
    }
  }

  // Método para remover a classe 'hidden'
  removerHidden() {
    const mobileMenu = document.getElementById('mobile-menu-2');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  }
}
