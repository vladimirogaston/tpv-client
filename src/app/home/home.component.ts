import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '@shared/login-dialog/login-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;
  onlogin: Subscription;

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.onlogin = this.authService.onLogin().subscribe(user=>{
      this.username = user.name;
    });
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent);
    dialogRef.afterClosed().subscribe(()=>{
      //this.username = this.authService.getName();
    });
  }
}
