import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {Project} from "../project";
import {ElexonService} from "../elexon/elexon.service";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home implements OnInit{

  projects: Project[];
  elexonResponse: string;
  fuel1: string;
  mwmw1: number;
  fuel2: string;
  mwmw2: string;
  fuel3: string;
  mwmw3: string;
  fuel4: string;
  mwmw4: string;
  fuel5: string;
  mwmw5: string;
  fuel6: string;
  mwmw6: string;
  fuel7: string;
  mwmw7: string;
  fuel8: string;
  mwmw8: string;
  fuel9: string;
  mwmw9: string;
  fuel10: string;
  mwmw10: string;
  fuel11: string;
  mwmw11: string;
  fuel12: string;
  mwmw12: string;
  fuel13: string;
  mwmw13: string;
  fuel14: string;
  mwmw14: string;
  fuel15: string;
  mwmw15: string;

  constructor(private elexonService: ElexonService) { }

  LineChart = [];
    ngOnInit() {
      this.elexonService.getPower().subscribe((response) => {
        this.fuel1 = response.elexonResponseBody.responseList.items[0].fuelType;
        this.mwmw1 = response.elexonResponseBody.responseList.items[0].currentMW;
        this.fuel2 = response.elexonResponseBody.responseList.items[1].fuelType;
        this.mwmw2 = response.elexonResponseBody.responseList.items[1].currentMW;
        this.fuel3 = response.elexonResponseBody.responseList.items[2].fuelType;
        this.mwmw3 = response.elexonResponseBody.responseList.items[2].currentMW;
        this.fuel4 = response.elexonResponseBody.responseList.items[3].fuelType;
        this.mwmw4 = response.elexonResponseBody.responseList.items[3].currentMW;
        this.fuel5 = response.elexonResponseBody.responseList.items[4].fuelType;
        this.mwmw5 = response.elexonResponseBody.responseList.items[4].currentMW;
        this.fuel6 = response.elexonResponseBody.responseList.items[5].fuelType;
        this.mwmw6 = response.elexonResponseBody.responseList.items[5].currentMW;
        this.fuel7 = response.elexonResponseBody.responseList.items[6].fuelType;
        this.mwmw7 = response.elexonResponseBody.responseList.items[6].currentMW;
        this.fuel8 = response.elexonResponseBody.responseList.items[7].fuelType;
        this.mwmw8 = response.elexonResponseBody.responseList.items[7].currentMW;
        this.fuel9 = response.elexonResponseBody.responseList.items[8].fuelType;
        this.mwmw9 = response.elexonResponseBody.responseList.items[8].currentMW;
        this.fuel10 = response.elexonResponseBody.responseList.items[9].fuelType;
        this.mwmw10 = response.elexonResponseBody.responseList.items[9].currentMW;
        this.fuel11 = response.elexonResponseBody.responseList.items[10].fuelType;
        this.mwmw11 = response.elexonResponseBody.responseList.items[10].currentMW;
        this.fuel12 = response.elexonResponseBody.responseList.items[11].fuelType;
        this.mwmw12 = response.elexonResponseBody.responseList.items[11].currentMW;
        this.fuel13 = response.elexonResponseBody.responseList.items[12].fuelType;
        this.mwmw13 = response.elexonResponseBody.responseList.items[12].currentMW;
        this.fuel14 = response.elexonResponseBody.responseList.items[13].fuelType;
        this.mwmw14 = response.elexonResponseBody.responseList.items[13].currentMW;
        this.fuel15 = response.elexonResponseBody.responseList.items[14].fuelType;
        this.mwmw15 = response.elexonResponseBody.responseList.items[14].currentMW;

        this.LineChart = new Chart('ukLivePowerGenerationChart', {
          type: 'bar',
          data: {
            labels: [this.fuel1, this.fuel2, this.fuel3, this.fuel4, this.fuel5, this.fuel6, this.fuel7, this.fuel8,
              this.fuel9, this.fuel10, this.fuel11, this.fuel12, this.fuel13, this.fuel14, this.fuel15],
            datasets: [{
              label: 'Live Power Generation UK',
              data: [this.mwmw1, this.mwmw2, this.mwmw3, this.mwmw4, this.mwmw5, this.mwmw6, this.mwmw7, this.mwmw8,
                this.mwmw9, this.mwmw10, this.mwmw11, this.mwmw12, this.mwmw13, this.mwmw14, this.mwmw15]
            }]
          },
          options: {}
        })
      });


    }
}
