import { Component } from '@angular/core';
import { HttpService } from '../core/services/http.service';
import { SessionService } from '../core/services/session.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allnotifications',
  templateUrl: './allnotifications.component.html',
  styleUrls: ['./allnotifications.component.css']
})
export class AllnotificationsComponent {
  notifydata: any={};

  constructor(private Srv:HttpService ,
    public session:SessionService,
       private route:ActivatedRoute
  ){
  this.GetAll();
  }
  GetAll() {
    this.Srv.GetData(`Notification/getnotification`).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.notifydata = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

}
