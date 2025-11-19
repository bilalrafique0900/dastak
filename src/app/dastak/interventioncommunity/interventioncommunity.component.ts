import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-interventioncommunity',
  templateUrl: './interventioncommunity.component.html',
  styleUrls: ['./interventioncommunity.component.css']
})
export class InterventioncommunityComponent {
  
  interventioncase: any={};
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
   
 
  }

  PostIntervention() {
    

    this.interventioncase.detailsOfIntervention=this.DetailsOfIntervention;
    
    this.Srv.PostData(`Interventions/addinterventioncommunity`,this.interventioncase).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.router.navigate(['/dastak/allinterventioncommunity' ]);
          //this.legalcase = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

}
