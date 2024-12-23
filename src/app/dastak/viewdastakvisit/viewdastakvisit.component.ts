import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-viewdastakvisit',
  templateUrl: './viewdastakvisit.component.html',
  styleUrls: ['./viewdastakvisit.component.css']
})
export class ViewdastakvisitComponent {
  DastakId:any;

  dastakvisitdata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute
    ){
    this.DastakId = this.route.snapshot.params["Id"];
  }
  ngOnInit(){
    this.GetVisitorById();
      }
  GetVisitorById() {
    
    this.Srv.GetData(`DastakVisit/getdastakbyid?id=`+this.DastakId).subscribe({
      next: (res: any) => {
        if (res.data) {
          this.dastakvisitdata = res.data;
          
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
