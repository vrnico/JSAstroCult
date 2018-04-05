import { Component, OnInit } from '@angular/core';
import { Chart } from '../models/chart.model';
import { ChartService } from '../chart.service';

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

  submitForm(name: string, birthDate: string, birthTime: string, birthLoc: string) {
  var newChart: Chart = new Chart(name, birthDate, birthTime, birthLoc);
  this.chartService.addChart(newChart);

}
}
