import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-addmeetingdetail',
  templateUrl: './addmeetingdetail.component.html',
  styleUrls: ['./addmeetingdetail.component.css']
})
export class AddmeetingdetailComponent implements OnInit {
  meetingForm!: FormGroup;
  repost: any={};
  admeeting: any={};

  file : any;
  entity:any;
  fullName='';
  constructor(private mb: FormBuilder ,
    private fb: FormBuilder
    ,private cb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router
     ,private Srv:HttpService
  ) {
    this.file = this.route.snapshot.params["file"];
    this.entity = this.route.snapshot.params["entity"];
  this.GetAll(); 
  }

  ngOnInit(): void {
    this.meetingForm = this.mb.group({
      meetings: this.mb.array([this.createMeetingGroup()])
    });
  }

  meetings(): FormArray {
    return this.meetingForm.get('meetings') as FormArray;
  }

  createMeetingGroup(): FormGroup {
    return this.mb.group({
      name: ['', Validators.required],
      cnic: ['', [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{7}$')]],
      relation: ['' , Validators.required]
      
    
    });
  }

  addMeeting(): void {
    this.meetings().push(this.createMeetingGroup());
  }

  removeMeeting(index: number): void {
    if(this.meetings().length>1)
    this.meetings().removeAt(index);
  }

  save(): void {
    if (this.meetingForm.valid) {
      console.log(this.meetingForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  GetAll() {
  this.Srv.GetData(`Meetings/getmeetingadd?file=`+this.file+'&entity='+this.entity).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        
        this.admeeting = res.data;
       this.fullName=this.admeeting.title+' '+this.admeeting.firstName+' '+this.admeeting.lastName;

      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}



PostAllMeeting() {
  
  this.repost.referenceNo = this.admeeting.referenceNo;
  
  this.repost.nameOfResident = this.fullName;
  this.repost.city = '';
  this.repost.country = '';
  this.repost.startTime=this.repost.startTime+':00';
  this.repost.endTime=this.repost.endTime+':00';
 // this.repost.startAt=this.convertTimeStringToTimeSpan(this.repost.startAt);
  //this.repost.endedAt=this.convertTimeStringToTimeSpan(this.repost.endedAt);
  const meetingsArray = this.meetingForm.get('meetings') as FormArray;
  // Or, if you want to loop through all the visitors and get their 'name' values
  const meetingNames = meetingsArray.controls.map(meeting => meeting.get('name')?.value);
  const meetingCnics = meetingsArray.controls.map(meeting => meeting.get('cnic')?.value);
  const meetingRelations = meetingsArray.controls.map(meeting => meeting.get('relation')?.value);
  this.repost.GuestNames=JSON.stringify(meetingNames);
  this.repost.GuestCnics=JSON.stringify(meetingCnics);
  this.repost.GuestRelations=JSON.stringify(meetingRelations);
  
  this.Srv.PostData(`Meetings/postaddmeeting`,this.repost).subscribe({
    next: (res: any) => {
      
      if (res.data) {
        
        this.repost = res.data;
this.router.navigate(['/entities/meetingrecord',this.file,this.entity]);
      }
    },
    error: (err) => {
     // this.usernameError = err ? err.Message : '';
    },
  });
}
}