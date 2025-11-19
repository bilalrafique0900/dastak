import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.css']
})
export class InterventionsComponent {
  intervention: any={};
  entity: any;
  file: any;
  constructor(private Srv:HttpService ,
    public session:SessionService,
       private route:ActivatedRoute
  ){
    this.file = this.route.snapshot.params["file"];
    this.entity = this.route.snapshot.params["entity"];
  this.GetAll();
  }
  GetAll() {
    let entity=this.entity;
    if(this.entity==undefined || this.entity==null || this.entity=='undefined' || this.entity=='null')
      entity='';
    let file=this.file;
    if(this.file==undefined || this.file==null || this.file=='undefined' || this.file=='null')
      file='';
    this.Srv.GetData(`Interventions/getintervention?file=`+file+'&entity='+entity).subscribe({
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
    this.Srv.GetData(`Interventions/deleteinterventions?id=`+id).subscribe({
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
