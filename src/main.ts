import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';  // Importer la configuration de l'application
import { AppComponent } from './app/app.component';  // Importer le composant principal (autonome)

bootstrapApplication(AppComponent, appConfig)  // Initialiser l'application avec la configuration du routage
  .catch((err) => console.error(err));
