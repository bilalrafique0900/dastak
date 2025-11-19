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
