import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-editcommunityconsultation',
  templateUrl: './editcommunityconsultation.component.html',
  styleUrls: ['./editcommunityconsultation.component.css']
})
export class EditcommunityconsultationComponent {
  EditlegalId:any;
  
  
  entity:any;
  caseId:any;
  editlegaldata: any={};
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
        
     this.editlegaldata = res.data;

        
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  UpdateCommunityConsultation() {
    
    this.Srv.PostData(`LegalDetail/UpdateCommunityConsultation`,this.editlegaldata).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          //this.userdata = res.data;
          this.router.navigate(["/dastak/allcommunityconsultations"]);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
 
}
