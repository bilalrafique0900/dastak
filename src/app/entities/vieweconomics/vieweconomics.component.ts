import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-vieweconomics',
  templateUrl: './vieweconomics.component.html',
  styleUrls: ['./vieweconomics.component.css']
})
export class VieweconomicsComponent {
  LegalId:any;
  
  entity:any;
  economiId:any;
  legaldetaildata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute
    ){
      
      this.entity = this.route.snapshot.params["entity"];
      this.economiId = this.route.snapshot.params["economiId"];
  }
  ngOnInit(){
this.GetLegalById();
  }

  GetLegalById() {
    
    let id = this.economiId.split('-').pop();
    this.legaldetaildata.referenceNo=this.entity;
    
    this.legaldetaildata.caseId=this.economiId;
    this.Srv.GetData(`Economic/geteconomicbyid?entity=`+this.entity+'&id='+this.economiId).subscribe({
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
