import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripuServService {

  private urlTrip: string = "http://192.168.2.10/api/tripulantes";
  private urlMed: string = "http://192.168.2.10/api/medicos";

  constructor(private http: HttpClient) { }

  getCapitanes(): Observable<any>{
    return this.http.get(this.urlTrip);
  }

  getMedicos(): Observable<any>{
    return this.http.get(this.urlMed);
  }

  getMedico(id: number): Observable<any>{
    return this.http.get(this.urlMed + "/" + id);
  }
}
