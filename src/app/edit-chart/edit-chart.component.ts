import { Component, Input, OnInit } from '@angular/core';
import { Chart } from '../models/chart.model';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-edit-chart',
  templateUrl: './edit-chart.component.html',
  styleUrls: ['./edit-chart.component.css'],
  providers: [ChartService]
})
export class EditChartComponent implements OnInit {
  @Input() selectedChart;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
  }

  beginUpdatingChart(chartToUpdate){
  this.chartService.updateChart(chartToUpdate);
}

}
