import { UserDataService } from './../../../user-data.service';
import {
  IResetPassword,
  IResetPasswordResponse,
} from './../../../interface/teacher.interface';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(
    private userDataService: UserDataService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public reset(event: string): void {
    const data: IResetPassword = { email: event };
    this.userDataService
      .resetPassword(data)
      .subscribe((res: IResetPasswordResponse): void => {
        this.toastr.success(res?.message);
      });
  }
}
