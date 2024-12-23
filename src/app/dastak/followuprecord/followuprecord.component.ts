import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-followuprecord',
  templateUrl: './followuprecord.component.html',
  styleUrls: ['./followuprecord.component.css']
})
export class FollowuprecordComponent {
  followdetail: any={};
  entity: any;
  file: any;
  constructor(private Srv:HttpService ,
       private route:ActivatedRoute
  ){
    this.file = this.route.snapshot.params["file"];
    this.entity = this.route.snapshot.params["entity"];
  this.GetAll();
  }
  GetAll() {
    this.Srv.GetData(`FollowUp/getfollowrecord?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.followdetail = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(id:any) {
    this.Srv.GetData(`FollowUp/deletefollow?id=`+id).subscribe({
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
