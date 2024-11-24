import { Component, OnInit } from '@angular/core';
import { MoshafService } from '../moshaf.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-moshaf',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './moshaf.component.html',
  styleUrls: ['./moshaf.component.css']
})
export class MoshafComponent implements OnInit {
  surahs: any[] = [];  // Liste des sourates
  selectedSurah: any = null;  // Sourate sélectionnée
  ayahs: any[] = [];  // Liste des ayahs de la sourate sélectionnée
  bismillah: string | null = null; // Stocke بسم الله الرحمن الرحيم

  constructor(private moshafService: MoshafService) { }

  ngOnInit(): void {
    this.moshafService.getSurahs().subscribe(response => {
      this.surahs = response.data; // Charger les sourates
      console.log('Surahs:', this.surahs); // Vérification des données
    });
  }

  onSurahSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const surahNumber = parseInt(selectElement.value, 10); // Convertir en number
  
    if (!isNaN(surahNumber)) {
      this.moshafService.getAyahs(surahNumber).subscribe(response => {
        this.selectedSurah = response.data;
  
        // Expression régulière pour détecter et supprimer la basmala
        const basmalaRegex = /^بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ\s*/;
  
        // Vérifiez que la première aya contient du texte et appliquez la suppression de la basmala
        if (this.selectedSurah.ayahs[0]?.text) {
          const firstAyah = this.selectedSurah.ayahs[0].text;
  
          // Si la basmala est détectée, supprimez-la
          if (basmalaRegex.test(firstAyah)) {
            this.selectedSurah.ayahs[0].text = firstAyah.replace(basmalaRegex, '').trim();
          }
        }
  
        // Réinitialisation des ayahs avec des numéros corrigés
        this.ayahs = this.selectedSurah.ayahs.map((ayah: any, index: number) => ({
          ...ayah,
          number: index + 1
        }));
  
        console.log('Selected Surah:', this.selectedSurah); // Vérifiez les données
        console.log('Ayahs:', this.ayahs); // Vérifiez les ayahs après traitement
      });
    } else {
      console.error('Le numéro de la sourate est invalide');
    }
  }
  scrollToTop(): void {
    const container = document.getElementById('surahContainer');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  
  
  
  
}
