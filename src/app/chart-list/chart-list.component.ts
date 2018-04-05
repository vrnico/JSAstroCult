import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Chart } from '../models/chart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.css']
})
export class ChartListComponent {

  constructor(private router: Router) { }

  charts: Chart[] = [
    new Chart("Nico Daunt", "06-05-1991",
  "08:26AM", "Newport Beach, CA", 1),
  new Chart("Nikola Tesla", "28-06-1856",
  "00:00AM", "Smiljan, Croatia", 2),
];

goToDetailPage(clickedChart: Chart) {
     this.router.navigate(['charts', clickedChart.id]);
   };



}
