import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoshafService {

  private baseUrl = 'http://api.alquran.cloud/v1/surah/';  // L'URL de l'API

  constructor(private http: HttpClient) { }

  // Récupérer la liste des sourates
  getSurahs(): Observable<any> {
    return this.http.get<any>('http://api.alquran.cloud/v1/surah');
  }

  // Récupérer les ayahs d'une sourate
  getAyahs(surahNumber: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${surahNumber}`);
  }
}
