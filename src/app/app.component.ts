import { Component, OnInit } from '@angular/core';
import { Chart } from './models/chart.model'

@Component({
  selector: 'crazy-app-selector2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedChart = null;
  selectedAdd = null;

  masterChartList: Chart[] = [
    new Chart('Nico Daunt', '1991-06-05', '08:26:00', 'Newport Beach CA')
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

  ngOnInit(){
    console.log(this.masterChartList[0]);
  }

}
