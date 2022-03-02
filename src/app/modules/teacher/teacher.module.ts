import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from 'src/app/modules/teacher/teacher-routing.module';
import { DashboardComponent } from 'src/app/modules/teacher/dashboard/dashboard.component';
import { ShowStudentDataComponent } from 'src/app/modules/teacher/show-student-data/show-student-data.component';
import { VerifyStudentComponent } from 'src/app/modules/teacher/verify-student/verify-student.component';
import { ViewExamComponent } from 'src/app/modules/teacher/view-exam/view-exam.component';
import { CreateExamComponent } from 'src/app/modules/teacher/create-exam/create-exam.component';
import { ExamDetailComponent } from 'src/app/modules/teacher/exam-detail/exam-detail.component';
import { VerifiedStudentComponent } from 'src/app/modules/teacher/verified-student/verified-student.component';
import { ResetPasswordComponent } from 'src/app/modules/teacher/reset-password/reset-password.component';
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
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TeacherModule {}
