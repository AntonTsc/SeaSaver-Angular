import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RescatesService {

  private url: string = "http://192.168.2.10/api/rescates";

  constructor(private http: HttpClient) { }

  getRescates(): Observable<any>{
    return this.http.get(this.url);
  }

  getRescate(id: number): Observable<any>{
    return this.http.get(this.url + "/" + id);
  }
}
