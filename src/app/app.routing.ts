import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { ChartListComponent } from './chart-list/chart-list.component';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';
import { NewChartComponent } from './new-chart/new-chart.component';
import { EditChartComponent } from './edit-chart/edit-chart.component';

const appRoutes: Routes = [
    {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'chart-list',
    component: ChartListComponent
  },
  {
    path: 'charts/:id',
    component: ChartDetailComponent
  },
  {
    path: 'new-chart',
    component: NewChartComponent
  },
  {
    path: 'edit-chart',
    component: EditChartComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
