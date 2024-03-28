import { Component } from '@angular/core';
import { HeaderLandingPageComponent } from '../header-landing-page/header-landing-page.component';
import { FooterComponent } from '../footer/footer.component';
import { SliderEventComponent } from '../slider-event/slider-event.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page-inicio',
  standalone: true,
  imports: [
    HeaderLandingPageComponent,
    FooterComponent,
    SliderEventComponent,
    FontAwesomeModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './landing-page-inicio.component.html',
  styleUrl: './landing-page-inicio.component.css',
})
export class LandingPageInicioComponent {
  isOpen1 = false;
  isOpen2 = false;
  isOpen3 = false;

  toggleAccordion(panel: number) {
    switch (panel) {
      case 1:
        this.isOpen1 = !this.isOpen1;
        break;
      case 2:
        this.isOpen2 = !this.isOpen2;
        break;
      case 3:
        this.isOpen3 = !this.isOpen3;
        break;
      default:
        break;
    }
  }
}
