import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class FweAngularServiceService {

  constructor(private http: Http) { }

  getAll() {
    console.log("ueeeeeh")
    return this.http.get('http://localhost:7002');
  }
}
