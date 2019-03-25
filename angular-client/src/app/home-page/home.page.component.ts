import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.component.css']
})
export class HomePageComponent {
  title: string;

  constructor() {
    this.title = 'Friend With Earth';
  }
}
