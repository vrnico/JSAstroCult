import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Chart } from '../models/chart.model';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.css']
})
export class ChartListComponent {
  charts: Chart[] = []

  constructor() { }


}
