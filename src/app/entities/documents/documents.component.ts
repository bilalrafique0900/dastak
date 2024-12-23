import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  document: any={};
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
    this.Srv.GetData(`Document/getdocument?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.document = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(id:any) {
    this.Srv.GetData(`Document/deletedocument?id=`+id).subscribe({
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
