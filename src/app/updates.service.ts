import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatesService {

  constructor(private http: HttpClient) { }

  getUpdates(): Observable<Object> {
    return this.http.get('assets/updates.json');
  }
}
