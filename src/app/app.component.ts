import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router, Event, NavigationEnd } from '@angular/router'; // Importer Router et NavigationEnd
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common'; // Importer ViewportScroller

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule], // Importer RouterModule et CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sadaka';
  isMenuOpen = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    // Ajouter un comportement pour scroll en haut à chaque changement de page
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]); // Remet la page au haut
      }
    });
  }

  // Méthode pour fermer le menu
  closeMenu() {
    this.isMenuOpen = false;
  }
}
