import { LoginStatusService } from 'src/app/services/login-status.service';
import { IUserData, IUserDataResponse } from 'src/app/interface/user.interface';
import { UserDataService } from 'src/app/services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  // public userEmail: string = 'raju.tagline+1@gmail.com';
  // public userPassword: string = 'Raju1234';
  constructor(
    private userDataService: UserDataService,
    private toastr: ToastrService,
    private router: Router,
    private loginStatusService: LoginStatusService,
    private localstorageService: LocalstorageService
  ) {}

  ngOnInit(): void {}

  public onSubmit(event: IUserData): void {
    const data = event;

    this.userDataService
      .login(data)
      .subscribe((res: IUserDataResponse): void => {
        if (res?.statusCode === 200 && res?.data.role === 'teacher') {
          this.localstorageService.setItem('token', res?.data.token);
          this.localstorageService.setItem('name', res?.data.name);
          this.localstorageService.setItem('email', res?.data.email);
          this.localstorageService.setItem('role', res?.data.role);
          this.loginStatusService.isLogin$.next(true);
          this.toastr.success(res?.message);
          this.router.navigate(['/teacher']);
        } else if (res?.statusCode === 200 && res?.data.role === 'student') {
          this.localstorageService.setItem('token', res?.data.token);
          this.localstorageService.setItem('name', res?.data.name);
          this.localstorageService.setItem('email', res?.data.email);
          this.localstorageService.setItem('role', res?.data.role);
          this.toastr.success(res?.message);
          this.router.navigate(['/student']);
        } else {
          this.toastr.error(res?.message);
        }
      });
  }
}
