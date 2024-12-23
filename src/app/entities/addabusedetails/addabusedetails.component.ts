import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-addabusedetails',
  templateUrl: './addabusedetails.component.html',
  styleUrls: ['./addabusedetails.component.css']
})
export class AddabusedetailsComponent {
  repost: any={};
  abuseddata: any={};
  HasSufferedVerbalAbuse=0;
  HasBeenThreatened=0;

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
  this.Srv.GetData(`Abuser/getabuseradd?file=`+this.file+'&entity='+this.entity).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        
        this.abuseddata = res.data;
       this.fullName=this.abuseddata.title+' '+this.abuseddata.firstName+' '+this.abuseddata.lastName;

      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}
PostAllAbuser() {
  this.repost.referenceNo = this.abuseddata.referenceNo;
  this.repost.nameOfResident = this.fullName;
  this.repost.typeOfAbuse=JSON.stringify(this.repost.typeOfAbuse);
  this.repost.typeOfEconomicAbuse=JSON.stringify(this.repost.typeOfEconomicAbuse);
  this.repost.reasonOfInflictingAbuse=JSON.stringify(this.repost.reasonOfInflictingAbuse);
  this.repost.reasonOfToleratingAbuse=JSON.stringify(this.repost.reasonOfToleratingAbuse);
  this.repost.natureOfPhysicalAbuse=JSON.stringify(this.repost.natureOfPhysicalAbuse);
  this.repost.natureOfBodilyInjury=JSON.stringify(this.repost.natureOfBodilyInjury);
  this.repost.sexualAbuseInflictedBy=JSON.stringify(this.repost.sexualAbuseInflictedBy);
  this.repost.natureOfSexualAbuse=JSON.stringify(this.repost.natureOfSexualAbuse);

  this.repost.typeOfVerbalAbuse=JSON.stringify(this.repost.typeOfVerbalAbuse);
  
  this.repost.natureOfThreats=JSON.stringify(this.repost.natureOfThreats);

  this.Srv.PostData(`Abuser/postabuseradd`,this.repost).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        
        this.repost = res.data;
this.router.navigate(['/entities/detailofabuse',this.file,this.entity]);
      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}
}
