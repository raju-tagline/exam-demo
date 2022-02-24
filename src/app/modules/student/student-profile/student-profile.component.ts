import { IStudentProfileResponse } from './../../../interface/student';
import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { IStudentProfile } from 'src/app/interface/student';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  public studentArr: IStudentProfile[] = [];
  public loadData: boolean = true;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.studentProfile().subscribe((res: IStudentProfileResponse) => {
      this.studentArr.push(res.data);
      this.loadData = false;
    });
  }
}
