import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DastakRoutingModule } from './dastak-routing.module';

import { AllpendingfilesComponent } from './allpendingfiles/allpendingfiles.component';
import { AllclosedfilesComponent } from './allclosedfiles/allclosedfiles.component';
import { AllexternalvisitsComponent } from './allexternalvisits/allexternalvisits.component';
import { AllcallersComponent } from './allcallers/allcallers.component';
import { GeneralformsComponent } from './generalforms/generalforms.component';
import { AllvisitsbydastakstaffComponent } from './allvisitsbydastakstaff/allvisitsbydastakstaff.component';
import { AllusersComponent } from './allusers/allusers.component';
import { ProceedapplicationComponent } from './proceedapplication/proceedapplication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadmissionComponent } from './readmission/readmission.component';
import { LegaldetailComponent } from './legaldetail/legaldetail.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { FollowupComponent } from './followup/followup.component';
import { BasicinformationComponent } from './basicinformation/basicinformation.component';
import { RightschecklistComponent } from './rightschecklist/rightschecklist.component';
import { ViewComponent } from './view/view.component';
import { ViewcallerComponent } from './viewcaller/viewcaller.component';
import { EditComponent } from './edit/edit.component';
import { AddnewusersComponent } from './addnewusers/addnewusers.component';
import { AddlegaldetailComponent } from './addlegaldetail/addlegaldetail.component';
import { ViewlegalComponent } from './viewlegal/viewlegal.component';
import { EditcommunityconsultationComponent } from './editcommunityconsultation/editcommunityconsultation.component';
import { EditlegalComponent } from './editlegal/editlegal.component';
import { UpdatelegalComponent } from './updatelegal/updatelegal.component';
import { AddinterventionComponent } from './addintervention/addintervention.component';
import { ViewinterventionComponent } from './viewintervention/viewintervention.component';
import { HttpClientModule } from '@angular/common/http';
import { FollowuprecordComponent } from './followuprecord/followuprecord.component';
import { ViewdastakvisitComponent } from './viewdastakvisit/viewdastakvisit.component';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import { RoleComponent } from './role/role.component';
import { CommunityConsultationsComponent } from './communityconsultations/communityconsultations.component';
import { AllCommunityConsultationsComponent } from './allcommunityconsultations/allcommunityconsultations.component';
import { ViewcommunityconsultationComponent } from './viewcommunityconsultation/viewcommunityconsultation.component';
import { AllinterventioncommunityComponent } from './allinterventioncommunity/allinterventioncommunity.component';
import { InterventioncommunityComponent } from './interventioncommunity/interventioncommunity.component';
import { EditinterventioncommunityComponent } from './editinterventioncommunity/editinterventioncommunity.component';

@NgModule({
  declarations: [
    AllpendingfilesComponent,
    AllclosedfilesComponent,
    AllexternalvisitsComponent,
    AllcallersComponent,
    GeneralformsComponent,
    AllvisitsbydastakstaffComponent,
    AllusersComponent,
    ProceedapplicationComponent,
    ReadmissionComponent,
    LegaldetailComponent,
    InterventionsComponent,
    FollowupComponent,
    BasicinformationComponent,
    RightschecklistComponent,
    ViewComponent,
    ViewcallerComponent,
    EditComponent,
    AddnewusersComponent,
    AddlegaldetailComponent,
    ViewlegalComponent,
    EditlegalComponent,
    UpdatelegalComponent,
    AddinterventionComponent,
    ViewinterventionComponent,
    FollowuprecordComponent,
    ViewdastakvisitComponent,
    RolePermissionComponent,
    RoleComponent,
   CommunityConsultationsComponent,
    AllCommunityConsultationsComponent,
     EditcommunityconsultationComponent,
     ViewcommunityconsultationComponent,
     AllinterventioncommunityComponent,
     InterventioncommunityComponent,
     EditinterventioncommunityComponent
  ],
  imports: [
    CommonModule,
     HttpClientModule,
    DastakRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
  ]
})
export class DastakModule { }
