import { UserDataService } from '../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import {
  IResetPassword,
  IResetPasswordResponse,
} from 'src/app/interface/teacher.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'reset-password',
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
    if (event === localStorage.getItem('email')) {
      this.userDataService
        .resetPassword(data)
        .subscribe((res: IResetPasswordResponse): void => {
          this.toastr.success(res?.message);
        });
    } else {
      this.toastr.warning('Please Enter valid email !!');
    }
  }
}
