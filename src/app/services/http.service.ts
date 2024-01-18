import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {environment} from "../../environment/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {}

  public get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}`);
  }

  public post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${path}`, body);
  }

  public delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${path}`);
  }
}
