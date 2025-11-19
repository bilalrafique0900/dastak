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
  formatToAmPm(time: string): string {
  // time should be "HH:mm"
  const [hourStr, minute] = time.split(':');
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12; // Convert 0 → 12 for midnight
  return `${hour}:${minute} ${ampm}`;
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
