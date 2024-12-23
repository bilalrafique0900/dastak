import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  
  legalcase: any={};
  responseData: any[]=[];
  
  constructor(private fb: FormBuilder,
    private cb: FormBuilder ,
    private router:Router,
    private Srv:HttpService,
    private route:ActivatedRoute){

    }
  PostAllFilter() {
    

    this.Srv.PostData(`Filter/postfilter`,this.legalcase).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.responseData = res.data;
          //this.router.navigate(["/dastak/allclosedfiles"]);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
