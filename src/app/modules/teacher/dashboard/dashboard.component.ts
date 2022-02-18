import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public name: any;

  constructor(private userDataService: UserDataService) {
    this.name = this.userDataService.name;
  }

  ngOnInit(): void {}
}
