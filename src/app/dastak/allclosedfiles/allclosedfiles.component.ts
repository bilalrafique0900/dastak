import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-allclosedfiles',
  templateUrl: './allclosedfiles.component.html',
  styleUrls: ['./allclosedfiles.component.css']
})
export class AllclosedfilesComponent {
  closefile: any[]=[];
  constructor(private Srv:HttpService){
  this.Getclosedfile();
  }
  
  Getclosedfile() {
      this.Srv.GetData(`LegalDetail/get-deactivated`).subscribe({
        next: (res: any) => {
          
          if (res.data) {
            
            this.closefile = res.data;
  
          }
        },
        error: (err) => {
         // this.usernameError = err ? err.Message : '';
        },
      });
    }
  //    Delete(file:any,entity:any) {
  //   this.Srv.GetData(`Menu/delete-file?file=`+file+'&entity='+entity).subscribe({
  //     next: (res: any) => {
  //           if(res?.isDeleted)
  //        this.Getclosedfile(); 
        
          
          

       
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
           this.Getclosedfile();   
            
              
              
    
           
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
