import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-allpendingfiles',
  templateUrl: './allpendingfiles.component.html',
  styleUrls: ['./allpendingfiles.component.css']
})
export class AllpendingfilesComponent {
  pendingdetail: any={};
  constructor(private Srv:HttpService ,
       private route:ActivatedRoute
  ){
  this.GetAll();
  }
  GetAll() {
    this.Srv.GetData(`Pending/pending`).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.pendingdetail = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(file:any,entity:any) {
    this.Srv.GetData(`Pending/deletepending?file=`+file+'&entity='+entity).subscribe({
      next: (res: any) => {
        
        
          
          

       
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
    this.GetAll();
  }
 

}
