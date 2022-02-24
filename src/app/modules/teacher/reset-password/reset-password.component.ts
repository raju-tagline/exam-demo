import {
  IResetPassword,
  IResetPasswordResponse,
} from '../../../interface/teacher.interface';
import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
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
