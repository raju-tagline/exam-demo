import { FormGroup, FormControl } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IStudentProfile,
  IUserId,
  IUserName,
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.userId = { name: this.activatedRoute.snapshot.paramMap.get('id') };
    this.reactiveForm.setValue(this.userId);
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(),
    });
    this.profile();
  }

  public profile(): void {
    const studentProfile = this.activatedRoute.snapshot.data['studentProfile'];

    this.userDataService.studentProfile().subscribe((res): void => {
      this.studentArr.push(res?.data);
      this.loadData = false;
    });
  }

  public save(): void {
    const userName: IUserName = { name: this.reactiveForm.value.name };

    this.activatedRoute.data.subscribe((res): void => {
      localStorage.setItem('name', this.reactiveForm.value.name);
      this.router.navigate(['/student/profile']);
    });
  }
}
