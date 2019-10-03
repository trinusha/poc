import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSeqInfoService {
  baseUrl = 'http://claeft04:8001/selfservice-ms1.0/srList/findNotes/';
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
