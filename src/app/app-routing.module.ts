import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcallerComponent } from './addcaller/addcaller.component';
import { GeneralformComponent } from './generalform/generalform.component';
import { AddexternalvisitComponent } from './addexternalvisit/addexternalvisit.component';
import { AddvisitbydastakstaffComponent } from './addvisitbydastakstaff/addvisitbydastakstaff.component';
import { NewadmissionComponent } from './newadmission/newadmission.component';
import { ReportsComponent } from './reports/reports.component';
import { ViewdocumentsComponent } from './entities/viewdocuments/viewdocuments.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardGuard } from './core/guard/dashboard.guard';
import { AuthGuard } from './core/guard/auth.guard';
import { AllnotificationsComponent } from './allnotifications/allnotifications.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent, // Main layout
    canActivate: [DashboardGuard],
    children: [
      { path: '',component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'addcaller', component: AddcallerComponent },
      { path: 'generalform', component: GeneralformComponent },
        { path: 'generalform', component: AddcallerComponent },
      { path: 'addexternalvisit', component: AddexternalvisitComponent },
      { path: 'addvisitbydastakstaff', component: AddvisitbydastakstaffComponent },
      { path: 'newadmission', component: NewadmissionComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'allfiles', component: SearchComponent },
      { path: 'allnotifications', component: AllnotificationsComponent },
      { path: 'entities', loadChildren: () => import('./entities/entities.module').then(m => m.EntitiesModule) },
      { path: 'dastak', loadChildren: () => import('./dastak/dastak.module').then(m => m.DastakModule) }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent, // Auth layout
    canActivate: [AuthGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
