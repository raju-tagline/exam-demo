import { LoginStatusService } from './../../../services/login-status.service';
import {
  IUserData,
  IUserDataResponse,
} from '../../../interface/user.interface';
import { UserDataService } from '../../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  public userEmail: string = 'raju.tagline+1@gmail.com';
  public userPassword: string = 'Raju1234';
  constructor(
    private userDataService: UserDataService,
    private toastr: ToastrService,
    private router: Router,
    private loginStatusService: LoginStatusService
  ) {}

  ngOnInit(): void {}

  public onSubmit(event: IUserData): void {
    const data = event;

    this.userDataService
      .login(data)
      .subscribe((res: IUserDataResponse): void => {
        this.loginStatusService.isLogin$.next(true);

        if (res?.statusCode === 200 && res?.data.role === 'teacher') {
          localStorage.setItem('Token', res?.data.token);
          localStorage.setItem('name', res?.data.name);
          localStorage.setItem('role', res?.data.role);
          localStorage.setItem('email', res?.data.email);
          this.toastr.success(res?.message);

          this.router.navigate(['/teacher']);
        } else if (res?.statusCode === 200 && res?.data.role === 'student') {
          localStorage.setItem('Token', res?.data.token);
          localStorage.setItem('name', res?.data.name);
          localStorage.setItem('role', res?.data.role);
          localStorage.setItem('email', res?.data.email);
          this.toastr.success(res?.message);
          this.router.navigate(['/student']);
        } else {
          this.toastr.error(res?.message);
        }
      });
  }
}
