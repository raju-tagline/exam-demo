import { UserDataService } from './../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public tokenValue: boolean = true;
  public token!: string;
  public role!: string;

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.userDataService.token;
    this.role = this.userDataService.role;
    if (this.token && this.role === 'teacher') {
      this.tokenValue = false;
      this.router.navigate(['teacher/dashboard']);
    } else if (this.token && this.role === 'student') {
      this.tokenValue = false;
      this.router.navigate(['student/dashboard']);
    } else {
    }
  }

  public LogIn(): void {
    this.tokenValue = true;
    this.userDataService.LogOut();
  }
}
