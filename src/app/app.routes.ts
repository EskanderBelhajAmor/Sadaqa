import { Routes } from '@angular/router';
import { SalatComponent } from './salat/salat.component';
import { AccueilComponent } from './accueil/accueil.component';
export const routes: Routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
{path:'salat' , component: SalatComponent},
{path:'accueil' , component: AccueilComponent},



];
