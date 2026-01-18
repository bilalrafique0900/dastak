import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-communityconsultations',
  templateUrl: './communityconsultations.component.html',
  styleUrls: ['./communityconsultations.component.css']
})
export class CommunityConsultationsComponent {
legalcase:any={};
submitted:boolean=false;
  constructor(private router:Router
     ,private Srv:HttpService) 
     {

     }
  PostAll() {
      this.submitted = true
    if (
  !this.legalcase.referenceNo?.trim() || 
  !this.legalcase.name?.trim()||
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
        this.Srv.PostData(`LegalDetail/addCommunityConsultation`,this.legalcase).subscribe({
          next: (res: any) => {
            
            if (res.data) {
              
              this.legalcase = res.data;
      this.router.navigate(['/dastak/allcommunityconsultations']);
            }
          },
          error: (err) => {
           // this.usernameError = err ? err.Message : '';
          },
        });
      }
}
