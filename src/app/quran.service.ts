import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuranService {
  private apiUrl = 'https://mp3quran.net/api/v3';
  private language = 'ar';

  constructor(private http: HttpClient) {}

  getReciters(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reciters?language=${this.language}`);
  }

  getMoshaf(reciterId: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/reciters?language=${this.language}&reciter=${reciterId}`
    );
  }

  getSuwar(): Observable<any> {
    return this.http.get(`${this.apiUrl}/suwar`);
  }
}
