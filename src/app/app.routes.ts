import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import {ProtegidaComponent} from './components/protegida/protegida.component';

import {AuthGuardService} from './services/auth-guard.service';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  {
    path: 'protegida',
    component: ProtegidaComponent,
    canActivate: [ AuthGuardService ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
