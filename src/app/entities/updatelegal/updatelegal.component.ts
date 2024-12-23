import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-updatelegal',
  templateUrl: './updatelegal.component.html',
  styleUrls: ['./updatelegal.component.css']
})
export class UpdatelegalComponent {
  EditlegalId:any;
  updatenotice: any={};
  file:any;
  entity:any;
  caseId:any;
  updatelegaldata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute,
    private router:Router
    ){
      this.file = this.route.snapshot.params["file"];
      this.entity = this.route.snapshot.params["entity"];
      this.caseId = this.route.snapshot.params["caseId"];
      this.GetAll(); 
  }
  UpdateLegal() {
    
    let id = this.caseId.split('-').pop();
    this.updatelegaldata.referenceNo=this.entity;
    this.updatelegaldata.fileNo=this.file;
    this.updatelegaldata.caseId=this.caseId;
    this.Srv.PostData(`LegalDetail/updatelegal?id=`+id,this.updatelegaldata).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          //this.userdata = res.data;
          this.router.navigate(["/dastak/legaldetail",this.file,this.entity]);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  GetAll() {
    this.Srv.GetData(`LegalDetail/getlegal?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.updatenotice = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
