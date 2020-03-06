import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RulesserviceService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  fetchActions() {
    return this.http.get<any>(`${this.url}/v1/actions`);
  }
}
