import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

  searchQuery: string = '';
  constructor(private Srv:HttpService,
    
    private session:SessionService,
    private router:Router,
       private route:ActivatedRoute
  ){
  //   
  // this.GetAll();
  }
 

  onSearch() {
    //if (this.searchQuery) {
      this.router.navigate(['/entities/files'], { queryParams: { q: this.searchQuery } });
    //}
  }
  logout(){
    sessionStorage.removeItem('token');
    this.session.token=null;
    this.router.navigate(['/auth/login']);
  }
}
