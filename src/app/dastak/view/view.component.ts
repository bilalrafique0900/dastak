import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  VisitorId:any;

  visitordata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute
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
