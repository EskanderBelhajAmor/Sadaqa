import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalatService {
  private apiUrl = 'https://api.aladhan.com/v1/calendarByCity';

  constructor(private http: HttpClient) {}

  getPrayerTimes(city: string, month: number, year: number): Observable<any> {
    
    const params = new HttpParams()
      .set('city', city)
      .set('country', 'Tunisia')
      .set('month', month.toString())
      .set('year', year.toString())
      .set('method', '18'); 

   
    return this.http.get(this.apiUrl, { params });
  }
}
