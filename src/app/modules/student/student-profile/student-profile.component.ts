import { UserDataService } from 'src/app/services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { IStudentProfile } from 'src/app/interface/student.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  public studentArr: IStudentProfile[] = [];
  public loadData: boolean = true;

  constructor(
    private userDataService: UserDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.studentProfile();
  }

  public studentProfile(): void {
    this.activatedRoute.data.subscribe((response: any): void => {
      this.studentArr.push(response.studentProfile?.data);
      this.loadData = false;
    });
  }

  public editMode(id: string) {
    this.router.navigate(['/student/edit-profile/' + id]);
  }
}
