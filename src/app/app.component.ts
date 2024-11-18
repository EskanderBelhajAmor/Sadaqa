import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router, Event, NavigationEnd } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sadaka';
  isMenuOpen = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
   
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]); 
      }
    });
  }


  closeMenu() {
    this.isMenuOpen = false;
  }
}
