import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authdata = {
    email: '',
    password:''
  };
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private session:SessionService,
    private Srv:HttpService
  ){
    
  }
  PostAll() {
    
    this.Srv.PostData(`Auth/postauth?Email=`+this.authdata.email+'&Password='+this.authdata.password,null).subscribe({
      next: (res: any) => {
        if (res.data.status) {
          sessionStorage.setItem('UserName',res.data.user.name);
          sessionStorage.setItem('Role',res.data.user.userCategory);
this.router.navigate(['auth/verification'], { state: { email: this.authdata.email }});
          
        }else
        this.toastr.error('Invalid Credentials!', 'Error');
      },
      error: (err) => {
        debugger
        this.toastr.error('Invalid Credentials!', 'Error');
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
