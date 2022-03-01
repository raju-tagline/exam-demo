import { UserDataService } from 'src/app/services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  IChangeUserPasswordResponse,
  IuserPassword,
} from 'src/app/interface/student.interface';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  public changePasswordForm!: FormGroup;
  public show: boolean = false;
  constructor(
    private userDataService: UserDataService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl(),
      newPassword: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }

  public changePassword(): void {
    const data: IuserPassword = {
      oldPassword: this.changePasswordForm.value.oldPassword,
      Password: this.changePasswordForm.value.newPassword,
      ConfirmPassword: this.changePasswordForm.value.confirmPassword,
    };
    this.userDataService
      .changerUserPassword(data)
      .subscribe((res: IChangeUserPasswordResponse): void => {
        if (res?.message === 'Reset Password Successfully') {
          this.toastr.success(res?.message);
        } else {
          this.toastr.error(res?.message);
        }
      });
  }

  public password(): void {
    this.show = !this.show;
  }
}
