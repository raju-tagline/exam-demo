import { StudentProfileResponse } from './../../../interface/student';
import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { StudentProfile } from 'src/app/interface/student';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  public studentArr: StudentProfile[] = [];
  public loadData: boolean = true;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.studentProfile().subscribe((res: StudentProfileResponse) => {
      this.studentArr.push(res.data);
      this.loadData = false;
    });
  }
}
