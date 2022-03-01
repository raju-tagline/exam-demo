import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from 'src/app/modules/student/student-routing.module';
import { DashboardComponent } from 'src/app/modules/student/dashboard/dashboard.component';
import { ExamPaperComponent } from 'src/app/modules/student/exam-paper/exam-paper.component';
import { ViewExamComponent } from 'src/app/modules/student/view-exam/view-exam.component';
import { StudentProfileComponent } from 'src/app/modules/student/student-profile/student-profile.component';
import { ForgetPasswordComponent } from 'src/app/modules/student/forget-password/forget-password.component';
import { StudentExamPaperComponent } from 'src/app/modules/student/student-exam-paper/student-exam-paper.component';
import { EditStudentProfileComponent } from 'src/app/modules/student/edit-student-profile/edit-student-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePassowrdComponent } from 'src/app/modules/student/change-passowrd/change-passowrd.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ExamPaperComponent,
    ViewExamComponent,
    StudentProfileComponent,
    ForgetPasswordComponent,
    StudentExamPaperComponent,
    EditStudentProfileComponent,
    ChangePassowrdComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    CoreModule,
    ReactiveFormsModule,
  ],
})
export class StudentModule {}
