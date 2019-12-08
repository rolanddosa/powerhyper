import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../project";
import {Observable} from "rxjs";

@Injectable()
export class ProjectService {

  private projectsUrl: string;

  constructor(private http: HttpClient) {
    this.projectsUrl = 'http://localhost:8080/projects/';
  }

  public findAll(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:8080/projects');
  }

  public save(project: Project){
    return this.http.post<Project>(this.projectsUrl, project);
  }
}
