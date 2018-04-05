import { Injectable } from '@angular/core';
import { Chart } from './models/chart.model';
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

  getChartById(chartId: string){
    return this.database.object('charts/' + chartId)
  }


  updateChart(localUpdatedChart){
    var chartEntryInFirebase = this.getChartById(localUpdatedChart.$key);
    chartEntryInFirebase.update({name: localUpdatedChart.name,
                                birthDate: localUpdatedChart.birthDate,
                                birthTime: localUpdatedChart.birthTime,
                                birthLoc: localUpdatedChart.birthLoc});

}

deleteChart(localChartToDelete){
  var chartEntryInFirebase = this.getChartById(localChartToDelete.$key);
  chartEntryInFirebase.remove();
}
}
