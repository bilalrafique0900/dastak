import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files/files.component';
import { EditbasicinformationComponent } from './editbasicinformation/editbasicinformation.component';
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
import { EditchildrenComponent } from './editchildren/editchildren.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { ViewabuserComponent } from './viewabuser/viewabuser.component';
import { UpdatelegalComponent } from './updatelegal/updatelegal.component';
import { EditlegalComponent } from './editlegal/editlegal.component';
import { ViewlegalComponent } from './viewlegal/viewlegal.component';
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
import { ViewdocumentsComponent } from './viewdocuments/viewdocuments.component';

const routes: Routes = [
{ path:'',
  component:FilesComponent
},
{ path:'files',
  component:FilesComponent
},
{ path:'editbasicinformation/:entity',
  component:EditbasicinformationComponent
}
,
{ path:'editadmissioninfo/:entity',
  component:EditadmissioninfoComponent
}
,
{ path:'children/:file/:entity',
  component:ChildrenComponent
}
,
{ path:'addnewchild/:file/:entity',
  component:AddnewchildComponent
}
,
{ path:'detailofabuse/:file/:entity',
  component:DetailofabuseComponent
}
,
{ path:'addabusedetails/:file/:entity',
  component:AddabusedetailsComponent
}
,
{ path:'legaldetail/:file/:entity',
  component:LegaldetailComponent
},
{ path:'legaldetail',
  component:LegaldetailComponent
}
,
{ path:'addlegaldetail/:file/:entity',
  component:AddlegaldetailComponent
}
,
{ path:'interventions/:file/:entity',
  component:InterventionsComponent
},
{ path:'interventions',
  component:InterventionsComponent
}
,
{ path:'addinterventions/:file/:entity',
  component:AddinterventionsComponent
}
,
{ path:'economicprofile/:file/:entity',
  component: EconomicprofileComponent
}
,
{ path:'addeconomicprofile/:file/:entity',
  component: AddeconomicprofileComponent
}
,
{ path:'meetingrecord/:file/:entity',
  component:MeetingrecordComponent
}
,
{ path:'addmeetingdetail/:file/:entity',
  component:AddmeetingdetailComponent
}
,
{ path:'medicalrecord/:file/:entity',
  component:MedicalrecordComponent
},
{ path:'viewmedical/:file/:entity/:caseId',
  component:ViewmedicalComponent
},
{ path:'viewmeeting/:entity/:meetingId',
  component:ViewmeetingComponent
}
,
{ path:'addmedical/:file/:entity',
  component:AddmedicalComponent
}
,
{ path:'psychologicalrecord/:file/:entity',
  component:PsychologicalrecordComponent
}
,
{ path:'addpsychological/:file/:entity',
  component:AddpsychologicalComponent
}
,
{ path:'documents/:file/:entity',
  component:DocumentsComponent
}
,
{path:'viewdocuments/:entity/:documentiId',
  component:ViewdocumentsComponent
},
{ path:'adddocument/:file/:entity',
  component:AdddocumentComponent
}
,
{ path:'departure/:file/:entity',
  component:DepartureComponent
}
,
{ path:'rightschecklist/:ReferenceNo',
  component:RightschecklistComponent
}
,
{ path:'basicinformation/:file/:entity',
  component:BasicinformationComponent
}
,
{ path:'viewpsy/:file/:entity/:physicaliId',
  component: ViewpsyComponent
}
,
{ path:'viewchildren/:entity/:childentity',
  component: ViewchildrenComponent
}
,
{ path:'editchildren/:file/:entity/:childentity',
  component: EditchildrenComponent
}
,
{ path:'viewabuser/:entity/:id',
  component: ViewabuserComponent
}
,
{ path:'viewlegal/:file/:entity/:caseId',
  component: ViewlegalComponent
}
,
{ path:'editlegal/:file/:entity/:caseId',
  component: EditlegalComponent
}
,
{ path:'updatelegal/:file/:entity/:caseId',
  component: UpdatelegalComponent
}
,
{ path:'viewintervention/:entity/:Id',
  component: ViewinterventionComponent
},
{ path:'vieweconomics/:entity/:economiId',
  component: VieweconomicsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule { }
