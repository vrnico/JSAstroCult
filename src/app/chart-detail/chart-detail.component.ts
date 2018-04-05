import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Chart} from '../models/chart.model';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.css'],
  providers: [ChartService]
})
export class ChartDetailComponent implements OnInit {
  chartId: number;
  chartToDisplay: Chart;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private chartService: ChartService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.chartId = parseInt(urlParameters['id']);
  });
  this.chartToDisplay = this.chartService.getChartById(this.chartId);

}
