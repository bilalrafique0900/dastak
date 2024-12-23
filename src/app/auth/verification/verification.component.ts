import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  authdata = {
    email: '',
    passcode:''
  };

  constructor(private router: Router,
    private toastr: ToastrService,
    private session:SessionService,
    private Srv:HttpService
  ) {
    this.authdata.email = this.router.getCurrentNavigation()?.extras.state?.['email'] || history.state?.['email'];
  this.SendVerification();
  }


  

  ngOnInit() {
    
  }
  Verify() {
    
    this.Srv.PostData(`Auth/verify?Email=`+this.authdata.email+'&Passcode='+this.authdata.passcode,null).subscribe({
      next: (res: any) => {
        
        if (res.data.emailverified) {
          this.session.token=res.data.token;
          sessionStorage.setItem("token",res.data.token);
          //.session.token=res.data.token;

            this.router.navigate(['/dashboard']);
        }else
        this.toastr.error('Invalid Passcode!', 'Error');
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
       this.toastr.error('Invalid Passcode!', 'Error');
      },
    });
  }
  SendVerification() {
    
    this.Srv.PostData(`Auth/SendVerification?ToEmail=`+this.authdata.email,null).subscribe({
      next: (res: any) => {
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

}
