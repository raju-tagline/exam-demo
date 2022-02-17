import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowStudentDataComponent } from './show-student-data/show-student-data.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ShowStudentDataComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
