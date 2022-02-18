import { UserData } from './../../../interface';
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

  constructor(
    private http: UserDataService, 
    private toastr: ToastrService,
    private router:Router
    ) {}

  ngOnInit(): void {}

  public onSubmit(event: any): void {
    const data = event.value;

    this.http.login(data).subscribe((res: any) => {
      if (res?.statusCode === 200 && res?.data.role === 'teacher') {
        console.log("teacher login");
        this.token = localStorage.setItem('Token',res.data.token);
        this.toastr.success(res.message);
        this.router.navigate(['/teacher/dashboard']);
      } else if(res?.statusCode === 200 && res?.data.role === 'student'){
        console.log("Student login");
        this.token = localStorage.setItem('Token',res.data.token);
        this.toastr.success(res.message);
        // this.router.navigate([''])        
      } else{
        this.toastr.error(res.message);
      }
    });
  }
}
