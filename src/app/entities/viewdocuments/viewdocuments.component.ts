import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-viewdocuments',
  templateUrl: './viewdocuments.component.html',
  styleUrls: ['./viewdocuments.component.css']
})
export class ViewdocumentsComponent {
  
  entity:any;
  
  documentiId:any;
  documentsdata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute
    ){
      
      this.entity = this.route.snapshot.params["entity"];
      this.documentiId = this.route.snapshot.params["documentiId"];
  }
  ngOnInit(){
this.GetdocumentId();
  }

  GetdocumentId() { 
    this.Srv.GetData(`Document/getdocumentview?entity=`+this.entity+'&id='+this.documentiId).subscribe({
      next: (res: any) => {
        if (res.data) {
          this.documentsdata= res.data;;
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
