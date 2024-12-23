import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-addpsychological',
  templateUrl: './addpsychological.component.html',
  styleUrls: ['./addpsychological.component.css']
})
export class AddpsychologicalComponent {
  repost: any={};
  adphysical: any={};

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
  this.Srv.GetData(`Economic/geteconomicadd?file=`+this.file+'&entity='+this.entity).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        
        this.adphysical = res.data;
       this.fullName=this.adphysical.parents.title+' '+this.adphysical.parents.firstName+' '+this.adphysical.parents.lastName;

      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}



PostAllPHY() {
  this.repost.referenceNo = this.adphysical.parents.referenceNo;
  this.repost.age = this.adphysical.basicInfo.age;
  this.repost.nameOfResident = this.fullName;
  this.repost.startedAt=this.repost.startedAt+':00';
  this.repost.endedAt=this.repost.endedAt+':00';
 // this.repost.startAt=this.convertTimeStringToTimeSpan(this.repost.startAt);
  //this.repost.endedAt=this.convertTimeStringToTimeSpan(this.repost.endedAt);
  
  this.Srv.PostData(`Psychological/postphysicaladd`,this.repost).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        
        this.repost = res.data;
this.router.navigate(['/entities/psychologicalrecord',this.file,this.entity]);
      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}
}
