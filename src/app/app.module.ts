import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { ChartListComponent } from './chart-list/chart-list.component';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NewChartComponent } from './new-chart/new-chart.component';
import { EditChartComponent } from './edit-chart/edit-chart.component';
import { NatalChartComponent } from './natal-chart/natal-chart.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ChartListComponent,
    WelcomeComponent,
    AboutComponent,
    ChartDetailComponent,
    NewChartComponent,
    EditChartComponent,
    NatalChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DateValueAccessorModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
