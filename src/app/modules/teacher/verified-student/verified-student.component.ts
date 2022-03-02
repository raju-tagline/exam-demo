import { ActivatedRoute } from '@angular/router';
import {
  IShowStudentProfileResponse,
  ITeacher,
} from 'src/app/interface/teacher.interface';
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
  public activeStudent!: number;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.verfieStudent();
  }

  public verfieStudent(): void {
    const virifedStudent: IShowStudentProfileResponse =
      this.activatedRoute.snapshot.data['virifedStudent'];
    this.verifieyData = virifedStudent?.data;
    this.activeStudent = virifedStudent?.data.length;
  }
}
