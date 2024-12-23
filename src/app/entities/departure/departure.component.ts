import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.css']
})
export class DepartureComponent {
  
  legalnotice: any={};
  file:any;
  entity:any;
  HasSuggestionsOrComplaints=0;
  SurvivorInformedShelter=1;
  editfeeddata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute,
    private router:Router
    ){
      this.file = this.route.snapshot.params["file"];
      this.entity = this.route.snapshot.params["entity"];
      
      this.GetAll(); 
  }

  GetAll() {
    this.Srv.GetData(`Menu/getfeedbackdeparture?file=`+this.file+'&entity='+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.legalnotice = res.data;
this.legalnotice.admissionAt=this.formatDateToYYYYMMDD(this.legalnotice.admissionAt);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

    // Function to format the date string to 'YYYY-MM-DD'
    formatDateToYYYYMMDD(dateString: string): string {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero
      const day = ('0' + date.getDate()).slice(-2); // Add leading zero
      return `${year}-${month}-${day}`;
    }
  
   // Function to format the date string to 'MM/DD/YYYY'
   formatDateToMMDDYYYY(dateString: string): string {
    const date = new Date(dateString);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero
    const day = ('0' + date.getDate()).slice(-2); // Add leading zero
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
  PostFollowUp() {
    
    this.editfeeddata.referenceNo=this.entity;
    this.editfeeddata.fileNo=this.file;
    this.editfeeddata.entity=this.entity;
    this.editfeeddata.file=this.file;
    this.editfeeddata.admissionDate=this.legalnotice.admissionAt;
    
    
    this.Srv.PostData(`Menu/postfeedbackdeparture`, this.editfeeddata).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.router.navigate(["/entities/files"]);
          //this.legalcase = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
