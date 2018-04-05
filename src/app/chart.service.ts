import { Injectable } from '@angular/core';
import { Chart } from './models/chart.model';
import { CHARTS } from './mock-charts';

@Injectable()
export class ChartService {

  constructor() { }

  getCharts() {
    return CHARTS;
  }

}
