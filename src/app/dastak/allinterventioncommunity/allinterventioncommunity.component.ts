import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-allinterventioncommunity',
  templateUrl: './allinterventioncommunity.component.html',
  styleUrls: ['./allinterventioncommunity.component.css']
})
export class AllinterventioncommunityComponent {
  intervention: any={};
entity: any;
  constructor(private Srv:HttpService ,
       private route:ActivatedRoute
  ){
  this.entity = this.route.snapshot.params["entity"];
  this.GetAll();
  }
  GetAll() {
    this.Srv.GetData(`Interventions/getallinterventioncommunity`).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.intervention = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(id:any) {
    this.Srv.GetData(`Interventions/deleteinterventioncommunity?id=`+id).subscribe({
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
