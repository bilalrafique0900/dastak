import { Component } from '@angular/core';

@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.css']
})
export class RolePermissionComponent {
  selectedRole: string = '';
    roleCards: { role: string; title: string }[] = [];
  
    onRoleChange() {
      this.roleCards = [];
  
      if (this.selectedRole) {
        this.roleCards.push({
          role: this.selectedRole,
          title: this.getRoleTitle(this.selectedRole),
        });
      }
    }
  
    getRoleTitle(role: string): string {
      switch (role) {
        case 'admin':
          return 'Your Role Will Be Admin';
        case 'manager':
          return 'Your Role Will Be Manager';
        case 'employee':
          return 'Your Role Will Be Employee';
        case 'super':
          return 'Your Role Will Be Super';
        default:
          return 'Role Permission';
      }
    }
  
    onSave(role: string) {
      alert('Role Has Been Saved')
    }
}

