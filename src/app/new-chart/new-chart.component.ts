import { Component, OnInit } from '@angular/core';
import { Chart } from '../models/chart.model';
import { ChartService } from '../chart.service';
var ephemeris = require('ephemeris-moshier');


@Component({
  selector: 'app-new-chart',
  templateUrl: './new-chart.component.html',
  styleUrls: ['./new-chart.component.css'],
  providers: [ChartService]
})
export class NewChartComponent implements OnInit {

  constructor(private chartService: ChartService) { }

  ngOnInit() {

  }

  submitForm(name: string, month: string, day: string, year: string, birthTime: number, birthLoc: string) {

  let birthDate = day+"."+month +"."+ year;
  //the whole project exists here rn figure out how to format Dates and ascribe planetary placements
  let astroCalc = ephemeris.getAllPlanets(birthDate+" 17:09:01", 10.0014, 53.5653, 0);

  let sunDeg = astroCalc.observed.sun.apparentLongitudeDms360
  var newChart: Chart = new Chart(name, birthDate, birthTime, birthLoc, sunDeg);
  this.chartService.addChart(newChart);

  console.log(newChart.sunDeg);
}
}
