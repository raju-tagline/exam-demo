import { UserData, UserDataResponse } from './../../../interface';
import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  public token!:any;
  public name!:any;
  
  constructor(
    private userDataService: UserDataService, 
    private toastr: ToastrService,
    private router:Router
    ) {}

  ngOnInit(): void {}

  public onSubmit(event: UserData): void {
    const data = event;

    this.userDataService.login(data).subscribe((res: any) => {
      if (res?.statusCode === 200 && res?.data.role === 'teacher') {
        console.log("teacher login");
        console.log('res.name :>> ', res?.data.name);
        this.token = localStorage.setItem('Token',res?.data.token);
        this.name = localStorage.setItem('name',res?.data.name);
        this.toastr.success(res?.message);
        this.router.navigate(['/teacher/dashboard']);
      } else if(res?.statusCode === 200 && res?.data.role === 'student'){
        console.log("Student login");
        console.log('res.name :>> ', res?.data.name);
        this.token = localStorage.setItem('Token',res?.data.token);
        this.name = localStorage.setItem('name',res?.data.name);
        this.toastr.success(res?.message);
        this.router.navigate(['/student/dashboard'])        
      } else{
        this.toastr.error(res?.message);
      }
    });
  }
}
