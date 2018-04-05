import { Component, Output, EventEmitter } from '@angular/core';
import { Chart} from '../models/chart.model';

@Component({
  selector: 'app-chart-generator',
  templateUrl: './chart-generator.component.html',
  styleUrls: ['./chart-generator.component.css']
})
export class ChartGeneratorComponent {

    @Output() sendChart = new EventEmitter();

    submitForm(name: string, birthDate: string, birthTime: string, birthLoc: string) {
      let newChart: Chart = new Chart(name, birthDate, birthTime, birthLoc, id);
      this.sendChart.emit(newChart);
      console.log(newChart.birthTime)
    }

    constructor() { }


  }
