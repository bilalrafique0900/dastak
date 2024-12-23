import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  UserId:any;
  userdata: any={};
  constructor(private Srv:HttpService,
     private route:ActivatedRoute,
    private router:Router
    ){
    this.UserId = this.route.snapshot.params["Id"];
  }
  ngOnInit(){
this.GetUserById();
  }

  GetUserById() {
    this.Srv.GetData(`User/getuserbyid?id=`+this.UserId).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.userdata = res.data;
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  UpdateUser() {
    
    this.Srv.PostData(`User/edit?id=`+this.UserId,this.userdata).subscribe({
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
}
