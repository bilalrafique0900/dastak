import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-basicinformation',
  templateUrl: './basicinformation.component.html',
  styleUrls: ['./basicinformation.component.css']
})
export class BasicinformationComponent {
  
  file:any;
  entity:any;

  basicviewdata: any={};
  constructor(private Srv:HttpService,
    public session:SessionService,
     private route:ActivatedRoute
    ){
    
    this.file = this.route.snapshot.params["file"];
    this.entity = this.route.snapshot.params["entity"];
   // this.ReferenceNo = this.route.snapshot.params["ReferenceNo"];
  }
  ngOnInit(){
this.GetBasicView();
  }

  GetBasicView() {
    this.basicviewdata.referenceNo=this.entity;
    this.basicviewdata.fileNo=this.file;
    this.Srv.GetData(`LegalDetail/getviewbasic?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.basicviewdata = res.data;
          
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

}
