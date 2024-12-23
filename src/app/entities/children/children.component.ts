import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  childdata: any={};
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
    this.Srv.GetData(`Children/getchild?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.childdata = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(childreferenceNo: string) {
    // Make the HTTP call with childreferenceNo as the parameter
    this.Srv.GetData(`Children/gettdeletechild?childreferenceNo=` + childreferenceNo).subscribe({
      next: (res: any) => {
        
        // Check if the response contains a message or successful response
        if (res.message) {
          this.GetAll(); // Refresh the list after successful deletion
        }
      },
      error: (err) => {
        // Handle the error
        console.error('Error deleting the child:', err);
      }
    });
  }
  
  
}
