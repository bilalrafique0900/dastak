import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-editchildren',
  templateUrl: './editchildren.component.html',
  styleUrls: ['./editchildren.component.css']
})
export class EditchildrenComponent {
  
  childnotice: any={};
  fullName:any;
  file:any;
  entity:any;
  childentity:any;
  editchilddata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute,
    private router:Router
    ){
      this.file = this.route.snapshot.params["file"];
      this.entity = this.route.snapshot.params["entity"];
      this.childentity = this.route.snapshot.params["childentity"];
      this.GetAll(); 
  }
  Editchildd() {
    
    let id = this.childentity;
    this.childnotice.referenceNo=this.entity;
    this.childnotice.fileNo=this.file;
    this.childnotice.childentity=this.childentity;
    this.childnotice.childData.orientation.natureOfTraining=JSON.stringify(this.childnotice.childData.orientation.natureOfTraining);
    this.childnotice.childData.orientation.typeOfVaccination=JSON.stringify(this.childnotice.childData.orientation.typeOfVaccination);
    this.Srv.PostData(`Children/posteditchild?childentity=`+id,this.childnotice).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          //this.userdata = res.data;
          this.router.navigate(["/entities/children",this.file,this.entity]);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  GetAll() {
    this.Srv.GetData(`Children/geteditchild?file=`+this.file+'&entity='+this.entity+'&childentity='+this.childentity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.childnotice = res.data;
          this.fullName=this.childnotice.childData.motherName;
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
