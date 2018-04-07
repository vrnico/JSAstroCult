AstroCult
==========
#### A Javascript Application by Nico Daunt

### Epicodus Week Three Javascript Code Review on Typescript and Angular.

#### Description
AstroCult is an online astrological interpreter for use by anyone with a birthday. The goal of AstroCult is to make accesible an interface to interperet one's natal chart, and to provide an open-source astrological community of for Web 3.0.
***
[VISIT THE LIVE DEMO](https://astrocult-480a2.firebaseapp.com/)
***

## Installation (build your own database!)

First and foremost set up a firebase project @ https://firebase.google.com/


Open your preferred terminal, and enter the following command to clone source to your local machine:
```sh
git clone https://github.com/vrnico/JSAstroCult.git
```

navigate to the JSAstroCult directory:
```sh
cd JSAstroCult
```

create a place to store your api-keys:
```sh
cd src
cd app
touch api-keys.ts
```

Retrieve your api keys located @
```
https://console.firebase.google.com/project/[YOUR PROJECT HERE]/overview
```

```sh
apiKey: "",
authDomain: "",
databaseURL: "",
projectId: "",
storageBucket: "",
messagingSenderId: ""
```

Store and export firebase api-keys in api-keys.ts file with the following codeblock (syntax is important here y'all):
```sh
export var masterFirebaseConfig = {
    apiKey: "FAKESTRING-99999-999_FaKeeSTring",
    authDomain: "astrocult-420b3.firebaseapp.com",
    databaseURL: "https://astrocult-420b3.firebaseio.com",
    storageBucket: "astrocult-420b3.appspot.com",
    messagingSenderId: "10101010101"
  };
```


Install angular globally (if you haven't already):
```sh
npm install -g @angular/cli@1.6.5
```


Build out the angular project and import dependencies:
```sh
ng serve --open
```

## Further Installation (deploy your own database!)

Update node_modules and confirm project isn't throwing errors
```sh
npm install
```
If build is clean set the production version in the root directory
```sh
ng build --env=prod
```
Install the firebase-tools globally if you haven't already
```sh
npm install -g firebase-tools
```
Run the login command
```sh
firebase login
```
Initialize the firebase project
```sh
firebase init
```

Select database and hosting when prompted
```sh
? What Firebase CLI features do you want to setup for this folder?

[X] Database: Deploy Firebase Realtime Database Rules
[X] Hosting: Configure and deploy Firebase Hosting sites
```

When prompted set firebase default root from public to /dist
```sh
?(public) dist
```
set database.rule.json to true in project file
```js
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
deploy to firebase in command line
```sh
firebase deploy
```
open in browser from command line or firebase.com
```sh
firebase open
>Hosting: Deployed site
```

Congratulations you are now the proud owner of a clean new astrology database! You're one heck of a coder!


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



##features
1. Add your natal chart
2. Update existing natal charts dynamically to the database
3. Delete natal charts

### features to come
1. chart comparison
2. organize people by planetary placements
3. astrological subcommunities? forums?






## Created With
* HTML
* JavaScript
* CSS
* Angular
* Typescript
* Firebase
* Swiss ephemeris

## Special thanks to
* GitHub user and fellow astrologer [Mivion](https://github.com/mivion)
* Npmjs user and fellow astrologer [Xerix](https://www.npmjs.com/~xerik)
* The astro/code wizards with [Moshier](http://www.moshier.net/)

## Contact
questions/comments/concerns
* [nico.daunt@gmail.com](mailto:nico.daunt@gmail.com)
* [PERSONAL WEBSITE](nicodaunt.com)




## License
Copyright 2018

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
