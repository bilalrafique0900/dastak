import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-allexternalvisits',
  templateUrl: './allexternalvisits.component.html',
  styleUrls: ['./allexternalvisits.component.css']
})
export class AllexternalvisitsComponent {
  visitor: any[]=[];
constructor(private Srv:HttpService,
  public session:SessionService
){
this.GetAll();
}
  GetAll() {
    this.Srv.GetData(`Visitor/getexternalvisitor`).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.visitor = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(id:any) {
    this.Srv.GetData(`Visitor/delete?id=`+id).subscribe({
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
