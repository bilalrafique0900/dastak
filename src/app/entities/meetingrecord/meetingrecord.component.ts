import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-meetingrecord',
  templateUrl: './meetingrecord.component.html',
  styleUrls: ['./meetingrecord.component.css']
})
export class MeetingrecordComponent {
  meetingdata: any[]=[];
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
    this.Srv.GetData(`Meetings/getmeeting?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {

        if (res.data) {
          
          this.meetingdata = res.data.guests;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(id:any) {
    this.Srv.GetData(`Meetings/deletemeeting?id=`+id).subscribe({
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

