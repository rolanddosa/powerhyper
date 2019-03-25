import {Component, OnInit} from '@angular/core';
import {Project} from "../project";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../service/project-service.service";

@Component({
  selector: 'economics',
  templateUrl: './economics.component.html',
  styleUrls: ['./economics.component.css']
})
export class Economics implements OnInit {

  project: Project;

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService) {
    this.project = new Project();
  }


  onSubmit() {
    this.projectService.save(this.project).subscribe(result => this.gotoProjectList());
  }

  gotoProjectList() {
    this.router.navigate(['/projects']);
  }

  ngOnInit(){}
}
