import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuranService } from '../quran.service';

@Component({
  selector: 'app-surahs',
  templateUrl: './surahs.component.html',
  styleUrls: ['./surahs.component.css']
})
export class SurahsComponent implements OnInit {
  reciterId: number | null = null; // Initialisation à null pour éviter l'erreur
  surahs: any = [];

  constructor(
    private quranService: QuranService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
  }

  // Fonction pour lire l'audio d'une sourate
  playAudio(surahId: number, ayahId: number): void {}
   
}
