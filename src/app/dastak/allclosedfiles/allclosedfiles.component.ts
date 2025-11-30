import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-allclosedfiles',
  templateUrl: './allclosedfiles.component.html',
  styleUrls: ['./allclosedfiles.component.css']
})
export class AllclosedfilesComponent {
  closefile: any[]=[];
  constructor(private Srv:HttpService){
  this.Getclosedfile();
  }
  
  Getclosedfile() {
      this.Srv.GetData(`LegalDetail/get-deactivated`).subscribe({
        next: (res: any) => {
          
          if (res.data) {
            
            this.closefile = res.data;
  
          }
        },
        error: (err) => {
         // this.usernameError = err ? err.Message : '';
        },
      });
    }
     Delete(file:any,entity:any) {
    this.Srv.GetData(`LegalDetail/deleteclosedfile?file=`+file+'&entity='+entity).subscribe({
      next: (res: any) => {
        
        
          
          

       
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
    this.Getclosedfile();
  }

}
