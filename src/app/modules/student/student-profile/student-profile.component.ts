import { Component, OnInit } from '@angular/core';
import {
  IStudentProfile,
  IStudentProfileResponse,
} from 'src/app/interface/student.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  public studentArr: IStudentProfile[] = [];
  public loadData: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.studentProfile();
  }

  public studentProfile(): void {
    const studentProfile: IStudentProfileResponse =
      this.activatedRoute.snapshot.data['studentProfile'];
    this.studentArr.push(studentProfile?.data);
    this.loadData = false;
  }

  public editMode(id: string): void {
    this.router.navigate(['/student/edit-profile/' + id]);
  }
}
