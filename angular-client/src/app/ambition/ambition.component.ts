import { Component, OnInit } from '@angular/core';
import {Project} from "../project";
import {ProjectService} from "../service/project-service.service";

@Component({
  selector: 'ambition',
  templateUrl: './ambition.component.html',
  styleUrls: ['./ambition.component.css']
})
export class Ambition implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    //BACKEND CALL - TO BE IMPLEMENTED
    // this.projectService.findAll().subscribe(data => {
    //   this.projects = data;
    // })
  }

}
