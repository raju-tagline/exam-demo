import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { ViewExamComponent } from './view-exam/view-exam.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ExamPaperComponent,
    ViewExamComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
