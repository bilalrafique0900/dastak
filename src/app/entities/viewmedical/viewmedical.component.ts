import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-viewmedical',
  templateUrl: './viewmedical.component.html',
  styleUrls: ['./viewmedical.component.css']
})
export class ViewmedicalComponent {
  
  entity:any;
  file:any;
  caseId:any;
  psydata: any={};
  constructor(private Srv:HttpService,
    public session:SessionService,
     private route:ActivatedRoute
     
    ){
      this.file = this.route.snapshot.params["file"];
      this.entity = this.route.snapshot.params["entity"];
      this.caseId = this.route.snapshot.params["caseId"];
  }
  ngOnInit(){
this.GetLegalById();
  }

  GetLegalById() { 
    this.Srv.GetData(`Medical/getmedicalview?file=`+this.file+'&entity='+this.entity+'&caseId='+this.caseId).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.psydata= res.data;
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
