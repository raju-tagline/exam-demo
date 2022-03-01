import { UserDataService } from 'src/app/services/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public name: string;

  constructor(private userDataService: UserDataService) {
    this.name = this.userDataService.name;
  }

  ngOnInit(): void {}
}
