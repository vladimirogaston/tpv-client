import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '@shared/login-dialog/login-dialog.component';
import { Subscription } from 'rxjs';
import { User } from '@core/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = undefined;
  onlogin: Subscription;

  constructor(private authService: AuthService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.onlogin = this.authService.onLogin().subscribe((user)=>{
      this.username = user.role;
    });
    this.router.navigateByUrl('/welcome');
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent);
    dialogRef.afterClosed().subscribe(()=>{ console.log('user logged')});
  }

  onLogout() {
    this.username = undefined;
  }

  isLoggedUser() {
    return this.username != undefined;
  }
}