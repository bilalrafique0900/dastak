import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-rightschecklist',
  templateUrl: './rightschecklist.component.html',
  styleUrls: ['./rightschecklist.component.css']
})
export class RightschecklistComponent {
  ReferenceNo:any;

  feedbackdata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute
    ){
    this.ReferenceNo = this.route.snapshot.params["ReferenceNo"];
  }
  ngOnInit(){
this.GetFeedback();
  }

  GetFeedback() {
    this.Srv.GetData(`LegalDetail/getfeedback?ReferenceNo=`+this.ReferenceNo).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.feedbackdata = res.data;
          
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

}
