import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(private userDataService: UserDataService,private toastr:ToastrService) {}

  ngOnInit(): void {}

  public reset(event: any): void {
    const data:any = {email:event.value};
    this.userDataService.resetPassword(data).subscribe((res)=>{
      this.toastr.success(res?.message);
      console.log('res :>> ', res);
    })
  }
}