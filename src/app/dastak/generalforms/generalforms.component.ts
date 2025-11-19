import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-generalforms',
  templateUrl: './generalforms.component.html',
  styleUrls: ['./generalforms.component.css']
})
export class GeneralformsComponent {
  generalinquiry: any[]=[];
constructor(private Srv:HttpService){
this.GetAll();
}

  GetAll() {
    this.Srv.GetData(`AllCallers/getgenralinquirys`).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.generalinquiry = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  formatToAmPm(time: string): string {
  // time should be "HH:mm"
  const [hourStr, minute] = time.split(':');
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12; // Convert 0 → 12 for midnight
  return `${hour}:${minute} ${ampm}`;
}

  Delete(id:any) {
    this.Srv.GetData(`AllCallers/deletegeneral?id=`+id).subscribe({
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
