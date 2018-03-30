import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { ChartGeneratorComponent } from './chart-generator/chart-generator.component';
import { ChartListComponent } from './chart-list/chart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartGeneratorComponent,
    ChartListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
