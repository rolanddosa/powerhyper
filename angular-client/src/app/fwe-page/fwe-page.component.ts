import { Component, OnInit } from '@angular/core';
import {FweAngularServiceService} from '../shared/angular-service/fwe-angular-service.service';

@Component({
  selector: 'app-fwe-page',
  templateUrl: './fwe-page.component.html',
  styleUrls: ['./fwe-page.component.css']
})
export class FwePageComponent implements OnInit {

  constructor(private fweAngularService: FweAngularServiceService) { }

  ngOnInit() {
    this.fweAngularService.getAll();
  }

}
