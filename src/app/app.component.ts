import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; // Importer RouterModule et RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet], // Importer RouterModule pour le routage
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sadaka';
}
