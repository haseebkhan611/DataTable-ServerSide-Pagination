import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private http: HttpClient) {}

  getData(page: number, pageLength: number, filter: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    let params = new HttpParams();
    if(page>0) params = params.append('pageNo', page);
    if(pageLength>0) params = params.append('pageSize', pageLength);
    if (filter.length > 4) params = params.append('filterValue', filter);

    return this.http.get(`posts/api/Item`, { params: params });
  }

  getAllData(): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.get(`posts/api/Item`);
  }

}
