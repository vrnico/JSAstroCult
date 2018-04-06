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

  let moonDeg = astroCalc.observed.moon.apparentLongitudeDms30;
  let mercDeg = astroCalc.observed.mercury.apparentLongitudeDms30;
  let venusDeg = astroCalc.observed.venus.apparentLongitudeDms30;
  let marsDeg = astroCalc.observed.mars.apparentLongitudeDms30;
  let jupiterDeg = astroCalc.observed.jupiter.apparentLongitudeDms30;
  let saturnDeg = astroCalc.observed.saturn.apparentLongitudeDms30;
  let uranusDeg = astroCalc.observed.uranus.apparentLongitudeDms30;
  let neptuneDeg = astroCalc.observed.neptune.apparentLongitudeDms30;
  let plutoDeg = astroCalc.observed.pluto.apparentLongitudeDms30;



  let rawMoonDeg = astroCalc.observed.moon.apparentLongitudeDms360;

  let degString = astroCalc.observed.sun.apparentLongitudeDd;
  let moonDegString = astroCalc.observed.moon.apparentLongitudeDd;
  let mercDegString = astroCalc.observed.mercury.apparentLongitudeDd;
  let venusDegString = astroCalc.observed.venus.apparentLongitudeDd;
  let marsDegString = astroCalc.observed.mars.apparentLongitudeDd;
  let jupiterDegString = astroCalc.observed.jupiter.apparentLongitudeDd;
  let saturnDegString = astroCalc.observed.saturn.apparentLongitudeDd;
  let uranusDegString = astroCalc.observed.uranus.apparentLongitudeDd;
  let neptuneDegString = astroCalc.observed.neptune.apparentLongitudeDd;
  let plutoDegString = astroCalc.observed.pluto.apparentLongitudeDd;

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

    let mercZodSign = [];
      if(mercDegString >= 0 && mercDegString <= 30){
        mercZodSign.push('Aries');
      } else if(mercDegString >= 30 && mercDegString <= 60){
        mercZodSign.push('Taurus');
      } else if(mercDegString >= 60 && mercDegString <= 90){
        mercZodSign.push('Gemini');
      } else if(mercDegString >= 90 && mercDegString <= 120){
        mercZodSign.push('Cancer');
      } else if(mercDegString >= 120 && mercDegString <= 150){
        mercZodSign.push('Leo');
      } else if(mercDegString >= 150 && mercDegString <= 180){
        mercZodSign.push('Virgo');
      } else if(mercDegString >= 180 && mercDegString <= 210){
        mercZodSign.push('Libra');
      } else if(mercDegString >= 210 && mercDegString <= 240){
        mercZodSign.push('Scorpio');
      } else if(mercDegString >= 240 && mercDegString <= 270){
        mercZodSign.push('Sagittarius');
      } else if(mercDegString >= 270 && mercDegString <= 300){
        mercZodSign.push('Capricorn');
      } else if(mercDegString >= 300 && mercDegString <= 330){
        mercZodSign.push('Aquarius');
      } else if(mercDegString >= 330 && mercDegString <= 360){
        mercZodSign.push('Pisces');
      }

      let venusZodSign = [];
        if(venusDegString >= 0 && venusDegString <= 30){
          venusZodSign.push('Aries');
        } else if(venusDegString >= 30 && venusDegString <= 60){
          venusZodSign.push('Taurus');
        } else if(venusDegString >= 60 && venusDegString <= 90){
          venusZodSign.push('Gemini');
        } else if(venusDegString >= 90 && venusDegString <= 120){
          venusZodSign.push('Cancer');
        } else if(venusDegString >= 120 && venusDegString <= 150){
          venusZodSign.push('Leo');
        } else if(venusDegString >= 150 && venusDegString <= 180){
          venusZodSign.push('Virgo');
        } else if(venusDegString >= 180 && venusDegString <= 210){
          venusZodSign.push('Libra');
        } else if(venusDegString >= 210 && venusDegString <= 240){
          venusZodSign.push('Scorpio');
        } else if(venusDegString >= 240 && venusDegString <= 270){
          venusZodSign.push('Sagittarius');
        } else if(venusDegString >= 270 && venusDegString <= 300){
          venusZodSign.push('Capricorn');
        } else if(venusDegString >= 300 && venusDegString <= 330){
          venusZodSign.push('Aquarius');
        } else if(venusDegString >= 330 && venusDegString <= 360){
          venusZodSign.push('Pisces');
        }


        let marsZodSign = [];
          if(marsDegString >= 0 && marsDegString <= 30){
            marsZodSign.push('Aries');
          } else if(marsDegString >= 30 && marsDegString <= 60){
            marsZodSign.push('Taurus');
          } else if(marsDegString >= 60 && marsDegString <= 90){
            marsZodSign.push('Gemini');
          } else if(marsDegString >= 90 && marsDegString <= 120){
            marsZodSign.push('Cancer');
          } else if(marsDegString >= 120 && marsDegString <= 150){
            marsZodSign.push('Leo');
          } else if(marsDegString >= 150 && marsDegString <= 180){
            marsZodSign.push('Virgo');
          } else if(marsDegString >= 180 && marsDegString <= 210){
            marsZodSign.push('Libra');
          } else if(marsDegString >= 210 && marsDegString <= 240){
            marsZodSign.push('Scorpio');
          } else if(marsDegString >= 240 && marsDegString <= 270){
            marsZodSign.push('Sagittarius');
          } else if(marsDegString >= 270 && marsDegString <= 300){
            marsZodSign.push('Capricorn');
          } else if(marsDegString >= 300 && marsDegString <= 330){
            marsZodSign.push('Aquarius');
          } else if(marsDegString >= 330 && marsDegString <= 360){
            marsZodSign.push('Pisces');
          }

      let jupiterZodSign = [];
        if(jupiterDegString >= 0 && jupiterDegString <= 30){
          jupiterZodSign.push('Aries');
        } else if(jupiterDegString >= 30 && jupiterDegString <= 60){
          jupiterZodSign.push('Taurus');
        } else if(jupiterDegString >= 60 && jupiterDegString <= 90){
          jupiterZodSign.push('Gemini');
        } else if(jupiterDegString >= 90 && jupiterDegString <= 120){
          jupiterZodSign.push('Cancer');
        } else if(jupiterDegString >= 120 && jupiterDegString <= 150){
          jupiterZodSign.push('Leo');
        } else if(jupiterDegString >= 150 && jupiterDegString <= 180){
          jupiterZodSign.push('Virgo');
        } else if(jupiterDegString >= 180 && jupiterDegString <= 210){
          jupiterZodSign.push('Libra');
        } else if(jupiterDegString >= 210 && jupiterDegString <= 240){
          jupiterZodSign.push('Scorpio');
        } else if(jupiterDegString >= 240 && jupiterDegString <= 270){
          jupiterZodSign.push('Sagittarius');
        } else if(jupiterDegString >= 270 && jupiterDegString <= 300){
          jupiterZodSign.push('Capricorn');
        } else if(jupiterDegString >= 300 && jupiterDegString <= 330){
          jupiterZodSign.push('Aquarius');
        } else if(jupiterDegString >= 330 && jupiterDegString <= 360){
          jupiterZodSign.push('Pisces');
        }


      let saturnZodSign = [];
        if(saturnDegString >= 0 && saturnDegString <= 30){
          saturnZodSign.push('Aries');
        } else if(saturnDegString >= 30 && saturnDegString <= 60){
          saturnZodSign.push('Taurus');
        } else if(saturnDegString >= 60 && saturnDegString <= 90){
          saturnZodSign.push('Gemini');
        } else if(saturnDegString >= 90 && saturnDegString <= 120){
          saturnZodSign.push('Cancer');
        } else if(saturnDegString >= 120 && saturnDegString <= 150){
          saturnZodSign.push('Leo');
        } else if(saturnDegString >= 150 && saturnDegString <= 180){
          saturnZodSign.push('Virgo');
        } else if(saturnDegString >= 180 && saturnDegString <= 210){
          saturnZodSign.push('Libra');
        } else if(saturnDegString >= 210 && saturnDegString <= 240){
          saturnZodSign.push('Scorpio');
        } else if(saturnDegString >= 240 && saturnDegString <= 270){
          saturnZodSign.push('Sagittarius');
        } else if(saturnDegString >= 270 && saturnDegString <= 300){
          saturnZodSign.push('Capricorn');
        } else if(saturnDegString >= 300 && saturnDegString <= 330){
          saturnZodSign.push('Aquarius');
        } else if(saturnDegString >= 330 && saturnDegString <= 360){
          saturnZodSign.push('Pisces');
        }

      let uranusZodSign = [];
        if(uranusDegString >= 0 && uranusDegString <= 30){
          uranusZodSign.push('Aries');
        } else if(uranusDegString >= 30 && uranusDegString <= 60){
          uranusZodSign.push('Taurus');
        } else if(uranusDegString >= 60 && uranusDegString <= 90){
          uranusZodSign.push('Gemini');
        } else if(uranusDegString >= 90 && uranusDegString <= 120){
          uranusZodSign.push('Cancer');
        } else if(uranusDegString >= 120 && uranusDegString <= 150){
          uranusZodSign.push('Leo');
        } else if(uranusDegString >= 150 && uranusDegString <= 180){
          uranusZodSign.push('Virgo');
        } else if(uranusDegString >= 180 && uranusDegString <= 210){
          uranusZodSign.push('Libra');
        } else if(uranusDegString >= 210 && uranusDegString <= 240){
          uranusZodSign.push('Scorpio');
        } else if(uranusDegString >= 240 && uranusDegString <= 270){
          uranusZodSign.push('Sagittarius');
        } else if(uranusDegString >= 270 && uranusDegString <= 300){
          uranusZodSign.push('Capricorn');
        } else if(uranusDegString >= 300 && uranusDegString <= 330){
          uranusZodSign.push('Aquarius');
        } else if(uranusDegString >= 330 && uranusDegString <= 360){
          uranusZodSign.push('Pisces');
        }

      let neptuneZodSign = [];
        if(neptuneDegString >= 0 && neptuneDegString <= 30){
          neptuneZodSign.push('Aries');
        } else if(neptuneDegString >= 30 && neptuneDegString <= 60){
          neptuneZodSign.push('Taurus');
        } else if(neptuneDegString >= 60 && neptuneDegString <= 90){
          neptuneZodSign.push('Gemini');
        } else if(neptuneDegString >= 90 && neptuneDegString <= 120){
          neptuneZodSign.push('Cancer');
        } else if(neptuneDegString >= 120 && neptuneDegString <= 150){
          neptuneZodSign.push('Leo');
        } else if(neptuneDegString >= 150 && neptuneDegString <= 180){
          neptuneZodSign.push('Virgo');
        } else if(neptuneDegString >= 180 && neptuneDegString <= 210){
          neptuneZodSign.push('Libra');
        } else if(neptuneDegString >= 210 && neptuneDegString <= 240){
          neptuneZodSign.push('Scorpio');
        } else if(neptuneDegString >= 240 && neptuneDegString <= 270){
          neptuneZodSign.push('Sagittarius');
        } else if(neptuneDegString >= 270 && neptuneDegString <= 300){
          neptuneZodSign.push('Capricorn');
        } else if(neptuneDegString >= 300 && neptuneDegString <= 330){
          neptuneZodSign.push('Aquarius');
        } else if(neptuneDegString >= 330 && neptuneDegString <= 360){
          neptuneZodSign.push('Pisces');
        }

      let plutoZodSign = [];
        if(plutoDegString >= 0 && plutoDegString <= 30){
          plutoZodSign.push('Aries');
        } else if(plutoDegString >= 30 && plutoDegString <= 60){
          plutoZodSign.push('Taurus');
        } else if(plutoDegString >= 60 && plutoDegString <= 90){
          plutoZodSign.push('Gemini');
        } else if(plutoDegString >= 90 && plutoDegString <= 120){
          plutoZodSign.push('Cancer');
        } else if(plutoDegString >= 120 && plutoDegString <= 150){
          plutoZodSign.push('Leo');
        } else if(plutoDegString >= 150 && plutoDegString <= 180){
          plutoZodSign.push('Virgo');
        } else if(plutoDegString >= 180 && plutoDegString <= 210){
          plutoZodSign.push('Libra');
        } else if(plutoDegString >= 210 && plutoDegString <= 240){
          plutoZodSign.push('Scorpio');
        } else if(plutoDegString >= 240 && plutoDegString <= 270){
          plutoZodSign.push('Sagittarius');
        } else if(plutoDegString >= 270 && plutoDegString <= 300){
          plutoZodSign.push('Capricorn');
        } else if(plutoDegString >= 300 && plutoDegString <= 330){
          plutoZodSign.push('Aquarius');
        } else if(plutoDegString >= 330 && plutoDegString <= 360){
          plutoZodSign.push('Pisces');
        }






    let sunSignFormat = sunDeg + " " + zodSign;
    let moonSignFormat = moonDeg + " " + moonZodSign;
    let mercSignFormat = mercDeg + " " + mercZodSign;
    let venusSignFormat = venusDeg + " " + venusZodSign;
    let marsSignFormat = marsDeg + " " + marsZodSign;
    let jupiterSignFormat = jupiterDeg + " " + jupiterZodSign;
    let saturnSignFormat = saturnDeg + " " + saturnZodSign;
    let uranusSignFormat = uranusDeg + " " + uranusZodSign;
    let neptuneSignFormat = neptuneDeg + " " + neptuneZodSign;
    let plutoSignFormat = plutoDeg + " " + plutoZodSign;



  var newChart: Chart = new Chart(
    name, birthDate, birthTime, birthLoc,
    sunDeg, sunSignFormat,
    moonDeg, moonSignFormat,
    mercDeg, mercSignFormat,
    venusDeg, venusSignFormat,
    marsDeg, marsSignFormat,
    jupiterDeg, jupiterSignFormat,
    saturnDeg, saturnSignFormat,
    uranusDeg, uranusSignFormat,
    neptuneDeg, neptuneSignFormat,
    plutoDeg, plutoSignFormat);

  this.chartService.addChart(newChart);

}
}
