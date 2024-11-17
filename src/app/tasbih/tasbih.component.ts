import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tasbih',
  standalone: true,

  imports: [CommonModule, FormsModule],
  templateUrl: './tasbih.component.html',
  styleUrl: './tasbih.component.css'
})
export class TasbihComponent { count: number = 0; increment() { this.count++; } reset() { this.count = 0; }}