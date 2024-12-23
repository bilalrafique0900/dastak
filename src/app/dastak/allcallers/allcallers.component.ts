import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-allcallers',
  templateUrl: './allcallers.component.html',
  styleUrls: ['./allcallers.component.css']
})
export class AllcallersComponent {
  callers: any[]=[];
constructor(private Srv:HttpService){
this.GetAll();
}

  GetAll() {
    this.Srv.GetData(`AllCallers/getcallers`).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.callers = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(id:any) {
    this.Srv.GetData(`AllCallers/delete?id=`+id).subscribe({
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
