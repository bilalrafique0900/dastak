import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    address:any;
      city:any;
        country:any;
          domicileCity:any;
            domicileProvince:any;
  file : any;
  entity:any;
  ReferenceForm!: FormGroup;
  ChildrenForm!: FormGroup;
  updatebasic: any={};
  maritalstatus: any;
  Motherlivigstatus: any;
  Fatherlivigstatus: any;
  
    

  constructor(private fb: FormBuilder
    ,private cb: FormBuilder,
    private router:Router,
    private route:ActivatedRoute
     ,private Srv:HttpService) {
      debugger;
    this.file = this.route.snapshot.params["file"];
  this.entity = this.route.snapshot.params["entity"];
  this.readdmission.fileNo2=this.file;
  this.readdmission.referenceNo2=this.entity;
this.GetAll(); 

  

  }
 
  

// GetAll() {
//   this.Srv.GetData(`Menu/getlegalreadmission?file=`+this.file+'&entity='+this.entity).subscribe({
//     next: (res: any) => {
      
//       if (res.data) {       
//         this.legaladmission = res.data;
      
//       }
//     },
//     error: (err) => {
//      // this.usernameError = err ? err.Message : '';
//     },
//   });

//}

 GetAll() {
    
    this.Srv.GetData(`NewAdmission/getinfo?entity=`+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.updatebasic = res.data;
          //this.readdmission.referenceNo=this.entity;
          this.readdmission.assessmentRisk= this.updatebasic.assessmentRisk;
          this.readdmission.dateOfBirth= this.updatebasic.dateOfBirth;
          this.readdmission.age= this.updatebasic.age;
                   this.readdmission.referenceNo= this.updatebasic.referenceNo;
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
              this.readdmission.cnic= this.updatebasic.cnic;
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
          this.readdmission.address= this.address;
          this.readdmission.city= this.city;
          this.readdmission.country= this.readdmission.country;     
          this.readdmission.domicileCity= this.domicileCity;
          this.readdmission.domicileProvince= this.domicileProvince;
          
          //this.readdmission.referenceNo=this.updatebasic.referenceNo;
          //this.readdmission.fileNo=this.updatebasic.fileNo;
          

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });


      this.Srv.GetData(`NewAdmission/autofields`).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        this.readdmission.fileNo=res.data.fileNo;
        this.readdmission.referenceNo=res.data.referenceNo;
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
    this.readdmission.isReadmission=1;
    this.readdmission.isAdmitted=0;
    this.readdmission.firstName=this.updatebasic.firstName;
    this.readdmission.lastName=this.updatebasic.lastName;
    this.readdmission.title=this.updatebasic.title;
   this.readdmission.address= this.address;
          this.readdmission.city= this.city;
          this.readdmission.country= this.country;    
          this.readdmission.domicileCity= this.domicileCity;
          this.readdmission.domicileProvince= this.domicileProvince;
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
    this.readdmission.nameOfReference=JSON.stringify(referenceNameofReferences);
    this.readdmission.typeOfReference=JSON.stringify(referenceTypeofReferences);
    this.readdmission.cityOfReference=JSON.stringify(referenceCityofReferences);
    this.readdmission.partnerAbusedInDrug=0;
    this.Srv.PostData(`NewAdmission/readmission`,this.readdmission).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.readdmission = res.data;
          this.router.navigate(['/dastak/proceedapplication',this.readdmission.fileNo,this.readdmission.referenceNo]);
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
