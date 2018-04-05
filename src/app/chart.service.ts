import { Injectable } from '@angular/core';
import { Chart } from './models/chart.model';
import { CHARTS } from './mock-charts';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ChartService {
  charts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.charts = database.list('charts');
  }
  getCharts() {
    return this.charts;
  }

  addChart(newChart: Chart){
    this.charts.push(newChart);
  }

  getChartById(chartId){
    // for (var i = 0; i <= CHARTS.length - 1; i++){
    //   if (CHARTS[i].id === chartId){
    //     return CHARTS[i];
    //   }
    // }
  }

}
