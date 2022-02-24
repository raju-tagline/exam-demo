import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ExamPaperComponent,
    ViewExamComponent,
    StudentProfileComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
