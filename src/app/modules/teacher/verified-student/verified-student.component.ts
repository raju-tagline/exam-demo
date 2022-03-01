import { ActivatedRoute } from '@angular/router';
import {
  IShowStudentProfileResponse,
  ITeacher,
} from '../../../interface/teacher.interface';
import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verified-student',
  templateUrl: './verified-student.component.html',
  styleUrls: ['./verified-student.component.scss'],
})
export class VerifiedStudentComponent implements OnInit {
  public verifieyData: ITeacher[] = [
    {
      email: '',
      name: '',
      status: '',
      _id: '',
    },
  ];
  public loadData: boolean = true;
  public activeStudent!: number;

  constructor(
    private userDataService: UserDataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.verfieStudent();
  }

  public verfieStudent(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.verifieyData = response.virifedStudent.data;
      this.activeStudent = response.virifedStudent.data.length;
      this.loadData = false;
    });
  }
}
