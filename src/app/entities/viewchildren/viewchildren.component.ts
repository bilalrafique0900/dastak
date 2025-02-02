import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.css']
})
export class ViewchildrenComponent {
  entity:any;
  
 childentity:any;
  info:any={};
  c:any={};
  ch:any={};
  co:any={};
  cs:any={};
  constructor(private Srv:HttpService,
    public session:SessionService,
     private route:ActivatedRoute
    ){
      
      this.entity = this.route.snapshot.params["entity"];
      this.childentity = this.route.snapshot.params["childentity"];
  }
  ngOnInit(){
    this.Getchildview();
  }

  Getchildview() { 
    this.Srv.GetData(`Children/getchildview?entity=`+this.entity+'&childentity='+this.childentity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.info= res.data.info;
          this.c= res.data.childInfo.c;
          this.ch= res.data.childInfo.ch;
          this.co= res.data.childInfo.co;
          this.cs= res.data.childInfo.cs;
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
