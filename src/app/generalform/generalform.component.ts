import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-generalform',
  templateUrl: './generalform.component.html',
  styleUrls: ['./generalform.component.css']
})
export class GeneralformComponent {
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

        this.Srv.PostData(`Caller/postgeneralinquiry`,this.dastakvisit).subscribe({
          next: (res: any) => {
            
            if (res.data) {
              
              this.dastakvisit = res.data;
      this.router.navigate(['/dastak/generalforms']);
            }
          },
          error: (err) => {
           // this.usernameError = err ? err.Message : '';
          },
        });
      }
}
