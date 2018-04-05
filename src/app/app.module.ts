import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { ChartGeneratorComponent } from './chart-generator/chart-generator.component';
import { ChartListComponent } from './chart-list/chart-list.component';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartGeneratorComponent,
    ChartListComponent,
    WelcomeComponent,
    AboutComponent,
    ChartDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DateValueAccessorModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
