import { Component, OnInit } from '@angular/core';
import { SalatService } from '../salat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import moment from 'moment-hijri';  // Correct default import for moment-hijri
import 'moment-timezone';  // Import moment-timezone for time zone support

@Component({
  selector: 'app-salat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './salat.component.html',
  styleUrls: ['./salat.component.css']
})
export class SalatComponent implements OnInit {
  prayerTimes: any;
  todayPrayer: any;
  selectedGovernorate: string = 'Tunis';
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();
  day = new Date().getDate();

  governorates: string[] = [
    'Tunis', 'Sfax', 'Sousse', 'Nabeul', 'Kairouan', 'Bizerte', 'Béja', 'Zaghouan', 'Jendouba', 
    'Kef', 'Mahdia', 'Monastir', 'Tataouine', 'Tozeur', 'Kasserine', 'Gafsa', 'Siliana', 'Gabès', 
    'Medenine', 'Sidi Bouzid', 'La Manouba', 'Ariana', 'Ben Arous', 'Manouba'
  ];

  gregorianDate: string = '';
  hijriDate: string = '';

  constructor(private salatService: SalatService) {}

  ngOnInit() {
    this.getPrayerTimes(this.selectedGovernorate);

    const today = new Date();
    this.gregorianDate = today.toLocaleDateString();  // Date grégorienne
    this.hijriDate = moment(today).format('iD/iM/iYYYY');  // Date Hijri correctement formatée
  }

  getPrayerTimes(governorate: string) {
    this.salatService.getPrayerTimes(governorate, this.month, this.year).subscribe(
      (data) => {
        console.log('Données de l\'API:', data);
        this.prayerTimes = data.data;
        this.filterTodayPrayer();
      },
      (error) => {
        console.error('Erreur lors de la récupération des horaires', error);
      }
    );
  }

  filterTodayPrayer() {
    console.log('Prayers:', this.prayerTimes);

    if (!this.prayerTimes || this.prayerTimes.length === 0) {
      console.error("No prayer times found.");
      return;
    }

    this.todayPrayer = this.prayerTimes.find((item: any) => {
      const dateParts = item.date.gregorian.date.split('-');
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10);
      const year = parseInt(dateParts[2], 10);

      const todayDate = new Date(this.year, this.month - 1, this.day);
      const prayerDate = new Date(year, month - 1, day);

      return todayDate.toDateString() === prayerDate.toDateString();
    });

    console.log('Today\'s prayer:', this.todayPrayer);

    if (this.todayPrayer) {
      this.todayPrayer.timings.Fajr = this.formatPrayerTime(this.todayPrayer.timings.Fajr);
      this.todayPrayer.timings.Dhuhr = this.formatPrayerTime(this.todayPrayer.timings.Dhuhr);
      this.todayPrayer.timings.Asr = this.formatPrayerTime(this.todayPrayer.timings.Asr);
      this.todayPrayer.timings.Maghrib = this.formatPrayerTime(this.todayPrayer.timings.Maghrib);
      this.todayPrayer.timings.Isha = this.formatPrayerTime(this.todayPrayer.timings.Isha);
    }
  }

  formatPrayerTime(time: string): string {
    // Formate l'heure sans CET et utilise le fuseau horaire "Africa/Tunis"
    return moment(time, "HH:mm").tz("Africa/Tunis").format("HH:mm");
  }

  onGovernorateChange() {
    this.getPrayerTimes(this.selectedGovernorate);
  }
}
