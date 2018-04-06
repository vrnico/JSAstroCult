import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ChartService } from '../chart.service';

var ephemeris = require('ephemeris-moshier');

//https://www.npmjs.com/package/ephemeris-moshier


import { Chart } from '../models/chart.model';

@Component({
  selector: 'app-natal-chart',
  templateUrl: './natal-chart.component.html',
  styleUrls: ['./natal-chart.component.css'],
  providers: [ChartService]
})
export class NatalChartComponent implements OnInit {

  constructor(public sun: number, private chartService: ChartService) { }

  ngOnInit() {
    // let test = ephemeris.getAllPlanets("05.06.1991 17:09:01", 10.0014, 53.5653, 0);
    // console.log(test);
  }

}
