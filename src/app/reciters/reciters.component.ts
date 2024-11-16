import { Component, OnInit } from '@angular/core';
import { QuranService } from '../quran.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reciters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reciters.component.html',
  styleUrls: ['./reciters.component.css'],
})
export class RecitersComponent implements OnInit {
  reciters: any[] = [];
  moshafs: any[] = [];
  surahNames: { name: string; url: string }[] = [];
  audioPlayer: HTMLAudioElement | null = null;

  constructor(private quranService: QuranService) {}

  ngOnInit(): void {
    // Initialize audio player
    this.audioPlayer = document.querySelector('#audioPlayer') as HTMLAudioElement;

    // Fetch reciters
    this.quranService.getReciters().subscribe((data: any) => {
      this.reciters = data.reciters;
    });
  }

  loadMoshafs(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const reciterId = selectElement.value;

    this.quranService.getMoshaf(reciterId).subscribe((data: any) => {
      this.moshafs = data.reciters[0]?.moshaf || [];
      this.surahNames = []; // Reset surah names
      if (this.audioPlayer) this.audioPlayer.pause(); // Stop any current playback
    });
  }

  loadSuwar(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const server = selectedOption.getAttribute('data-server');
    const surahList = selectedOption.getAttribute('data-surahlist');

    if (server && surahList) {
      this.quranService.getSuwar().subscribe((data: any) => {
        const allSuwar = data.suwar;

        this.surahNames = surahList.split(',').map((id: string) => {
          const surah = allSuwar.find((s: any) => s.id === parseInt(id, 10));
          return {
            name: surah ? surah.name : `سورة غير معروفة (${id})`,
            url: surah ? `${server}${id.padStart(3, '0')}.mp3` : '',
          };
        });
      });
    }
  }

  playSurah(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedSurahUrl = selectElement.value;

    if (selectedSurahUrl && this.audioPlayer) {
      this.audioPlayer.src = selectedSurahUrl;
      this.audioPlayer.play();
    }
  }
}
