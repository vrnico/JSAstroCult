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

navigate to the JSDocky directory:
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







## License
Copyright 2018

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
