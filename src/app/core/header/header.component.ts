import { LoginStatusService } from 'src/app/services/login-status.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public token: string = localStorage.getItem('token') || '';
  public role!: string;

  constructor(
    private userDataService: UserDataService,
    private loginStatusService: LoginStatusService
  ) {}

  ngOnInit(): void {
    this.loginStatusService.isLogin$.subscribe((value) => {
      this.token = localStorage.getItem('token') || '';
    });
    this.role = this.userDataService.role;
  }

  public LogIn(): void {}

  public LogOut(): void {
    this.userDataService.LogOut();
    this.token = '';
  }
}
