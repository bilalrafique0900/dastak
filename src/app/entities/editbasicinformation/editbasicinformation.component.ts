import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-editbasicinformation',
  templateUrl: './editbasicinformation.component.html',
  styleUrls: ['./editbasicinformation.component.css']
})
export class EditbasicinformationComponent implements OnInit {
  readdmission: any={};
  entity:any;
  IsReference=0;
  maritalstatus='single';
  Motherlivigstatus='alive';
  Fatherlivigstatus='alive';
  IsChildren=0; 
  IsCurrently=0;
  updatebasic:any={};
  ReferenceForm!: FormGroup;
  ChildrenForm!: FormGroup;
    

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
  GetAll() {
    
    this.Srv.GetData(`NewAdmission/getinfo?entity=`+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.updatebasic = res.data;
          this.readdmission.referenceNo=this.entity;
          this.readdmission.assessmentRisk= this.updatebasic.assessmentRisk;
          this.readdmission.dateOfBirth= this.updatebasic.dateOfBirth;
          this.readdmission.age= this.updatebasic.age;
          this.readdmission.religion= this.updatebasic.religion;
          this.readdmission.birthReligion= this.updatebasic.birthReligion;
          this.readdmission.fatherName= this.updatebasic.fatherName;
         // this.readdmission.fatherLivingStatus= this.updatebasic.fatherLivingStatus;
          this.Fatherlivigstatus=this.updatebasic.fatherLivingStatus;
          this.readdmission.motherName= this.updatebasic.motherName;
//this.readdmission.motherLivingStatus= this.updatebasic.motherLivingStatus;
          this.Motherlivigstatus=this.updatebasic.motherLivingStatus;
          this.readdmission.guardianName= this.updatebasic.guardianName;
          this.readdmission.guardianRelation= this.updatebasic.guardianRelation;
          this.readdmission.nationality= this.updatebasic.nationality;
          this.readdmission.gender= this.updatebasic.gender;
          this.readdmission.literacyLevel= this.updatebasic.literacyLevel;
          this.readdmission.phone= this.updatebasic.phone;
          this.readdmission.ethinicity= this.updatebasic.ethinicity;
          this.readdmission.passportNo= this.updatebasic.passportNo;


         // this.readdmission.maritalStatus= this.updatebasic.maritalStatus;
          this.maritalstatus=this.updatebasic.maritalStatus;
          this.readdmission.separatedSince= this.updatebasic.separatedSince;
          this.readdmission.maritalCategory= this.updatebasic.maritalCategory;
          this.readdmission.maritalType= this.updatebasic.maritalType;
          this.readdmission.wifeOf= this.updatebasic.wifeOf;
          this.readdmission.partnerAbusedInDrug= this.updatebasic.partnerAbusedInDrug;
          // Parse the JSON string back into its original form (e.g., an array or object)
this.readdmission.proofOfMarriage = JSON.parse(this.updatebasic.proofOfMarriage);

       //   this.readdmission.proofOfMarriage= this.updatebasic.proofOfMarriage;
      //    this.readdmission.haveChildren= this.updatebasic.haveChildren;
          this.IsChildren=this.updatebasic.haveChildren;
          // this.readdmission.accompanyingChildrenName= this.updatebasic.accompanyingChildrenName;
          // this.readdmission.accompanyingChildrenAge= this.updatebasic.accompanyingChildrenAge;
          // this.readdmission.accompanyingChildrenRelation= this.updatebasic.accompanyingChildrenRelation;
         
         // Parse the JSON strings back into arrays
const childrenChildsNames = JSON.parse(this.updatebasic.accompanyingChildrenName);
const childrenChildsAges = JSON.parse(this.updatebasic.accompanyingChildrenAge);
const childrenChildsRelations = JSON.parse(this.updatebasic.accompanyingChildrenRelation);

// Get the FormArray
const childrensArray = this.ChildrenForm.get('childrens') as FormArray;

// Ensure the FormArray has enough controls for the data
childrenChildsNames.forEach((name: string, index: number) => {
  if (index >= childrensArray.length) {
    // If there are not enough form controls, create new ones
    childrensArray.push(new FormGroup({
      childsName: new FormControl(''),
      childsAge: new FormControl(''),
      childsRelation: new FormControl('')
    }));
  }

  // Set the values
  const childrenGroup = childrensArray.at(index) as FormGroup;
  childrenGroup.get('childsName')?.setValue(name);
  childrenGroup.get('childsAge')?.setValue(childrenChildsAges[index]);
  childrenGroup.get('childsRelation')?.setValue(childrenChildsRelations[index]);
});

         
         
         ////////////////////////////////////////
        //  this.readdmission.currentlyExpecting= this.updatebasic.currentlyExpecting;
          this.IsCurrently=this.updatebasic.currentlyExpecting;
          this.readdmission.expectedDeliveryDate= this.updatebasic.expectedDeliveryDate;


//this.readdmission.IsReference= this.updatebasic.isReferencial;
          this.IsReference=this.updatebasic.isReferencial;
          // this.readdmission.referencialCity= this.updatebasic.referencialCity;
          // this.readdmission.referencialName= this.updatebasic.referencialName;
          // this.readdmission.typeOfReference= this.updatebasic.typeOfReference;


// Parse the JSON strings back into arrays
const referenceNameofReferences = JSON.parse(this.updatebasic.referencialName);
const referenceTypeofReferences = JSON.parse(this.updatebasic.typeOfReference);
const referenceCityofReferences = JSON.parse(this.updatebasic.referencialCity);

// Get the FormArray
const referencesArray = this.ReferenceForm.get('references') as FormArray;

// Ensure the FormArray has enough controls for the data
referenceNameofReferences.forEach((name: string, index: number) => {
  if (index >= referencesArray.length) {
    // If there are not enough form controls, create new ones
    referencesArray.push(new FormGroup({
      nameofReference: new FormControl(''),
      typeofReference: new FormControl(''),
      cityofReference: new FormControl('')
    }));
  }

  // Set the values for each reference
  const referenceGroup = referencesArray.at(index) as FormGroup;
  referenceGroup.get('nameofReference')?.setValue(name);
  referenceGroup.get('typeofReference')?.setValue(referenceTypeofReferences[index]);
  referenceGroup.get('cityofReference')?.setValue(referenceCityofReferences[index]);
});






          ///////////////////////
          this.readdmission.address= this.updatebasic.address;
          this.readdmission.city= this.updatebasic.city;
          this.readdmission.country= this.updatebasic.country;     
          this.readdmission.domicileCity= this.updatebasic.domicileCity;
          this.readdmission.domicileProvince= this.updatebasic.domicileProvince;
          
          this.readdmission.referenceNo=this.updatebasic.referenceNo;
          this.readdmission.fileNo=this.updatebasic.fileNo;
          

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  PostAllRE() {
    this.readdmission.partnerAbusedInDrug = 0;
    this.readdmission.title = this.updatebasic.title;
    this.readdmission.firstName = this.updatebasic.firstName;
    this.readdmission.lastName = this.updatebasic.lastName;
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
    
    this.Srv.PostData(`NewAdmission/postinfo`,this.readdmission).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.readdmission = res.data;
          this.router.navigate(['/entities/files',]);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

  ngOnInit(): void {
    this.GetAll();
   
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
