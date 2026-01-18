import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-addlegaldetail',
  templateUrl: './addlegaldetail.component.html',
  styleUrls: ['./addlegaldetail.component.css']
})
export class AddlegaldetailComponent {
  legalnotice: any={};
  legalcase: any={};
  file: any;
  submitted:boolean=false;
  entity: any;
  constructor(private fb: FormBuilder
    ,private cb: FormBuilder ,
      private router:Router,
    private Srv:HttpService,
    private route:ActivatedRoute
  ){
    this.file = this.route.snapshot.params["file"];
    this.entity = this.route.snapshot.params["entity"];
  this.GetAll(); 
  }
  GetAll() {
    this.Srv.GetData(`LegalDetail/getlegal?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.legalnotice = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  PostAll() {
          this.submitted = true
    if (
  
  !this.legalcase.legalAdviceSought?.trim()||
  !this.legalcase.legalAssistanceSought?.trim()||
  // !this.legalcase.legalNoticeSent?.trim()||
  // !this.legalcase.dateWhenLegalNoticeSent?.trim()||
 // !this.legalcase.legalNoticeSentTo?.trim()||
  !this.legalcase.typeOfAssistance?.trim()||
  !this.legalcase.natureOfLegalConcern?.trim()||
 // !this.legalcase.firNo?.trim()||
 // !this.legalcase.caseNo?.trim()||
  !this.legalcase.caseFiledBy?.trim()||
  !this.legalcase.caseFiledAgainst?.trim()||
  !this.legalcase.dateoffiling?.trim()||
  !this.legalcase.isLawyerShelterAssigned?.trim()||
  !this.legalcase.nameOfLawyer?.trim()||
 // !this.legalcase.contactOfLawyer?.trim()||
  !this.legalcase.court?.trim()||
  !this.legalcase.provinceOfCourt?.trim()||
  !this.legalcase.cityOfCourt?.trim()||
  //!this.legalcase.nextDateOfHearing?.trim()||
  !this.legalcase.statusOfCase?.trim()
 // !this.legalcase.remarks?.trim()
  // !this.legalcase.reasonForWithdrawal?.trim()
 // !this.legalcase.outcome?.trim()



  
) {
  alert('Please Fill All Required Fields');
  return;
}
    
    this.legalcase.referenceNo=this.entity;
    this.Srv.PostData(`LegalDetail/addlegal`,this.legalcase).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          //this.legalcase = res.data;
          this.router.navigate(["/dastak/legaldetail",this.file,this.entity]);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }


}
