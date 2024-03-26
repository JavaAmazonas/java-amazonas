import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageInicioComponent } from './page/landing-page-inicio/landing-page-inicio.component';
import { HeaderLandingPageComponent } from './page/header-landing-page/header-landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LandingPageInicioComponent,HeaderLandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'java-jungle';
}
