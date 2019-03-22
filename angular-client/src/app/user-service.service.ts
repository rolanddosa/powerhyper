import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private targetUrl: string;

  constructor(private http: HttpClient) {
    this.targetUrl = 'http://localhost:7002';
  }

  public findAll() {
    return this.http.get<>(this.targetUrl);
  }

}
