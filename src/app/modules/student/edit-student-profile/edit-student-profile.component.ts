import { FormGroup, FormControl } from '@angular/forms';
import { UserDataService } from './../../../user-data.service';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IEditStudentResponse,
  IStudentProfile,
  IStudentProfileResponse,
  IUserId,
} from 'src/app/interface/student.interface';

@Component({
  selector: 'app-edit-student-profile',
  templateUrl: './edit-student-profile.component.html',
  styleUrls: ['./edit-student-profile.component.scss'],
})
export class EditStudentProfileComponent implements OnInit, AfterViewInit {
  public userId!: IUserId;
  public student: string = 'Student';
  public loadData: boolean = true;
  public studentArr: IStudentProfile[] = [];
  public reactiveForm!: FormGroup;

  constructor(
    private userDataService: UserDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.userId = { name: this.route.snapshot.paramMap.get('id') };
    this.reactiveForm.setValue(this.userId);
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(),
    });
    this.userDataService.studentProfile().subscribe((res): void => {
      this.studentArr.push(res?.data);
      this.loadData = false;
    });
  }
  public save() {
    const userName: string | any = { name: this.reactiveForm.value.name };
    this.userDataService.updateStudentProfile(userName)
      .subscribe((res: IEditStudentResponse): void => {
        localStorage.setItem('name', this.reactiveForm.value.name);
        this.router.navigate(['/student/profile']);
      });
  }
}
