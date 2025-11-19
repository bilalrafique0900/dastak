import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  public roleForm!: FormGroup;
  submitted = false;
  gridList:any[]=[];
  curdBtnIsList:boolean = true;
  
  searchText: string='';
 
  constructor(private fb: FormBuilder, private toast: ToastrService, ) {
    ({
    
      
      IsActive: [true],
    });

}
}
