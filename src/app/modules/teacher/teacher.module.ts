import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowStudentDataComponent } from './show-student-data/show-student-data.component';
import { VerifyStudentComponent } from './verify-student/verify-student.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { VerifiedStudentComponent } from './verified-student/verified-student.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ShowStudentDataComponent,
    VerifyStudentComponent,
    ViewExamComponent,
    CreateExamComponent,
    ExamDetailComponent,
    VerifiedStudentComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }
