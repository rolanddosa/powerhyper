import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crowdfunding',
  templateUrl: './crowdfunding.component.html',
  styleUrls: ['./crowdfunding.component.css']
})
export class Crowdfunding implements OnInit {
//include partnership model, one-off fundraiser, mega-campaign, p2p microlending, p2p business lending and equity crowdfunding
  crowdfundingPlatforms = [
    { name: 'Bettervest'},
    { name: 'Oneplanetcrowd'},
    { name: 'Lendahand'},
    { name: 'Trine'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
