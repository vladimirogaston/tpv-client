import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '@shared/login-dialog/login-dialog.component';
import { Subscription } from 'rxjs';
import { User } from '@core/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  username: string = undefined;
  private onlogin: Subscription;

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit() {
    this.onlogin = this.authService.onLogin().subscribe((user: User)=>{
      if(user) this.username = user.role;
    });
  }

  ngOnDestroy() {
    this.onlogin.unsubscribe();
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent);
    dialogRef.afterClosed().subscribe(()=>{ console.log('user logged')});
  }

  onLogout() {
    this.username = undefined;
  }
}