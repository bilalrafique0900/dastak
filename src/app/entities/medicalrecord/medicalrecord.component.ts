import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-medicalrecord',
  templateUrl: './medicalrecord.component.html',
  styleUrls: ['./medicalrecord.component.css']
})
export class MedicalrecordComponent {
  medicaldata: any[]=[];
  file:any;
  entity:any;
constructor(private Srv:HttpService, 
  public session:SessionService,
   private route:ActivatedRoute){
  this.file = this.route.snapshot.params["file"];
  this.entity = this.route.snapshot.params["entity"];
this.GetAll();
}

  GetAll() {
    this.Srv.GetData(`Medical/getmedical?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {

        if (res.data) {
          
          this.medicaldata = res.data.medical;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(id:any) {
    this.Srv.GetData(`Medical/deletemedical?id=`+id).subscribe({
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
