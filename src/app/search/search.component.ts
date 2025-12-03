import { Component } from '@angular/core';
import { HttpService } from '../core/services/http.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

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

     Delete(file:any,entity:any) {
              Swal.fire({
            title: 'Are you sure?',
            text: "This record will be permanently deleted.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                  this.Srv.GetData(`Menu/delete-file?file=`+file+'&entity='+entity).subscribe({
              next: (res: any) => {
                    if(res?.isDeleted)
               this.Getfile();   
                
                  
                  
        
               
              },
              error: (err) => {
               // this.usernameError = err ? err.Message : '';
              },
            });
              Swal.fire('Deleted!', 'Record has been deleted.', 'success');
            }
          });
        
          
          }
  //     Delete(file:any,entity:any) {
  //   this.Srv.GetData(`Pending/deletepending?file=`+file+'&entity='+entity).subscribe({
  //     next: (res: any) => {
        
  //       if (res.message) {
          
  //         this.Getfile();

  //       }
  //     },
  //     error: (err) => {
       
  //     },
  //   });
  // }
}
