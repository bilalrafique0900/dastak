import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-viewpsy',
  templateUrl: './viewpsy.component.html',
  styleUrls: ['./viewpsy.component.css']
})
export class ViewpsyComponent {
  
  entity:any;
  file:any;
  physicaliId:any;
  psydata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute
    ){
      this.file = this.route.snapshot.params["file"];
      this.entity = this.route.snapshot.params["entity"];
      this.physicaliId = this.route.snapshot.params["physicaliId"];
  }
  ngOnInit(){
this.GetLegalById();
  }

  GetLegalById() { 
    this.Srv.GetData(`Psychological/getphysicalbyid?file=`+this.file+'&entity='+this.entity+'&id='+this.physicaliId).subscribe({
      next: (res: any) => {
        if (res.data) {
          this.psydata= res.data;;
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
