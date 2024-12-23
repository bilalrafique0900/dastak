import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-adddocument',
  templateUrl: './adddocument.component.html',
  styleUrls: ['./adddocument.component.css']
})
export class AdddocumentComponent {
  
  documentcase: any={};
  file: any;
  entity: any;
  selectedFile: File | null = null;
  constructor(private fb: FormBuilder
    ,private cb: FormBuilder ,
    private Srv:HttpService,
    private router:Router,
    private route:ActivatedRoute
  ){
    this.file = this.route.snapshot.params["file"];
    this.entity = this.route.snapshot.params["entity"];
}
onSubmit(): void {

 let documentModel = {
    ReferenceNo: this.entity,
    Name: this.documentcase.name,
    Detail: this.documentcase.detail,
  };
  if (this.selectedFile) {
    this.Srv
      .addDocument(`Document/postadddocument`,documentModel, this.selectedFile)
      .subscribe(
        (response) => {
          debugger
          if(response.data){
            console.log('Upload successful', response);
            this.router.navigate(['entities/documents',this.file,this.entity])
          }
        },
        (error) => {
          console.error('Upload failed', error);
        }
      );
  } else {
    console.error('No file selected');
  }
}

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}
}