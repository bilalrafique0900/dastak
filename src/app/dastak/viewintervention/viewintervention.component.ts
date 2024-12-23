import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-viewintervention',
  templateUrl: './viewintervention.component.html',
  styleUrls: ['./viewintervention.component.css']
})
export class ViewinterventionComponent {
  
  
  entity:any;
  interventionId:any;
  Viewinterventiondata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute
    ){
      
      this.entity = this.route.snapshot.params["entity"];
      this.interventionId = this.route.snapshot.params["Id"];
  }
  ngOnInit(){
this.GetViewIntervention();
  }

  GetViewIntervention() {
    
    let id = this.interventionId;
    this.Viewinterventiondata.referenceNo=this.entity;
    
    this.Viewinterventiondata.interventionId=this.interventionId;
    this.Srv.GetData(`Interventions/getviewintervention?entity=`+this.entity+'&id='+id).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.Viewinterventiondata= res.data;
          
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

}
