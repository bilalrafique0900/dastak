import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-allcommunityconsultations',
  templateUrl: './allcommunityconsultations.component.html',
  styleUrls: ['./allcommunityconsultations.component.css']
})
export class AllCommunityConsultationsComponent {
  legal: any[]=[];
  entity: any;
  
  constructor(private Srv:HttpService ,
       private route:ActivatedRoute
  ){
    
    this.entity = this.route.snapshot.params["entity"];
  this.GetAll();
  }
  GetAll() {
    this.Srv.GetData(`LegalDetail/getallcommunity`).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.legal = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
Delete(id:any) {
    this.Srv.GetData(`LegalDetail/gettdeleteallcommunity?id=`+id).subscribe({
      next: (res: any) => {
        
        if (res.message) {
          
          this.GetAll();

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
