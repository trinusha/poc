import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSeqInfoService {
  baseUrl = 'assets/mock-data.json';
  constructor(private httpClient: HttpClient) {}

  getFilingsData(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json'
      })
    };
    return this.httpClient.get(this.baseUrl, httpOptions);
  }
}
