import { IStudentProfileResponse } from '../../../interface/student.interface';
import { UserDataService } from '../../../services/user-data.service';
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
    this.viewStudent();
  }

  ngOnInit(): void {}

  public viewStudent(): void {
    this.userDataService
      .studentProfile()
      .subscribe((res: IStudentProfileResponse): void => {});
  }
}
