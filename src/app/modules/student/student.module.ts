import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ExamPaperComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
