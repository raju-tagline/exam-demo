import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowStudentDataComponent } from './show-student-data/show-student-data.component';
import { VerifyStudentComponent } from './verify-student/verify-student.component';
import { ViewExamComponent } from './view-exam/view-exam.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ShowStudentDataComponent,
    VerifyStudentComponent,
    ViewExamComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
