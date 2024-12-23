import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-legaldetail',
  templateUrl: './legaldetail.component.html',
  styleUrls: ['./legaldetail.component.css']
})
export class LegaldetailComponent {
  legal: any[]=[];
  entity: any;
  file: any;
  constructor(private Srv:HttpService ,
       private route:ActivatedRoute
  ){
    this.file = this.route.snapshot.params["file"];
    this.entity = this.route.snapshot.params["entity"];
  this.GetAll();
  }
  GetAll() {
    this.Srv.GetData(`LegalDetail/getlegalassistance`).subscribe({
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

}
