import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-viewabuser',
  templateUrl: './viewabuser.component.html',
  styleUrls: ['./viewabuser.component.css']
})
export class ViewabuserComponent {
  entity:any;
  
  id:any;
  abusedata: any={};
  constructor(private Srv:HttpService,
    public session:SessionService,
     private route:ActivatedRoute
    ){
      
      this.entity = this.route.snapshot.params["entity"];
      this.id = this.route.snapshot.params["id"];
  }
  ngOnInit(){
this.GetLegalById();
  }

  GetLegalById() { 
    this.Srv.GetData(`Abuser/getabuserview?entity=`+this.entity+'&id='+this.id).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.abusedata= res.data;
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
