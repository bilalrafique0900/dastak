import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-communityconsultations',
  templateUrl: './communityconsultations.component.html',
  styleUrls: ['./communityconsultations.component.css']
})
export class CommunityConsultationsComponent {
legalcase:any={};
  constructor(private router:Router
     ,private Srv:HttpService) 
     {

     }
  PostAll() {
        this.Srv.PostData(`LegalDetail/addCommunityConsultation`,this.legalcase).subscribe({
          next: (res: any) => {
            
            if (res.data) {
              
              this.legalcase = res.data;
      this.router.navigate(['/dastak/allcommunityconsultations']);
            }
          },
          error: (err) => {
           // this.usernameError = err ? err.Message : '';
          },
        });
      }
}
