import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-viewdastakvisit',
  templateUrl: './viewdastakvisit.component.html',
  styleUrls: ['./viewdastakvisit.component.css']
})
export class ViewdastakvisitComponent {

  VisitorId:any;

  visitordata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute,
     public session:SessionService
    ){
    this.VisitorId = this.route.snapshot.params["Id"];
  }
  ngOnInit(){
this.GetVisitorById();
  }
  getFormattedData(data:any) {
    let jdata=JSON.parse(data);
    let mydt=jdata.filter((n: any) => n !== null).join(' | ');
    return mydt;
  }
  GetVisitorById() {
    this.Srv.GetData(`Visitor/getvisitorbyid?id=`+this.VisitorId).subscribe({
      next: (res: any) => {
        if (res.data) {
          this.visitordata = res.data;
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
