import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-addintervention',
  templateUrl: './addintervention.component.html',
  styleUrls: ['./addintervention.component.css']
})
export class AddinterventionComponent {
  legalnotice: any={};
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
  file: any;
  entity: any;
  constructor(private fb: FormBuilder
    ,private cb: FormBuilder ,
    private Srv:HttpService,
    private router:Router,
    private route:ActivatedRoute
  ){
    this.file = this.route.snapshot.params["file"];
    this.entity = this.route.snapshot.params["entity"];
  this.GetAll(); 
  }
  GetAll() {
    this.Srv.GetData(`Interventions/getinterventionadd?file=`+this.file+'&entity='+this.entity).subscribe({
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
  PostIntervention() {
    
    this.interventioncase.referenceNo=this.entity;
    this.interventioncase.fileNo=this.file;
    this.interventioncase.detailsOfIntervention=this.DetailsOfIntervention;
    
    this.Srv.PostData(`Interventions/addintervention`,this.interventioncase).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.router.navigate(['/dastak/interventions' ,this.file,this.entity]);
          //this.legalcase = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

}
