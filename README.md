AstroCult
==========
#### A Javascript Application by Nico Daunt

### Epicodus Week Three Javascript Code Review on Typescript and Angular.

#### Description



## Installation

Open your preferred terminal, and enter the following command to clone source to your local machine:
```sh
git clone https://github.com/vrnico/JSAstroCult.git
```

navigate to the JSAstroCult directory:
```sh
cd JSAstroCult
```

Initialize the configuraton process:
```sh
npm install
```

Initialize angular:
```sh
npm install -g @angular/cli@1.6.5
```

Build the javascript project and import dependencies:
```sh
npm run build
```

Launch the site from the project directory:
```sh
npm run start
```

If you are building this program using Windows add the line below into your package.json under start
```sh
"start": "webpack --mode development && webpack-dev-server --open --mode development",
```

## Specifications

1. #### Takes a users input as a birthdate, time, and location.

| Input      | Output           |
| ------------- |:-------------:|
| 06/05/1991 08:26 Newport Beach, CA    | **06/05/1991 08:26 Newport Beach, CA** |


2. #### Takes a users birth location and returns long/lat and timezone

| Input      | Output           |
| ------------- |:-------------:|
| 06/05/1991 08:26 Newport Beach, CA      | **06/05/1991 08:26 (GMT -7 PDT)(33.6188829 -117.9298493)** |

3. #### References Swiss Ephemeris and natal chart data

| Input      | Output           |
| ------------- |:-------------:|
| 06/05/1991 08:26 Newport Beach, CA    | **Sun in Gemini, Mercury in Pisces, Venus in Cancer, Mars in Leo, Jupiter in Leo.....** |

4. #### Stores User Data, and provides user with sub-communities based off natal chart data

| Input      | Output           |
| ------------- |:-------------:|
| 06/05/1991 08:26 Newport Beach, CA      | **Bob Ross also has Mercury in Pisces, You now have access to Mars in Leo chat** |

5. #### Generates stats based off of placements within the community

| Input      | Output           |
| ------------- |:-------------:|
| 06/05/1991 08:26 Newport Beach, CA      | **You and 40% of your friends have Water Sign Moons** |








## Created With
* HTML
* JavaScript
* CSS
* Angular
* Typescript
###  Tested With
* Karma
* Jasmine


TO TEST ASTRODATA RUN THIS SCRIPT IN INDEX
```js
<script type='text/javascript' src='index.js' charset='utf-8'></script>
<script type='text/javascript' src='common.js' charset='utf-8'></script>
<script type='text/javascript' src='load.js' charset='utf-8'></script>

<script type='text/javascript' src='astronomy/index.js' charset='utf-8'></script>

<script type='text/javascript' src='astronomy/moshier/index.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/constant.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/julian.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/delta.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/epsilon.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/lonlat.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/gplan.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/precess.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/util.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/kepler.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/body.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/sun.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/aberration.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/altaz.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/constellation.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/deflection.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/diurnal.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/fk4fk5.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/light.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/moon.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/nutation.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/planet.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/refraction.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/siderial.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/star.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/transit.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/vearth.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/processor.js' charset='utf-8'></script>

<script type='text/javascript' src='astronomy/moshier/plan404/index.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/plan404/mercury.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/plan404/venus.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/plan404/earth.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/plan404/moonlr.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/plan404/moonlat.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/plan404/mars.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/plan404/jupiter.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/plan404/saturn.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/plan404/uranus.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/plan404/neptune.js' charset='utf-8'></script>
<script type='text/javascript' src='astronomy/moshier/plan404/pluto.js' charset='utf-8'></script>

<script type='text/javascript' src='shortcut.js' charset='utf-8'></script>

<script type='text/javascript' src='ephemeris-0.1.0.js' charset='utf-8'></script>
<script type='text/javascript'>

var date = {year: 1991, month: 06, day: 05, hours: 08, minutes: 26, seconds: 0};

$const.tlong = 17.9298; // longitude
$const.glat = 33.6189; // latitude

$processor.init ();

// sun, mercury, venus, moon, mars, jupiter, saturn, uranus, neptune, pluto, chiron, sirius
var body = $moshier.body.sun;
var testMoon = $moshier.body.moon;
var testMerc = $moshier.body.mercury;
var testVenus = $moshier.body.venus;
var testMars = $moshier.body.mars;
var testJupiter = $moshier.body.jupiter;
var testSaturn = $moshier.body.saturn;
var testUranus = $moshier.body.uranus;
var testNeptune = $moshier.body.neptune;
var testPluto = $moshier.body.pluto;


$processor.calc (date, body);
$processor.calc (date, testMoon);
$processor.calc (date, testMerc);
$processor.calc (date, testVenus);
$processor.calc (date, testMars);
$processor.calc (date, testJupiter);
$processor.calc (date, testSaturn);
$processor.calc (date, testUranus);
$processor.calc (date, testNeptune);
$processor.calc (date, testPluto);


console.log(body.position);
console.log(date.universalDateString);
console.log("Sun: " + body.position.equinoxEclipticLonLat[3].degree);
console.log("Moon: " + testMoon.position.apparentLongitude);
console.log("Mercury: " + testMerc.position.apparentLongitude);
console.log("Venus: " + testVenus.position.apparentLongitude);
console.log("Mars: " + testMars.position.apparentLongitude);
console.log("Jupiter: " + testJupiter.position.apparentLongitude);
console.log("Saturn: " + testSaturn.position.apparentLongitude);
console.log("Uranus: " + testUranus.position.apparentLongitude);
console.log("Neptune: " + testNeptune.position.apparentLongitude);
console.log("Pluto: " + testPluto.position.apparentLongitude);
</script>

```



## License
Copyright 2018

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
