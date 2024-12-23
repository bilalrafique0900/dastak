import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-allvisitsbydastakstaff',
  templateUrl: './allvisitsbydastakstaff.component.html',
  styleUrls: ['./allvisitsbydastakstaff.component.css']
})
export class AllvisitsbydastakstaffComponent {
  dastakvisit: any[]=[];
constructor(private Srv:HttpService,
  public session:SessionService
  
){
this.GetDastakVisit();
}

  GetDastakVisit() {
    this.Srv.GetData(`DastakVisit/getdastak`).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.dastakvisit = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(id:any) {
    this.Srv.GetData(`DastakVisit/deletedastakvisit?id=`+id).subscribe({
      next: (res: any) => {
        
        if (res.message) {
          this.GetDastakVisit();
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
