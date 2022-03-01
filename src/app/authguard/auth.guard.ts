import { UserDataService } from 'src/app/services/user-data.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const token = this.userDataService.token;
    if (token) {
      return true;
    } else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
