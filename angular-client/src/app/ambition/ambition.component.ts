import { Component, OnInit } from '@angular/core';
import {Project} from "../project";
import {ElexonService} from "../elexon/elexon.service";
import {Observable} from "rxjs";
import {ProjectService} from "../service/project-service.service";

@Component({
  selector: 'ambition',
  templateUrl: './ambition.component.html',
  styleUrls: ['./ambition.component.css']
})
export class Ambition implements OnInit {
  ngOnInit() {}
}


