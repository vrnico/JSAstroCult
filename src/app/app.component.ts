import { Component } from '@angular/core';
import { Chart } from './models/chart.model'

@Component({
  selector: 'crazy-app-selector2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedChart = null;

  masterChartList: Chart[] = [
    new Chart('Nico Daunt', '06-05-1991', '08:26:00', '33.6188829 |-117.9298493')
  ];

  addChart(newChart: Chart) {
    this.masterChartList.push(newChart);
  }

  editChart(clickedChart) {
  this.selectedChart = clickedChart;
  }

  finishedEditing() {
  this.selectedChart = null;
  }

}
