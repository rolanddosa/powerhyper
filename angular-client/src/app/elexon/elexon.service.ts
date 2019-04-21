import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ElexonService {

  response: string;

  constructor(private http: HttpClient) {
  }

  getPower(): Observable<any>{
    return this.http.get('//localhost:8080/elexon',{responseType: 'json'});
  }
}
