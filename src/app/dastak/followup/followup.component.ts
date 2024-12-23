import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.css']
})
export class FollowupComponent {
  followad: any={};
  followcase: any={};
  file: any;
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
    this.Srv.GetData(`FollowUp/getfollowdetail?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.followad = res.data;
  
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  PostFollowUp() {
    
    this.followcase.referenceNo=this.entity;
    this.followcase.fileNo=this.file;
    this.followcase.nameOfResident=this.followad.fullName;
    
    
    this.Srv.PostData(`FollowUp/postfollowdata`,this.followcase).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.router.navigate(['/dastak/followuprecord' ,this.file,this.entity]);
          //this.legalcase = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

  
}
