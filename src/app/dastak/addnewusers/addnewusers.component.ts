import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addnewusers',
  templateUrl: './addnewusers.component.html',
  styleUrls: ['./addnewusers.component.css']
})
export class AddnewusersComponent {
  userdata: any={};
  public registerForm!: FormGroup;
  submitted=false;
  constructor(private Srv:HttpService,
    private readonly fb: FormBuilder,
     private route:ActivatedRoute,
    private router:Router
    ){

    }
    



  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      userCategory: ['', Validators.required]
    }, {
      validator: this.mustMatch('password', 'confirmPassword') // Custom validator for password match
    });
  }

  // Custom validator to check if the password and confirm password fields match
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  AddUser() {
    
    this.submitted = true;

    // Stop if the form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.Srv.PostData(`User/add`,this.registerForm.value).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          //this.userdata = res.data;
          this.router.navigate(["/dastak/allusers"]);
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  // Submit handler
  onSubmit() {
    this.submitted = true;

    // Stop if the form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // Display form values on success
    console.log(this.registerForm.value);
  }

  // Helper method to access form controls in template
  get f() { return this.registerForm.controls; }
}

  


