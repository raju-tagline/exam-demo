import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  public studentArr: any[] = [
    // {
    //   email: '',
    //   name: '',
    //   role: '',
    //   _id: '',
    // },
  ];
  public loadData: boolean = true;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.studentProfile().subscribe((res: any) => {
      this.studentArr.push(res.data);
      this.loadData = false;
    });
  }
}
