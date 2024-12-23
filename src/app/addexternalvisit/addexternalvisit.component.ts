import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-addexternalvisit',
  templateUrl: './addexternalvisit.component.html',
  styleUrls: ['./addexternalvisit.component.css']
})
export class AddexternalvisitComponent implements OnInit {
  visitForm!: FormGroup;
  dastakvisit: any={};

  constructor(private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router
     ,private Srv:HttpService

  ) {}

  ngOnInit(): void {
    this.visitForm = this.fb.group({
      visitors: this.fb.array([this.createVisitorGroup()])
    });
  }

  visitors(): FormArray {
    return this.visitForm.get('visitors') as FormArray;
  }

  createVisitorGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      detail: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{7}$')]]
    });
  }

  addVisitor(): void {
    this.visitors().push(this.createVisitorGroup());
  }

  removeVisitor(index: number): void {
    if(this.visitors().length>1)
    this.visitors().removeAt(index);
  }

  save(): void {
    if (this.visitForm.valid) {
      console.log(this.visitForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  Post() {
    const visitorsArray = this.visitForm.get('visitors') as FormArray;
    // Or, if you want to loop through all the visitors and get their 'name' values
    const visitorNames = visitorsArray.controls.map(visitor => visitor.get('name')?.value);
    const visitorDesignations = visitorsArray.controls.map(visitor => visitor.get('designation')?.value);
    const visitorDetails = visitorsArray.controls.map(visitor => visitor.get('detail')?.value);
    const visitorContacts = visitorsArray.controls.map(visitor => visitor.get('contact')?.value);
    this.dastakvisit.name=JSON.stringify(visitorNames);
    this.dastakvisit.designation=JSON.stringify(visitorDesignations);
    this.dastakvisit.detailOfVisitor=JSON.stringify(visitorDetails);
    this.dastakvisit.contactNo=JSON.stringify(visitorContacts);
     this.dastakvisit.time=this.dastakvisit.time+':00';
        this.Srv.PostData(`Visitor/postvisit`,this.dastakvisit).subscribe({
          next: (res: any) => {
            
            if (res.data) {
              
              this.dastakvisit = res.data;
      this.router.navigate(['/dastak/allexternalvisits']);
            }
          },
          error: (err) => {
           // this.usernameError = err ? err.Message : '';
          },
        });
      }
}
