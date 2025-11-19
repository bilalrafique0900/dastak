import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {
  searchQuery: string | null = null;

  

  ngOnInit(): void {
  
  }
  newfile: any[]=[];
  constructor(private Srv:HttpService,
    private route: ActivatedRoute,
    public session: SessionService
  ){
    this.searchQuery='';
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q']; // Get the 'q' parameter from URL
      // Perform search logic here using this.searchQuery
      this.Getfile();
    });
  }
  
  Getfile() {
    let Url='Menu/files';
    if(this.searchQuery)
      Url='Menu/files?searchQuery='+this.searchQuery;
      this.Srv.GetData(Url).subscribe({
        next: (res: any) => {
          
          if (res.data) {
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
