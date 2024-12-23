import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-addcaller',
  templateUrl: './addcaller.component.html',
  styleUrls: ['./addcaller.component.css']
})
export class AddcallerComponent {
dastakvisit:any={};
  constructor(
    private router:Router
     ,private Srv:HttpService) {}





  Post() {
   
    this.dastakvisit.time = this.dastakvisit.time+':00';

    // Split into hours and minutes
   // const [hours, minutes] = timeValue.split(':');
    
    // Convert to a valid `TimeSpan` format (as `hh:mm:ss`)
  //  const timeSpanFormat = `${hours}:${minutes}:00`;

        this.Srv.PostData(`Caller/postcall`,this.dastakvisit).subscribe({
          next: (res: any) => {
            
            if (res.data) {
              
              this.dastakvisit = res.data;
      this.router.navigate(['/dastak/allcallers']);
            }
          },
          error: (err) => {
           // this.usernameError = err ? err.Message : '';
          },
        });
      }
}
