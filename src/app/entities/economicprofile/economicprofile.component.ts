import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-economicprofile',
  templateUrl: './economicprofile.component.html',
  styleUrls: ['./economicprofile.component.css']
})
export class EconomicprofileComponent {
  economicdata: any[]=[];
  file:any;
  entity:any;
constructor(private Srv:HttpService,  private route:ActivatedRoute){
  this.file = this.route.snapshot.params["file"];
  this.entity = this.route.snapshot.params["entity"];
this.GetAll();
}

  GetAll() {
    this.Srv.GetData(`Economic/geteconomic?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {

        if (res.data) {
          
          this.economicdata = res.data.economic;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  Delete(id:any) {
    this.Srv.GetData(`Economic/deleteeconomic?id=`+id).subscribe({
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
