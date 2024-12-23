import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { FilesComponent } from './files/files.component';
import { EditbasicinformationComponent } from './editbasicinformation/editbasicinformation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditadmissioninfoComponent } from './editadmissioninfo/editadmissioninfo.component';
import { ChildrenComponent } from './children/children.component';
import { DetailofabuseComponent } from './detailofabuse/detailofabuse.component';
import { LegaldetailComponent } from './legaldetail/legaldetail.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { EconomicprofileComponent } from './economicprofile/economicprofile.component';
import { MeetingrecordComponent } from './meetingrecord/meetingrecord.component';
import { MedicalrecordComponent } from './medicalrecord/medicalrecord.component';
import { PsychologicalrecordComponent } from './psychologicalrecord/psychologicalrecord.component';
import { DocumentsComponent } from './documents/documents.component';
import { DepartureComponent } from './departure/departure.component';
import { RightschecklistComponent } from './rightschecklist/rightschecklist.component';
import { BasicinformationComponent } from './basicinformation/basicinformation.component';
import { ViewpsyComponent } from './viewpsy/viewpsy.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { EditchildrenComponent } from './editchildren/editchildren.component';
import { ViewabuserComponent } from './viewabuser/viewabuser.component';
import { ViewlegalComponent } from './viewlegal/viewlegal.component';
import { EditlegalComponent } from './editlegal/editlegal.component';
import { UpdatelegalComponent } from './updatelegal/updatelegal.component';
import { ViewinterventionComponent } from './viewintervention/viewintervention.component';
import { VieweconomicsComponent } from './vieweconomics/vieweconomics.component';
import { AddnewchildComponent } from './addnewchild/addnewchild.component';
import { AddabusedetailsComponent } from './addabusedetails/addabusedetails.component';
import { AddlegaldetailComponent } from './addlegaldetail/addlegaldetail.component';
import { AddinterventionsComponent } from './addinterventions/addinterventions.component';
import { AddeconomicprofileComponent } from './addeconomicprofile/addeconomicprofile.component';
import { AddmeetingdetailComponent } from './addmeetingdetail/addmeetingdetail.component';
import { AddmedicalComponent } from './addmedical/addmedical.component';
import { AddpsychologicalComponent } from './addpsychological/addpsychological.component';
import { AdddocumentComponent } from './adddocument/adddocument.component';
import { ViewmedicalComponent } from './viewmedical/viewmedical.component';
import { ViewmeetingComponent } from './viewmeeting/viewmeeting.component';


@NgModule({
  declarations: [
    FilesComponent,
    EditbasicinformationComponent,
    EditadmissioninfoComponent,
    ChildrenComponent,
    DetailofabuseComponent,
    LegaldetailComponent,
    InterventionsComponent,
    EconomicprofileComponent,
    MeetingrecordComponent,
    MedicalrecordComponent,
    PsychologicalrecordComponent,
    DocumentsComponent,
    DepartureComponent,
    RightschecklistComponent,
    BasicinformationComponent,
    ViewpsyComponent,
    ViewchildrenComponent,
    EditchildrenComponent,
    ViewabuserComponent,
    ViewlegalComponent,
    EditlegalComponent,
    UpdatelegalComponent,
    ViewinterventionComponent,
    VieweconomicsComponent,
    AddnewchildComponent,
    AddabusedetailsComponent,
    AddlegaldetailComponent,
    AddinterventionsComponent,
    AddeconomicprofileComponent,
    AddmeetingdetailComponent,
    AddmedicalComponent,
    AddpsychologicalComponent,
    AdddocumentComponent,
    ViewmedicalComponent,
    ViewmeetingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EntitiesRoutingModule
  ]
})
export class EntitiesModule { }
