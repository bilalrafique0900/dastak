import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-addvisitbydastakstaff',
  templateUrl: './addvisitbydastakstaff.component.html',
  styleUrls: ['./addvisitbydastakstaff.component.css']
})
export class AddvisitbydastakstaffComponent implements OnInit {
  visitForm!: FormGroup;
dastakvisit:any={};
  constructor(private fb: FormBuilder,   
      private route:ActivatedRoute,
    private router:Router
     ,private Srv:HttpService) {}

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
      name: ['', Validators.required]
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

    this.dastakvisit.name=JSON.stringify(visitorNames);
 
    this.Srv.PostData(`DastakVisit/postdastakvisit`,this.dastakvisit).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.dastakvisit = res.data;
  this.router.navigate(['/dastak/allvisitsbydastakstaff']);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}

