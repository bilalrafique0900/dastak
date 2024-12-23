import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-psychologicalrecord',
  templateUrl: './psychologicalrecord.component.html',
  styleUrls: ['./psychologicalrecord.component.css']
})
export class PsychologicalrecordComponent {
  physicaldata: any[]=[];
  file:any;
  entity:any;
constructor(private Srv:HttpService,  private route:ActivatedRoute){
  this.file = this.route.snapshot.params["file"];
  this.entity = this.route.snapshot.params["entity"];
this.GetAll();
}

  GetAll() {
    this.Srv.GetData(`Psychological/getphysical?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {

        if (res.data) {
          
          this.physicaldata = res.data.physical;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(id:any) {
    this.Srv.GetData(`Psychological/delete?id=`+id).subscribe({
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
