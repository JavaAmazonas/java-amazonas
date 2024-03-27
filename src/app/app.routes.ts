import { Routes } from '@angular/router';
import { LandingPageInicioComponent } from './page/landing-page-inicio/landing-page-inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path: '', component: LandingPageInicioComponent},
  {path: '**', component:NotFoundComponent }
];
