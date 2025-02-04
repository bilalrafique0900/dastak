import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllpendingfilesComponent } from './allpendingfiles/allpendingfiles.component';
import { AllclosedfilesComponent } from './allclosedfiles/allclosedfiles.component';
import { AllexternalvisitsComponent } from './allexternalvisits/allexternalvisits.component';
import { AllcallersComponent } from './allcallers/allcallers.component';
import { AllvisitsbydastakstaffComponent } from './allvisitsbydastakstaff/allvisitsbydastakstaff.component';
import { AllusersComponent } from './allusers/allusers.component';
import { ProceedapplicationComponent } from './proceedapplication/proceedapplication.component';
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
import { EditlegalComponent } from './editlegal/editlegal.component';
import { UpdatelegalComponent } from './updatelegal/updatelegal.component';
import { AddinterventionComponent } from './addintervention/addintervention.component';
import { ViewinterventionComponent } from './viewintervention/viewintervention.component';
import { FollowuprecordComponent } from './followuprecord/followuprecord.component';
import { ViewdastakvisitComponent } from './viewdastakvisit/viewdastakvisit.component';
import { RolePermissionComponent } from './role-permission/role-permission.component';


const routes: Routes = [
  { path:'',
    component:AllpendingfilesComponent
  },
  { path:'allpendingfiles',
    component:AllpendingfilesComponent
  },
  { path:'allclosedfiles',
    component:AllclosedfilesComponent
  },
  { path:'allexternalvisits',
    component:AllexternalvisitsComponent
  },
  { path:'allcallers',
    component:AllcallersComponent
  },
  { path:'allvisitsbydastakstaff',
    component:AllvisitsbydastakstaffComponent
  },
  { path:'allusers',
    component:AllusersComponent
  },
  { path:'proceedapplication/:file/:entity',
    component:ProceedapplicationComponent
  },
  { path:'readmission/:file/:entity',
    component:ReadmissionComponent
  },
  { path:'legaldetail/:file/:entity',
    component:LegaldetailComponent
  },
  { path:'addlegaldetail/:file/:entity',
    component:AddlegaldetailComponent
  },
  { path:'interventions/:file/:entity',
    component:InterventionsComponent
  },
  { path:'addintervention/:file/:entity',
    component:AddinterventionComponent
  },
  { path:'followup/:file/:entity',
    component:FollowupComponent
  },
  { path:'followuprecord/:file/:entity',
    component:FollowuprecordComponent
  },
  { path:'basicinformation/:file/:entity',
    component:BasicinformationComponent
  },
  { path:'rightschecklist/:ReferenceNo',
    component:RightschecklistComponent
  },
  { path:'view/:Id',
    component:ViewComponent
  },
  { path:'viewdastakvisit/:Id',
    component:ViewdastakvisitComponent
  },
  { path:'viewcaller/:Id',
    component:ViewcallerComponent
  },
  { path:'edit/:Id',
    component:EditComponent
  },
  { path:'addnewusers',
    component:AddnewusersComponent
  },
  { path:'viewlegal/:file/:entity/:caseId',
    component:ViewlegalComponent
  },
  { path:'editlegal/:file/:entity/:caseId',
    component: EditlegalComponent
  },
  { path:'updatelegal/:file/:entity/:caseId',
    component:UpdatelegalComponent
  },
  { path:'viewintervention/:entity/:Id',
    component:ViewinterventionComponent
  },
  { path:'role-permission',
    component:RolePermissionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DastakRoutingModule { }
