import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {

  constructor(
    private http: UserDataService, 
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {}

  public onSubmit(event: any): void {
    const data = event.value;
    console.log('data :>> ', data);

    this.http.login(data).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.toastr.success(res.message);
      }
      else{
        this.toastr.error(res.message);
      }
    });
  }
}
