import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-proceedapplication',
  templateUrl: './proceedapplication.component.html',
  styleUrls: ['./proceedapplication.component.css']
})
export class ProceedapplicationComponent implements OnInit {
  possessionForm!: FormGroup;
  pendadd: any={};
  proceedpost: any={};
   submitted: boolean = false;
  possession:any;
  HasScreened=0;
  entity: any;
  file: any;


  constructor(private pb: FormBuilder,
    private fb: FormBuilder
      ,private cb: FormBuilder ,
     // private toastr:ToastrService,
      private router:Router,
      private Srv:HttpService,
      private route:ActivatedRoute
  ) {
    
    this.entity = this.route.snapshot.params["entity"];
    this.file = this.route.snapshot.params["file"];
  this.GetAll(); 
  }
  
  GetAll() {
    this.Srv.GetData(`Menu/getproceedinfoforreadmission?entity=`+this.entity).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          debugger;
          this.pendadd = res.data.parentinfo;
          if(res.data.admissioninfo!=null){
            if(res.data.admissioninfo.reasonForAdmission!=null)
          this.proceedpost.reasonForAdmission = JSON.parse(res.data.admissioninfo.reasonForAdmission);
          if(res.data.admissioninfo.natureOfAssisstance!=null)
          this.proceedpost.natureOfAssistance = JSON.parse(res.data.admissioninfo.natureOfAssisstance);
          if(res.data.admissioninfo.reasonOfRefuse!=null)
          this.proceedpost.reasonOfRefuse = JSON.parse(res.data.admissioninfo.reasonOfRefuse);
          if(res.data.admissioninfo.whereHasSheReferred!=null)
          this.proceedpost.whereHasSheReferred = JSON.parse(res.data.admissioninfo.whereHasSheReferred);
        this.proceedpost.isAbused = res.data.admissioninfo.isAbused?true:false;
        if(res.data.admissioninfo.interviewDate!=null)
        this.proceedpost.interviewDate = res.data.admissioninfo.interviewDate.toISOString().slice(0, 10);;
        if(res.data.admissioninfo.admissionDate!=null)
        this.proceedpost.admissionDate =new Date(res.data.admissioninfo.admissionDate).toISOString().slice(0, 10);
          
          }
          if(res.data.contactinfo!=null){
            this.proceedpost.familyPhone = res.data.contactinfo.familyPhone
            this.proceedpost.familyName = res.data.contactinfo.familyName
            this.proceedpost.familyRelation = res.data.contactinfo.familyRelation
            this.proceedpost.emergencyPhone = res.data.contactinfo.emergencyPhone
            this.proceedpost.emergencyName = res.data.contactinfo.emergencyName
            this.proceedpost.emergencyRelation = res.data.contactinfo.emergencyRelation

          }

          if(res.data.additionaldetailsinfo!=null){
            this.proceedpost.details = res.data.additionaldetailsinfo.details
            

          }
          if(res.data.documentinfo!=null){
            if(res.data.documentinfo.listOfDocuments!=null)
              this.proceedpost.listOfDocuments = JSON.parse(res.data.documentinfo.listOfDocuments);            
            this.proceedpost.photocopied = res.data.documentinfo.photocopied==1?1:0;

          }
        
        if(res.data.possessioninfo!=null){
          // this.proceedpost.items = res.data.possessioninfo.items
          // this.proceedpost.quantities = res.data.possessioninfo.quantities
          // this.proceedpost.inPossessionOf = res.data.possessioninfo.inPossessionOf
        }
        if(res.data.communicableDiseasesinfo!=null){
          if(res.data.communicableDiseasesinfo.diseases!=null)
            this.proceedpost.diseases = JSON.parse(res.data.communicableDiseasesinfo.diseases);            
          this.proceedpost.HasScreened = res.data.communicableDiseasesinfo.HasScreened==1?1:0;

        }

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  PostProceed() {
      this.submitted = true;
    this.proceedpost.name = this.pendadd.fullName;
    this.proceedpost.referenceNo = this.entity;
    this.proceedpost.fileNo = this.file;
    this.proceedpost.isAdmitted=true;
    this.proceedpost.isReadmission=this.pendadd.isReadmission? true : false;
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
    if (
  !this.proceedpost.reasonForAdmission ||
  !this.proceedpost.natureOfAssistance?.trim() ||
  !this.proceedpost.reasonOfRefuse?.trim() ||
  !this.proceedpost.interviewDate?.trim() ||
  !this.proceedpost.admissionDate?.trim() ||
  !this.proceedpost.details?.trim() ||


   
  !this.proceedpost.listOfDocuments?.trim()
) {
  alert('Please Fill All Required Fields');
  return;
}
    
    
    this.Srv.PostData(`Pending/postproceeddata`,this.proceedpost).subscribe({
      next: (res: any) => {
       if (res) {
    //  this.legalcase =res.data
    // // ✅ Just navigate after success
      this.router.navigate(['/entities/files']);
       }
    },
    error: (err) => {
   //  this.usernameError = err ? err.Message : '';
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
