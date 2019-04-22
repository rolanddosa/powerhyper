import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Api} from "../api/api";

@Injectable({
  providedIn: 'root'
})
export class ElexonService {

  response: string;

  constructor(private http: HttpClient) {
  }

  getPower(): Observable<any>{
    return this.http.get(Api.GET_ELEXON_VALUES,{responseType: 'json'});
  }
}
