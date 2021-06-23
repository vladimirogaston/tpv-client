import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { RecoveryPasswordDialogComponent } from '../recovery-password-dialog/recovery-password-dialog.component';
import { User } from '../../core/user.model';
import { Role } from '@core/role.model';

@Component({
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  
  mobile: string;
  password: string;

  constructor(private auth: AuthService, private router: Router, private dialog: MatDialog) {
  }

  login(): void {
    this.auth.login(this.mobile, this.password).subscribe(
      (user: User) => {
        const role = user.role;
        console.log(user.role === Role.ADMIN);
        this.dialog.closeAll();
      }
    );
  }

  recoverPassword(): void {
    this.dialog.closeAll();
    this.dialog.open(RecoveryPasswordDialogComponent);
  }
}