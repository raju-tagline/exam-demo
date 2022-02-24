import { IStudentProfileResponse } from '../../../interface/student.interface';
import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { IStudentProfile } from 'src/app/interface/student.interface';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  public studentArr: IStudentProfile[] = [];
  public loadData: boolean = true;
  public reactiveForm!: FormGroup;

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userDataService
      .studentProfile()
      .subscribe((res: IStudentProfileResponse): void => {
        this.studentArr.push(res.data);
        this.loadData = false;
      });
  }

  public editMode(id: string) {
    this.router.navigate(['/student/edit-profile/' + id]);
  }
}
