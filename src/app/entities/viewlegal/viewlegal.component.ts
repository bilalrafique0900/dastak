import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-viewlegal',
  templateUrl: './viewlegal.component.html',
  styleUrls: ['./viewlegal.component.css']
})
export class ViewlegalComponent {
  LegalId:any;
  file:any;
  entity:any;
  caseId:any;
  legaldetaildata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute
    ){
      this.file = this.route.snapshot.params["file"];
      this.entity = this.route.snapshot.params["entity"];
      this.caseId = this.route.snapshot.params["caseId"];
  }
  ngOnInit(){
this.GetLegalById();
  }

  GetLegalById() {
    
    let id = this.caseId.split('-').pop();
    this.legaldetaildata.referenceNo=this.entity;
    this.legaldetaildata.fileNo=this.file;
    this.legaldetaildata.caseId=this.caseId;
    this.Srv.GetData(`LegalDetail/getlegalassistancebyid?id=`+id).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.legaldetaildata= res.data;
          
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
