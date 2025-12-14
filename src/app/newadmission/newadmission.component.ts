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
  auto: any={};
  entity:any;
  file:any;
    address:any;
      city:any;
        country:any;
          domicileCity:any;
            domicileProvince:any;
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
  
    this.file = this.route.snapshot.params["file"];
    this.entity = this.route.snapshot.params["entity"];
  this.GetAll();
  
  }
  GetAll() {
    this.Srv.GetData(`NewAdmission/autofields`).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.auto = res.data;
this.readdmission.fileNo=this.auto.fileNo;
this.readdmission.referenceNo=this.auto.referenceNo;
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  formatCNIC() {
  let value = this.readdmission.cnic.replace(/[^0-9]/g, '');

  if (value.length > 5) {
    value = value.slice(0, 5) + '-' + value.slice(5);
  }
  if (value.length > 13) {
    value = value.slice(0, 13) + '-' + value.slice(13);
  }

  this.readdmission.cnic = value.substring(0, 15); // final formatted length
}
formatPhone() {
  let value = this.readdmission.phone.replace(/[^0-9]/g, '');

  if (value.length > 4) {
    value = value.slice(0, 4) + '-' + value.slice(4);
  }

  this.readdmission.phone = value.substring(0, 12);  // final length: 4+1+7
}
formatAlternatePhone() {
  let value = this.readdmission.phone2.replace(/[^0-9]/g, '');

  if (value.length > 4) {
    value = value.slice(0, 4) + '-' + value.slice(4);
  }

  this.readdmission.phone2 = value.substring(0, 12);  // 0312-1234567 format
}


  PostAllRE() {
    debugger
    this.submitted = true;
    if (this.readdmission.invalid) {
      return; // Stop function execution if the form is invalid
    }
  
    this.readdmission.partnerAbusedInDrug = 0;
    this.readdmission.isReadmission=0;
    this.readdmission.isAdmitted=0;
    this.readdmission.maritalStatus = this.maritalstatus;
    this.readdmission.haveChildren = this.IsChildren;
    this.readdmission.fatherLivingStatus = this.Fatherlivigstatus;
    this.readdmission.motherLivingStatus = this.Motherlivigstatus;
    this.readdmission.isReferential=this.IsReference;
    this.readdmission.currentlyExpecting=this.IsCurrently;
       this.readdmission.address= this.address;
          this.readdmission.city= this.city;
          this.readdmission.country= this.country;     
          this.readdmission.domicileCity= this.domicileCity;
          this.readdmission.domicileProvince= this.domicileProvince;
    debugger;
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
    const referenceNameofReferences = referencesArray.controls.map(reference => reference.get('referencialName')?.value);
    const referenceTypeofReferences = referencesArray.controls.map(reference => reference.get('typeOfReference')?.value);
    const referenceCityofReferences = referencesArray.controls.map(reference => reference.get('referencialCity')?.value);
    this.readdmission.referencialName=JSON.stringify(referenceNameofReferences);
    this.readdmission.typeOfReference=JSON.stringify(referenceTypeofReferences);
    this.readdmission.referencialCity=JSON.stringify(referenceCityofReferences);
    
if (
   !this.readdmission.age ||
  !this.readdmission.religion?.trim() ||
    !this.readdmission.firstName?.trim() ||
      !this.readdmission.lastName?.trim() ||
  !this.readdmission.birthReligion?.trim() ||
  !this.readdmission.fatherName?.trim() ||
  !this.readdmission.gender?.trim() ||
   !this.readdmission.nationality?.trim() 
  // !this.readdmission.phone?.trim()
) {
  alert('Please Fill All Required Fields');
  return;
}

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