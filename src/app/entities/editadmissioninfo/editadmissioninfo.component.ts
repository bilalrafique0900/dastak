import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-editadmissioninfo',
  templateUrl: './editadmissioninfo.component.html',
  styleUrls: ['./editadmissioninfo.component.css']
})
export class EditadmissioninfoComponent implements OnInit {
  possessionForm!: FormGroup;
  pendadd: any={};
  proceedpost: any={};
  possession:any;
  HasScreened=0;
  
  entity: any;

  constructor(private pb: FormBuilder,
    private fb: FormBuilder
      ,private cb: FormBuilder ,
      private router:Router,
      private Srv:HttpService,
      private route:ActivatedRoute
  ) {
    
    this.entity = this.route.snapshot.params["entity"];
  this.GetAll(); 
  }
  GetAll() {
    this.Srv.GetData(`Menu/geteditbasicinfo?entity=`+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.pendadd = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  PostProceed() {

    
    this.proceedpost.name = this.pendadd.fullName;
    this.proceedpost.reasonForAdmission=JSON.stringify(this.proceedpost.reasonForAdmission);
    this.proceedpost.natureOfAssistance=JSON.stringify(this.proceedpost.natureOfAssistance);
    this.proceedpost.reasonOfRefuse=JSON.stringify(this.proceedpost.reasonOfRefuse);
    this.proceedpost.whereHasSheReferred=JSON.stringify(this.proceedpost.whereHasSheReferred);
    this.proceedpost.listOfDocuments=JSON.stringify(this.proceedpost.listOfDocuments);
    this.proceedpost.diseases=JSON.stringify(this.proceedpost.diseases);
    const possessionsArray = this.possessionForm.get('possessions') as FormArray;
    // Or, if you want to loop through all the visitors and get their 'name' values
    const PossessionItems = possessionsArray.controls.map(possession => possession.get('item')?.value);
    const possessionQuantities = possessionsArray.controls.map(possession => possession.get('quantity')?.value);
    const possessioninPossessionOfs = possessionsArray.controls.map(possession => possession.get('inpossessionof')?.value);
    this.proceedpost.Items=JSON.stringify(PossessionItems);
    this.proceedpost.Quantities=JSON.stringify(possessionQuantities);
    this.proceedpost.InPossessionOf=JSON.stringify(possessioninPossessionOfs);
    
    
    
    this.Srv.PostData(`Pending/postproceeddata`,this.proceedpost).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          //this.legalcase = res.data;
          this.router.navigate(['/entities/files',]);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }


  ngOnInit(): void {
    this.possessionForm = this.pb.group({
      possessions: this.pb.array([this.createPossessionGroup()])
    });
  }

  possessions(): FormArray {
    return this.possessionForm.get('possessions') as FormArray;
  }

  createPossessionGroup(): FormGroup {
    return this.pb.group({
      item: ['', Validators.required],
      quantity: ['', Validators.required],
      inpossessionof: ['', Validators.required],
    
    });
  }

  addPossession(): void {
    this.possessions().push(this.createPossessionGroup());
  }

  removePossession(index: number): void {
    if(this.possessions().length>1)
    this.possessions().removeAt(index);
  }

  save(): void {
    if (this.possessionForm.valid) {
      console.log(this.possessionForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}