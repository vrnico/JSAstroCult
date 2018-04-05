import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { ChartListComponent } from './chart-list/chart-list.component';

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
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
