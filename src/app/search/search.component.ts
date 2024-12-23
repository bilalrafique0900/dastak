import { Component } from '@angular/core';
import { HttpService } from '../core/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string | null = null;

  

  ngOnInit(): void {
  
  }
  newfile: any[]=[];
  constructor(private Srv:HttpService,
    private route: ActivatedRoute
  ){
    this.searchQuery='';
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q']; // Get the 'q' parameter from URL
      // Perform search logic here using this.searchQuery
      this.Getfile();
    });
  }
  
  Getfile() {
    let Url='Menu/all-files';
    if(this.searchQuery)
      Url='Menu/all-files?searchQuery='+this.searchQuery;
      this.Srv.GetData(Url).subscribe({
        next: (res: any) => {
          
          if (res.data) {
            debugger;
            this.newfile = res.data;
            this.searchQuery='';
          }
        },
        error: (err) => {
         // this.usernameError = err ? err.Message : '';
        },
      });
    }
}
