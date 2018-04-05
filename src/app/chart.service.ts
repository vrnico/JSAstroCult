import { Injectable } from '@angular/core';
import { Chart } from './models/chart.model';
import { CHARTS } from './mock-charts';

@Injectable()
export class ChartService {

  constructor() { }

  getCharts() {
    return CHARTS;
  }

  getChartById(chartId: number){
    for (var i = 0; i <= CHARTS.length - 1; i++){
      if (CHARTS[i].id === chartId){
        return CHARTS[i];
      }
    }
  }

}
