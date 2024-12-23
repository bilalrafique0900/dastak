import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-readmission',
  templateUrl: './readmission.component.html',
  styleUrls: ['./readmission.component.css']
})
export class ReadmissionComponent implements OnInit {
  readdmission: any={};
  legaladmission: any={};
  IsReference=false;
  IsSingle=true;
  IsChildren=false; 
  IsCurrently=false;
  file : any;
  entity:any;
  ReferenceForm!: FormGroup;
  ChildrenForm!: FormGroup;
  
    

  constructor(private fb: FormBuilder
    ,private cb: FormBuilder,
    private router:Router,
    private route:ActivatedRoute
     ,private Srv:HttpService) {
    this.file = this.route.snapshot.params["file"];
  this.entity = this.route.snapshot.params["entity"];
this.GetAll(); 
  

  }
  

GetAll() {
  this.Srv.GetData(`Menu/getlegalreadmission?file=`+this.file+'&entity='+this.entity).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        
        this.legaladmission = res.data;

      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}
  PostAllRE() {
    
    this.readdmission.proofOfMarriage=JSON.stringify(this.readdmission.proofOfMarriage);
    this.readdmission.cityofReference=JSON.stringify(this.readdmission.cityofReference);
    this.readdmission.isReferencial=JSON.stringify(this.IsReference);
    this.readdmission.currentlyExpecting=this.readdmission.currentlyExpecting;
    this.readdmission.haveChildren=this.IsChildren;
    this.readdmission.maritalStatus=this.readdmission.maritalStatus;
    const childrensArray = this.ChildrenForm.get('childrens') as FormArray;
    const referencesArray = this.ReferenceForm.get('references') as FormArray;
    // Or, if you want to loop through all the visitors and get their 'name' values
    const childrenChildNames = childrensArray.controls.map(children => children.get('childsName')?.value);
    const childrenChildages = childrensArray.controls.map(children => children.get('childsAge')?.value);
    const childrenChildrelations = childrensArray.controls.map(children => children.get('childsRelation')?.value);
    this.readdmission.accompanyingChildrenName=JSON.stringify(childrenChildNames);
    this.readdmission.accompanyingChildrenAge=JSON.stringify(childrenChildages);
    this.readdmission.accompanyingChildrenRelation=JSON.stringify(childrenChildrelations);
    const referenceNameofReferences = referencesArray.controls.map(reference => reference.get('nameofReference')?.value);
    const referenceTypeofReferences = referencesArray.controls.map(reference => reference.get('typeofReference')?.value);
    const referenceCityofReferences = referencesArray.controls.map(reference => reference.get('cityofReference')?.value);
    this.readdmission.referencialName=JSON.stringify(referenceNameofReferences);
    this.readdmission.typeOfReference=JSON.stringify(referenceTypeofReferences);
    this.readdmission.referencialCity=JSON.stringify(referenceCityofReferences);
    this.readdmission.partnerAbusedInDrug=0;
    this.Srv.PostData(`NewAdmission/readmission`,this.readdmission).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.readdmission = res.data;
          this.router.navigate(['/dastak/allclosedfiles',]);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

  ngOnInit(): void {
    this.ReferenceForm = this.fb.group({
      references: this.fb.array([this.createReferenceGroup()])
    });
    this.ChildrenForm = this.fb.group({
      childrens: this.fb.array([this.createChildrenGroup()])
    });
  }
 
  references(): FormArray {
    return this.ReferenceForm.get('references') as FormArray;
  }
  childrens(): FormArray {
    return this.ChildrenForm.get('childrens') as FormArray;
  }


  createReferenceGroup(): FormGroup {
    return this.fb.group({
      nameofReference: ['', Validators.required],
      typeofReference: ['', Validators.required],
      cityofReference: ['', Validators.required],
      
    });
  }
  createChildrenGroup(): FormGroup {
    return this.cb.group({
      childsName: ['', Validators.required],
      childsAge: ['', Validators.required],
      childsRelation: ['', Validators.required],
      
    });
  }

  addReference(): void {
    this.references().push(this.createReferenceGroup());
  }
  addChildren(): void {
    this.childrens().push(this.createChildrenGroup());
  }

  removeReference(index: number): void {
    if(this.references().length>1)
    this.references().removeAt(index);
  }
  removeChildren(index: number): void {
    if(this.childrens().length>1)
    this.childrens().removeAt(index);
  }

  save(): void {
    if (this.ReferenceForm.valid) {
      console.log(this.ReferenceForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
