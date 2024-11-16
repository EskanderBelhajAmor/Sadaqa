import { Routes } from '@angular/router';
import { SalatComponent } from './salat/salat.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RecitersComponent } from './reciters/reciters.component';
import { SurahsComponent } from './surahs/surahs.component';
export const routes: Routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
{path:'salat' , component: SalatComponent},
{path:'accueil' , component: AccueilComponent},
{path:'reciters' , component: RecitersComponent},
{ path: 'surahs/:reciterId', component: SurahsComponent }



];
