import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-addeconomicprofile',
  templateUrl: './addeconomicprofile.component.html',
  styleUrls: ['./addeconomicprofile.component.css']
})
export class AddeconomicprofileComponent {
  repost: any={};
  legaleconomi: any={};
  

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
        
        this.legaleconomi = res.data;
       this.fullName=this.legaleconomi.parents.title+' '+this.legaleconomi.parents.firstName+' '+this.legaleconomi.parents.lastName;

      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}
PostAllRE() {
  this.repost.referenceNo = this.legaleconomi.parents.referenceNo;
  this.repost.age = this.legaleconomi.basicInfo.age;
  this.repost.nameOfResident = this.fullName;
  this.repost.education = this.legaleconomi.basicInfo.literacyLevel;
  this.Srv.PostData(`Economic/posteconomicadd`,this.repost).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        
        this.repost = res.data;
this.router.navigate(['/entities/economicprofile',this.file,this.entity]);
      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}
}
