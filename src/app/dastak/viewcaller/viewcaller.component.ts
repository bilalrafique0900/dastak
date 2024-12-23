import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-viewcaller',
  templateUrl: './viewcaller.component.html',
  styleUrls: ['./viewcaller.component.css']
})
export class ViewcallerComponent {
  CallerId:any;

  callersdata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute
    ){
    this.CallerId = this.route.snapshot.params["Id"];
  }
  ngOnInit(){
this.GetCallerById();
  }

  GetCallerById() {
    this.Srv.GetData(`AllCallers/getcallersbyid?id=`+this.CallerId).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.callersdata = res.data;
          
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
