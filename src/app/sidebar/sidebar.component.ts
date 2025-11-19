import { Component } from '@angular/core';
import { SessionService } from '../core/services/session.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public session:SessionService){

  }
}
