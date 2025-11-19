import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-viewcommunityconsultation',
  templateUrl: './viewcommunityconsultation.component.html',
  styleUrls: ['./viewcommunityconsultation.component.css']
})
export class  ViewcommunityconsultationComponent {
  EditlegalId:any;
  
   entity:any;
    caseId:any;
    legaldetaildata: any={};
 
    constructor(private Srv:HttpService,
       private route:ActivatedRoute,
      private router:Router
      ){
     this.EditlegalId = this.route.snapshot.params["EditlegalId"];
        if(this.EditlegalId) {
          this.getCommunityConsultationById();
        }


    }
    getCommunityConsultationById() {
      this.Srv.GetData(`LegalDetail/getCommunityConsultationById?id=`+this.EditlegalId).subscribe({
        next: (res: any) => {
          
       this.legaldetaildata = res.data;
  
          
        },
        error: (err) => {
         // this.usernameError = err ? err.Message : '';
        },
      });
    }

}
