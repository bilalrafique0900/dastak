import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-addmedical',
  templateUrl: './addmedical.component.html',
  styleUrls: ['./addmedical.component.css']
})
export class AddmedicalComponent {
  repost: any={};
  medicaldata: any={};
  IsCurrentlySubstanceAbuser=0;
  file : any;
  entity:any;
  fullName='';
 
    

  constructor(private fb: FormBuilder
    ,private cb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router
     ,private Srv:HttpService) {
    this.file = this.route.snapshot.params["file"];
  this.entity = this.route.snapshot.params["entity"];
this.GetAll(); 
  

  }
  

GetAll() {
  this.Srv.GetData(`Medical/getmedicaladd?file=`+this.file+'&entity='+this.entity).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        
        this.medicaldata = res.data;
       this.fullName=this.medicaldata.title+' '+this.medicaldata.firstName+' '+this.medicaldata.lastName;

      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}
PostAllMedical() {
  this.repost.referenceNo = this.medicaldata.referenceNo;
  this.repost.nameOfResident = this.fullName;
  this.repost.briefOfHistory=JSON.stringify(this.repost.briefOfHistory);
  this.repost.natureOfChronicIllness=JSON.stringify(this.repost.natureOfChronicIllness);
  this.repost.substancesInDrugAbused=JSON.stringify(this.repost.substancesInDrugAbused);
  this.repost.intensityOfAbuse=JSON.stringify(this.repost.intensityOfAbuse);
  this.repost.intensityOfCurrentAbuse=JSON.stringify(this.repost.intensityOfCurrentAbuse);
  
  
  this.Srv.PostData(`Medical/postmedicaladd`,this.repost).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        
        this.repost = res.data;
this.router.navigate(['/entities/medicalrecord',this.file,this.entity]);
      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}
}
