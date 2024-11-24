import { Routes } from '@angular/router';
import { SalatComponent } from './salat/salat.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RecitersComponent } from './reciters/reciters.component';
import { SurahsComponent } from './surahs/surahs.component';
import { SonnahComponent } from './sonnah/sonnah.component';
import { TasbihComponent } from './tasbih/tasbih.component';
import { IhdaaComponent } from './ihdaa/ihdaa.component';
import { MoshafComponent } from './moshaf/moshaf.component';
export const routes: Routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
{path:'salat' , component: SalatComponent},
{path:'accueil' , component: AccueilComponent},
{path:'reciters' , component: RecitersComponent},
{ path: 'surahs/:reciterId', component: SurahsComponent },
{path:'sonnah' , component: SonnahComponent},
{path:'tasbih' , component: TasbihComponent},
{path:'ihdaa' , component: IhdaaComponent},
{path:'moshaf' , component: MoshafComponent}



];
