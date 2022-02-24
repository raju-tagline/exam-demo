import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { StudentExamPaperComponent } from './student-exam-paper/student-exam-paper.component';
import { EditStudentProfileComponent } from './edit-student-profile/edit-student-profile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ExamPaperComponent,
    ViewExamComponent,
    StudentProfileComponent,
    ForgetPasswordComponent,
    StudentExamPaperComponent,
    EditStudentProfileComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
