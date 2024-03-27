import { Component } from '@angular/core';
import { HeaderLandingPageComponent } from '../header-landing-page/header-landing-page.component';
import { FooterComponent } from '../footer/footer.component';
import { SliderEventComponent } from '../slider-event/slider-event.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page-inicio',
  standalone: true,
  imports: [
    HeaderLandingPageComponent,
    FooterComponent,
    SliderEventComponent,
    FontAwesomeModule,
  ],
  templateUrl: './landing-page-inicio.component.html',
  styleUrl: './landing-page-inicio.component.css',
})
export class LandingPageInicioComponent {}
