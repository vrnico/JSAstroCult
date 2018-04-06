import { Component, OnInit } from '@angular/core';
var ephemeris = require('ephemeris-moshier');

@Component({
  selector: 'app-natal-chart',
  templateUrl: './natal-chart.component.html',
  styleUrls: ['./natal-chart.component.css']
})
export class NatalChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let test = ephemeris.getAllPlanets("10.08.2015 17:09:01", 10.0014, 53.5653, 0);
    console.log(test);
  }

}
