import { Component, Output, EventEmitter } from '@angular/core';
import { Chart} from '../models/chart.model';

@Component({
  selector: 'app-chart-generator',
  templateUrl: './chart-generator.component.html',
  styleUrls: ['./chart-generator.component.css']
})
export class ChartGeneratorComponent{

  export class NewChartComponent {
    @Output() sendChart = new EventEmitter();

    submitForm(name: string, birthDate: string, birthTime: string, birthLoc: string) {
      let newChart: Chart = new Chart(name, birthDate, parseInt(birthTime), parseInt(birthLoc));
      this.sendChart.emit(newChart);
    }

    constructor() { }


  }
}
