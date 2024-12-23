import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {
  users: any[]=[];
constructor(private Srv:HttpService){
this.GetUsers();
}

  GetUsers() {
    this.Srv.GetData(`User/getusers`).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.users = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  DeleteUsers(id:any) {
    this.Srv.GetData(`User/delete?id=`+id).subscribe({
      next: (res: any) => {
        
        if (res.message) {
          this.GetUsers();
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
}
