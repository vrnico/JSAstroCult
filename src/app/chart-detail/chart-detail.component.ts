import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Chart} from '../models/chart.model';
import { ChartService } from '../chart.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
var ephemeris = require('ephemeris-moshier');

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.css'],
  providers: [ChartService]
})

export class ChartDetailComponent implements OnInit {
  chartId: string;
  chartToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private chartService: ChartService
  ) { }

  ngOnInit() {


    this.route.params.forEach((urlParameters) => {
      this.chartId = urlParameters['id'];
  });
  this.chartToDisplay = this.chartService.getChartById(this.chartId);

  let test = ephemeris.getAllPlanets(this.chartToDisplay.birthDate, "17:09:01", 10.0014, 53.5653, 0);
  console.log("RIGHT HERE   "+ test);

}

}
