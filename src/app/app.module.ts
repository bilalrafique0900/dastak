import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddcallerComponent } from './addcaller/addcaller.component';
import { AddexternalvisitComponent } from './addexternalvisit/addexternalvisit.component';
import { AddvisitbydastakstaffComponent } from './addvisitbydastakstaff/addvisitbydastakstaff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewadmissionComponent } from './newadmission/newadmission.component';
import { ReportsComponent } from './reports/reports.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { BelliconComponent } from './bellicon/bellicon.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllnotificationsComponent } from './allnotifications/allnotifications.component';
import { SearchComponent } from './search/search.component'; // Required for Toastr

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
    AddcallerComponent,
    AddexternalvisitComponent,
    AddvisitbydastakstaffComponent,
    NewadmissionComponent,
    ReportsComponent,
    BelliconComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    AllnotificationsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    CanvasJSAngularChartsModule ,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ // ToastrModule added with global configuration
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
