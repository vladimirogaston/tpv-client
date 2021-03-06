import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from './user.model';
import { HttpService } from './http.service';
import { Role } from './role.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static END_POINT = "http://localhost:4000/api/v0/authentication";
  private user: User;
  password: string = undefined;
  private onLogin$ = new Subject<User>();

  constructor(private httpService: HttpService, private router: Router) {
  }

  login(mob: string, pass: string): Observable<User> {
    return this.httpService.post(AuthService.END_POINT, { mobile: mob, password: pass})
      .pipe(
        map(jsonToken => {
          const jwtHelper = new JwtHelperService();
          this.user = jsonToken; // {token:jwt} => user.token = jwt
          this.user.mobile = jwtHelper.decodeToken(jsonToken.token).user;  // secret key is not necessary
          this.user.name = jwtHelper.decodeToken(jsonToken.token).name;
          this.user.role = jwtHelper.decodeToken(jsonToken.token).role;
          this.password = pass;
          this.onLogin$.next(this.user);
          return this.user;
        })
      );
  }

  onLogin(): Observable<User> {
    return this.onLogin$.asObservable();
  }

  logout(): void {
    this.user = undefined;
    this.router.navigate(['']).then();
  }

  isAuthenticated(): boolean {
    return this.user != null && !(new JwtHelperService().isTokenExpired(this.user.token));
  }

  hasRoles(roles: Role[]): boolean {
    return this.isAuthenticated() && roles.includes(this.user.role);
  }

  isAdmin(): boolean {
    return this.hasRoles([Role.ADMIN]);
  }

  untilManager(): boolean {
    return this.hasRoles([Role.ADMIN, Role.MANAGER]);
  }

  untilOperator(): boolean {
    return this.hasRoles([Role.ADMIN, Role.MANAGER, Role.OPERATOR]);
  }

  isCustomer(): boolean {
    return this.hasRoles([Role.CUSTOMER]);
  }

  getMobile(): number {
    return this.user ? this.user.mobile : undefined;
  }

  getName(): string {
    return this.user ? this.user.name : '???';
  }

  getToken(): string {
    return this.user ? this.user.token : undefined;
  }

  getRole(): Role {
    return this.user ? this.user.role : undefined;
  }

  getPassword(): string {
    return this.user ? this.password : undefined;
  }

  setMobile(mobile: number): void {
    this.user.mobile = mobile;
  }

  setUser(user: User): void {
    this.user = user;
  }
}