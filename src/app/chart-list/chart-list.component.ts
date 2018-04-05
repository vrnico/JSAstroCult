import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Chart } from '../models/chart.model';
import { Router } from '@angular/router';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.css'],
  providers: [ChartService]
})

export class ChartListComponent implements OnInit {

  charts: Chart[];

  constructor(private router: Router, private chartService: ChartService) { }
  
  ngOnInit(){
    this.charts = this.chartService.getCharts();
  }

goToDetailPage(clickedChart: Chart) {
     this.router.navigate(['charts', clickedChart.id]);
   };



}
