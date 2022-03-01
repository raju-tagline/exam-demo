import { LoginStatusService } from 'src/app/services/login-status.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public token: string = '';
  public role!: string;

  constructor(
    private userDataService: UserDataService,
    private router: Router,
    private loginStatusService: LoginStatusService
  ) {}

  ngOnInit(): void {
    this.loginStatusService.isLogin$.subscribe(
      (value) => (this.token = this.userDataService.token)
    );
    this.token = this.userDataService.token;
    this.role = this.userDataService.role;
  }

  public LogIn(): void {}

  public LogOut(): void {
    this.userDataService.LogOut();
    this.token = '';
  }
}
