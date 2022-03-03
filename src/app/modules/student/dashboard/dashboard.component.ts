import { IStudentProfileResponse } from 'src/app/interface/student.interface';
import { UserDataService } from 'src/app/services/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public name!: string;

  constructor(private userDataService: UserDataService) {
    this.name = localStorage.getItem('name') || '';
    this.viewStudent();
  }

  ngOnInit(): void {}

  public viewStudent(): void {
    this.userDataService
      .studentProfile()
      .subscribe((res: IStudentProfileResponse): void => {});
  }
}
