import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from '../models/chart.model';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.css']
})
export class ChartListComponent {
  @Input() childChartList: Chart[];
  @Output() clickedEdit = new EventEmitter();

  editButtonClicked(chartToEdit: Chart) {
   this.clickedEdit.emit(chartToEdit);
 }

  constructor() { }


}
