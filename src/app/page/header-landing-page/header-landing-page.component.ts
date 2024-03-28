import { Component } from '@angular/core';
import { ButtonToggleDarkLightComponent } from '../button-toggle-dark-light/button-toggle-dark-light.component';

@Component({
  selector: 'app-header-landing-page',
  standalone: true,
  imports: [ButtonToggleDarkLightComponent],
  templateUrl: './header-landing-page.component.html',
  styleUrl: './header-landing-page.component.css',
})
export class HeaderLandingPageComponent {

}
