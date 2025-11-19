import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-editinterventioncommunity',
  templateUrl: './editinterventioncommunity.component.html',
  styleUrls: ['./editinterventioncommunity.component.css']
})
export class EditinterventioncommunityComponent {
  
  interventioncase: any={};
  EditinterventionId:any;
  //DetailsOfIntervention:any[]=Array(12);
  DetailsOfIntervention: any[] = [
    {  natureOfIntervention: '',detail: '',additionalDetails: '',complications: '',additionalComplications: '',outcome: ''},
    {  natureOfIntervention: '',detail: '',additionalDetails: '',complications: '',additionalComplications: '',outcome: ''},
    {  natureOfIntervention: '',detail: '',additionalDetails: '',complications: '',additionalComplications: '',outcome: ''},
    {  natureOfIntervention: '',detail: '',additionalDetails: '',complications: '',additionalComplications: '',outcome: ''},
    {  natureOfIntervention: '',detail: '',additionalDetails: '',complications: '',additionalComplications: '',outcome: ''},
    {  natureOfIntervention: '',detail: '',additionalDetails: '',complications: '',additionalComplications: '',outcome: ''},
    {  natureOfIntervention: '',detail: '',additionalDetails: '',complications: '',additionalComplications: '',outcome: ''},
    {  natureOfIntervention: '',detail: '',additionalDetails: '',complications: '',additionalComplications: '',outcome: ''},
    {  natureOfIntervention: '',detail: '',additionalDetails: '',complications: '',additionalComplications: '',outcome: ''},
    {  natureOfIntervention: '',detail: '',additionalDetails: '',complications: '',additionalComplications: '',outcome: ''},
    {  natureOfIntervention: '',detail: '',additionalDetails: '',complications: '',additionalComplications: '',outcome: ''},
    {  natureOfIntervention: '',detail: '',additionalDetails: '',complications: '',additionalComplications: '',outcome: ''},
{ 
  natureOfIntervention: '',
  detail: '',
  additionalDetails: '',
  complications: '',
  additionalComplications: '',
  outcome: ''
}]

  constructor(private fb: FormBuilder
    ,private cb: FormBuilder ,
    private Srv:HttpService,
    private router:Router,
    private route:ActivatedRoute
  ){
    this.EditinterventionId = this.route.snapshot.params["EditinterventionId"];
      if(this.EditinterventionId) {
        this.getinterventioncommunityById();
      }
 
  }
  getinterventioncommunityById() {
    this.Srv.GetData(`Interventions/getinterventioncommunityById?id=`+this.EditinterventionId).subscribe({
      next: (res: any) => {
        
     this.interventioncase = res.data;

        
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Updateinterventioncommunity() {
    
    this.Srv.PostData(`Interventions/Updateinterventioncommunity`,this.interventioncase).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          //this.userdata = res.data;
          this.router.navigate(["/dastak/allinterventioncommunity"]);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

}
