import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-allpendingfiles',
  templateUrl: './allpendingfiles.component.html',
  styleUrls: ['./allpendingfiles.component.css']
})
export class AllpendingfilesComponent {
  pendingdetail: any={};
  constructor(private Srv:HttpService ,
       private route:ActivatedRoute
  ){
  this.GetAll();
  }
  GetAll() {
    this.Srv.GetData(`Pending/pending`).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          
          this.pendingdetail = res.data;

        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }
  // Delete(file:any,entity:any) {
  //   this.Srv.GetData(`Menu/delete-file?file=`+file+'&entity='+entity).subscribe({
  //     next: (res: any) => {
  //       debugger
  //       if(res?.isDeleted)
  //           this.GetAll();
        
          
          

       
  //     },
  //     error: (err) => {
       
  //     },
  //   });
  // }
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
         this.GetAll();   
          
            
            
  
         
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
