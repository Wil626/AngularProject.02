import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PhysicalComponent } from './physical/physical.component';
import { DigitalComponent } from './digital/digital.component';
import { FooterComponent } from './footer/footer.component';
import { ReportsComponent } from './reports/reports.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';

export const routes: Routes = [

{
  path: 'home',
  component: HomeComponent,
  children:[
    {
       path: 'dashboard',
      component:DashboardComponent
    },
    {
      path: 'physical',
      component: PhysicalComponent
    },

    {
      path: 'digital',
      component: DigitalComponent
    },
    {
      path: 'reports',
      component: ReportsComponent
    },
    {
      path: 'recent-activity',
      component: RecentActivityComponent
    }

  ]
},




{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', redirectTo: 'home', pathMatch: 'full' },
{ path: '*', redirectTo: 'home', pathMatch: 'full' },

];
