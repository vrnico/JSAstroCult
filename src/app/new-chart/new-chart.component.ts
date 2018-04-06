import { Component, OnInit } from '@angular/core';
import { Chart } from '../models/chart.model';
import { ChartService } from '../chart.service';
var ephemeris = require('ephemeris-moshier');


@Component({
  selector: 'app-new-chart',
  templateUrl: './new-chart.component.html',
  styleUrls: ['./new-chart.component.css'],
  providers: [ChartService]
})
export class NewChartComponent implements OnInit {

  constructor(private chartService: ChartService) { }

  ngOnInit() {

  }

  submitForm(name: string, month: string, day: string, year: string, birthTime: number, birthLoc: string) {

  let birthDate = day+"."+month +"."+ year;
  //the whole project exists here rn figure out how to format Dates and ascribe planetary placements
  let astroCalc = ephemeris.getAllPlanets(birthDate+" 17:09:01", 10.0014, 53.5653, 0);

  let sunDeg = astroCalc.observed.sun.apparentLongitudeDms30;
  let rawSunDeg = astroCalc.observed.sun.apparentLongitudeDms360;

  let moonDeg =
  astroCalc.observed.moon.apparentLongitudeDms30;
  let rawMoonDeg = astroCalc.observed.moon.apparentLongitudeDms360;

  let degString = astroCalc.observed.sun.apparentLongitudeDd;
  let moonDegString = astroCalc.observed.moon.apparentLongitudeDd;

  let zodSign = [];
    if(degString >= 0 && degString <= 30){
      zodSign.push('Aries');
    } else if(degString >= 30 && degString <= 60){
      zodSign.push('Taurus');
    } else if(degString >= 60 && degString <= 90){
      zodSign.push('Gemini');
    } else if(degString >= 90 && degString <= 120){
      zodSign.push('Cancer');
    } else if(degString >= 120 && degString <= 150){
      zodSign.push('Leo');
    } else if(degString >= 150 && degString <= 180){
      zodSign.push('Virgo');
    } else if(degString >= 180 && degString <= 210){
      zodSign.push('Libra');
    } else if(degString >= 210 && degString <= 240){
      zodSign.push('Scorpio');
    } else if(degString >= 240 && degString <= 270){
      zodSign.push('Sagittarius');
    } else if(degString >= 270 && degString <= 300){
      zodSign.push('Capricorn');
    } else if(degString >= 300 && degString <= 330){
      zodSign.push('Aquarius');
    } else if(degString >= 330 && degString <= 360){
      zodSign.push('Pisces');
    }

  let moonZodSign = [];
    if(moonDegString >= 0 && moonDegString <= 30){
      moonZodSign.push('Aries');
    } else if(moonDegString >= 30 && moonDegString <= 60){
      moonZodSign.push('Taurus');
    } else if(moonDegString >= 60 && moonDegString <= 90){
      moonZodSign.push('Gemini');
    } else if(moonDegString >= 90 && moonDegString <= 120){
      moonZodSign.push('Cancer');
    } else if(moonDegString >= 120 && moonDegString <= 150){
      moonZodSign.push('Leo');
    } else if(moonDegString >= 150 && moonDegString <= 180){
      moonZodSign.push('Virgo');
    } else if(moonDegString >= 180 && moonDegString <= 210){
      moonZodSign.push('Libra');
    } else if(moonDegString >= 210 && moonDegString <= 240){
      moonZodSign.push('Scorpio');
    } else if(moonDegString >= 240 && moonDegString <= 270){
      moonZodSign.push('Sagittarius');
    } else if(moonDegString >= 270 && moonDegString <= 300){
      moonZodSign.push('Capricorn');
    } else if(moonDegString >= 300 && moonDegString <= 330){
      moonZodSign.push('Aquarius');
    } else if(moonDegString >= 330 && moonDegString <= 360){
      moonZodSign.push('Pisces');
    }

    let sunSignFormat = sunDeg + " " + zodSign;
    let moonSignFormat = moonDeg + " " + moonZodSign
    let mercSignFormat = mercDeg + " " + mercZodSign;


  var newChart: Chart = new Chart(name, birthDate, birthTime, birthLoc, sunDeg, sunSignFormat, moonDeg, moonSignFormat);

  this.chartService.addChart(newChart);

}
}
