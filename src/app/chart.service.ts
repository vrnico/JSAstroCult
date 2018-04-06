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
                                birthLoc: localUpdatedChart.birthLoc,
                                sunDeg: localUpdatedChart.sunDeg,
                                sunSignFormat: localUpdatedChart.sunSignFormat,
                                moonDeg: localUpdatedChart.moonDeg,
                                moonSignFormat: localUpdatedChart.moonSignFormat,
                                mercDeg: localUpdatedChart.mercDeg,
                                mercSignFormat: localUpdatedChart.mercSignFormat,
                                venusDeg: localUpdatedChart.venusDeg,
                                venusSignFormat: localUpdatedChart.venusSignFormat,
                                marsDeg: localUpdatedChart.marsDeg,
                                marsSignFormat: localUpdatedChart.marsSignFormat,
                                jupiterDeg: localUpdatedChart.jupiterDeg,
                                jupiterSignFormat: localUpdatedChart.jupiterSignFormat,
                                saturnDeg: localUpdatedChart.saturnDeg,
                                saturnSignFormat: localUpdatedChart.saturnSignFormat,
                                uranusDeg: localUpdatedChart.uranusDeg,
                                uranusSignFormat: localUpdatedChart.uranusSignFormat,
                                neptuneDeg: localUpdatedChart.neptuneDeg,
                                neptuneSignFormat: localUpdatedChart.neptuneSignFormat,
                                plutoDeg: localUpdatedChart.plutoDeg,
                                plutoSignFormat: localUpdatedChart.plutoSignFormat,
                              });

}

deleteChart(localChartToDelete){
  var chartEntryInFirebase = this.getChartById(localChartToDelete.$key);
  chartEntryInFirebase.remove();
}
}
