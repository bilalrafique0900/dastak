import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-detailofabuse',
  templateUrl: './detailofabuse.component.html',
  styleUrls: ['./detailofabuse.component.css']
})
export class DetailofabuseComponent {
  abuser: any={};
  entity: any;
  file: any;
  id:any;
  constructor(private Srv:HttpService ,
    public session:SessionService,
       private route:ActivatedRoute
  ){
    this.file = this.route.snapshot.params["file"];
    this.entity = this.route.snapshot.params["entity"];
    this.id=this.route.snapshot.params["id"]
  this.GetAll();
  }
  GetAll() {
    this.Srv.GetData(`Abuser/getabuse?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.abuser = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(id:any) {
    this.Srv.GetData(`Abuser/gettdeleteabuser?id=`+id).subscribe({
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
