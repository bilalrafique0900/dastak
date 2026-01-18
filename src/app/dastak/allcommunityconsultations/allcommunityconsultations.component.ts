import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allcommunityconsultations',
  templateUrl: './allcommunityconsultations.component.html',
  styleUrls: ['./allcommunityconsultations.component.css']
})
export class AllCommunityConsultationsComponent {
  legal: any[]=[];
  entity: any;
  searchText: string = '';
filteredLegal: any[] = [];
  
  constructor(private Srv:HttpService ,
       private route:ActivatedRoute
  ){
    
    this.entity = this.route.snapshot.params["entity"];
  this.GetAll();
  }
GetAll() {
  this.Srv.GetData(`LegalDetail/getallcommunity`).subscribe({
    next: (res: any) => {
      if (res.data) {
        this.legal = res.data;
        this.filteredLegal = res.data; // initialize list
      }
    }
  });
}

applyFilter() {
  const search = this.searchText.toLowerCase().trim();

  if (!search) {
    this.filteredLegal = this.legal;
  } else {
    this.filteredLegal = this.legal.filter(x =>
      x.name?.toLowerCase().includes(search)
    );
  }
}
// Delete(id:any) {
//     this.Srv.GetData(`LegalDetail/gettdeleteallcommunity?id=`+id).subscribe({
//       next: (res: any) => {
        
//         if (res.message) {
          
//           this.GetAll();

//         }
//       },
//       error: (err) => {
       
//       },
//     });
//   }
   Delete(id:any) {
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
               this.Srv.GetData(`LegalDetail/gettdeleteallcommunity?id=`+id).subscribe({
      next: (res: any) => {
        
        if (res.message) {
          
          this.GetAll();  
              
                
        }
      
             
            },
            error: (err) => {
             // this.usernameError = err ? err.Message : '';
            },
          });
            Swal.fire('Deleted!', 'Record has been deleted.', 'success');
          }
        });
      
        
        }
}
