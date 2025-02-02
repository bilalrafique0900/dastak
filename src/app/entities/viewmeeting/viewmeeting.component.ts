import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-viewmeeting',
  templateUrl: './viewmeeting.component.html',
  styleUrls: ['./viewmeeting.component.css']
})
export class ViewmeetingComponent {
  
  entity:any;
  
  meetingId:any;
  psydata: any={};
  constructor(private Srv:HttpService,
      public session:SessionService,
     private route:ActivatedRoute
    ){

      this.entity = this.route.snapshot.params["entity"];
      this.meetingId = this.route.snapshot.params["meetingId"];
  }
  ngOnInit(){
this.Getmeetingview();
  }

  Getmeetingview() { 
    this.Srv.GetData(`Meetings/postviewmeeting?entity=`+this.entity+'&id='+this.meetingId).subscribe({
      next: (res: any) => {
        if (res.data) {
          this.psydata= res.data;;
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
