import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-editlegal',
  templateUrl: './editlegal.component.html',
  styleUrls: ['./editlegal.component.css']
})
export class EditlegalComponent {
  EditlegalId:any;
  legalnotice: any={};
  file:any;
  entity:any;
  caseId:any;
  editlegaldata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute,
    private router:Router
    ){
      this.file = this.route.snapshot.params["file"];
      this.entity = this.route.snapshot.params["entity"];
      this.caseId = this.route.snapshot.params["caseId"];
      this.GetAll(); 
  }
  EditLegal() {
    
    let id = this.caseId.split('-').pop();
    this.editlegaldata.referenceNo=this.entity;
    this.editlegaldata.fileNo=this.file;
    this.editlegaldata.caseId=this.caseId;
    this.Srv.PostData(`LegalDetail/editlegal?id=`+id,this.editlegaldata).subscribe({
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
          
          this.legalnotice = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
