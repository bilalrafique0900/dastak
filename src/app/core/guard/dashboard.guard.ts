import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable({ providedIn: 'root' })
export class DashboardGuard  {
  constructor(private router: Router, private session: SessionService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if (this.session.token) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}