import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSeqInfoService {
  baseUrl = 'http://172.20.212.63:8003/FmwSelfService/GetDetailsFromSR/v1/srList/';
  constructor(private httpClient: HttpClient) {}

  getFilingsData(params): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json'
      })
    };
    return this.httpClient.get(this.baseUrl+params, httpOptions);
  }
}
