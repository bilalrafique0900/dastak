import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../core/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newadmission',
  templateUrl: './newadmission.component.html',
  styleUrls: ['./newadmission.component.css']
})
export class NewadmissionComponent implements OnInit {
  readdmission: any={};
  entity:any;
  IsReference=0;
  maritalstatus='single';
  Motherlivigstatus='alive';
  Fatherlivigstatus='alive';
  IsChildren=0; 
  IsCurrently=0;
  
  ReferenceForm!: FormGroup;
  ChildrenForm!: FormGroup;
  submitted=false;

  constructor(private fb: FormBuilder,private cb: FormBuilder,
    private route:ActivatedRoute,
    
    private router:Router,
    private Srv:HttpService) {
    this.entity = this.route.snapshot.params["entity"];
    this.ReferenceForm = this.fb.group({
      references: this.fb.array([this.createReferenceGroup()])
    });
    this.ChildrenForm = this.fb.group({
      childrens: this.fb.array([this.createChildrenGroup()])
    });
  }

  PostAllRE() {
    if (this.readdmission.invalid) {
      return; // Stop function execution if the form is invalid
    }
  
    this.readdmission.partnerAbusedInDrug = 0;
   
    this.readdmission.maritalStatus = this.maritalstatus;
    this.readdmission.haveChildren = this.IsChildren;
    this.readdmission.fatherLivingStatus = this.Fatherlivigstatus;
    this.readdmission.motherLivingStatus = this.Motherlivigstatus;
    this.readdmission.isReferential=this.IsReference;
    this.readdmission.currentlyExpecting=this.IsCurrently;
    this.readdmission.proofOfMarriage=JSON.stringify(this.readdmission.proofOfMarriage);
    const childrensArray = this.ChildrenForm.get('childrens') as FormArray;
    // Or, if you want to loop through all the visitors and get their 'name' values
    const childrenChildsNames = childrensArray.controls.map(children => children.get('childsName')?.value);
    const childrenChildsAges = childrensArray.controls.map(children => children.get('childsAge')?.value);
    const childrenChildsRelations = childrensArray.controls.map(children => children.get('childsRelation')?.value);
    this.readdmission.accompanyingChildrenName=JSON.stringify(childrenChildsNames);
    this.readdmission.accompanyingChildrenAge=JSON.stringify(childrenChildsAges);
    this.readdmission.accompanyingChildrenRelation=JSON.stringify(childrenChildsRelations);
    const referencesArray = this.ReferenceForm.get('references') as FormArray;
    // Or, if you want to loop through all the visitors and get their 'name' values
    const referenceNameofReferences = referencesArray.controls.map(reference => reference.get('nameofReference')?.value);
    const referenceTypeofReferences = referencesArray.controls.map(reference => reference.get('typeofReference')?.value);
    const referenceCityofReferences = referencesArray.controls.map(reference => reference.get('cityofReference')?.value);
    this.readdmission.nameOfReference=JSON.stringify(referenceNameofReferences);
    this.readdmission.typeOfReference=JSON.stringify(referenceTypeofReferences);
    this.readdmission.cityOfReference=JSON.stringify(referenceCityofReferences);
    
    this.Srv.PostData(`NewAdmission/readmission`,this.readdmission).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          //this.readdmission = res.data;
          this.router.navigate(['/dastak/proceedapplication',res.data.fileNo,res.data.referenceNo]);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

  ngOnInit(): void {
    
   
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