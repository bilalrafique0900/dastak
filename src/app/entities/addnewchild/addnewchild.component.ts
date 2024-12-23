import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-addnewchild',
  templateUrl: './addnewchild.component.html',
  styleUrls: ['./addnewchild.component.css']
})
export class AddnewchildComponent {
  vaccinations = [
    'BCG', 'OPV-I', 'OPV-II', 'OPV-III', 'Hepatitus B',
    'Rotavirus-I', 'Rotavirus-II', 'Pneumococcal-I', 'Pneumococcal-II', 
    'Pneumococcal-III', 'Pentavalent-I', 'Pentavalent-II', 
    'Pentavalent-III', 'IPV(polio)', 'Measles-I', 'Measles-II'
  ];

  // To store selected vaccinations
  selectedVaccinations: string[] = [];

  // Method to handle checkbox changes
  onCheckboxChange(event: any) {
    const vaccine = event.target.value;
    if (event.target.checked) {
      // Add vaccine to the array if checked
      this.selectedVaccinations.push(vaccine);
    } else {
      // Remove vaccine from the array if unchecked
      const index = this.selectedVaccinations.indexOf(vaccine);
      if (index > -1) {
        this.selectedVaccinations.splice(index, 1);
      }
    }
  }


  repost: any={};
  kidsdata: any={};
  SpecialChild=0;
  AttendedTraining=0;
  IsChildMaleAbove10=0;
  HasBeenReferred=0;
  file : any;
  entity:any;
  fullName='';
 
    

  constructor(private fb: FormBuilder
    ,private cb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router
     ,private Srv:HttpService) {
    this.file = this.route.snapshot.params["file"];
  this.entity = this.route.snapshot.params["entity"];
this.GetAll(); 
  

  }
  

GetAll() {
  this.Srv.GetData(`Children/getaddchild?file=`+this.file+'&entity='+this.entity).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        
        this.kidsdata = res.data;
       this.fullName=this.kidsdata.title+' '+this.kidsdata.firstName+' '+this.kidsdata.lastName;

      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}
PostAllchilds() {
  this.repost.referenceNo = this.kidsdata.referenceNo;
  this.repost.motherName = this.fullName;
  this.repost.natureOfTraining=JSON.stringify(this.repost.natureOfTraining);
  this.repost.typeOfVaccination=JSON.stringify(this.selectedVaccinations);

  this.Srv.PostData(`Children/postaddchild`,this.repost).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        
        this.repost = res.data;
this.router.navigate(['/entities/children',this.file,this.entity]);
      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}
}
