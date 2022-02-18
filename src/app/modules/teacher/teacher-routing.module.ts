import { ViewExamComponent } from './view-exam/view-exam.component';
import { ShowStudentDataComponent } from './show-student-data/show-student-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyStudentComponent } from './verify-student/verify-student.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'student-list',
    component:ShowStudentDataComponent
  },
  {
    path:'verify-student',
    component:VerifyStudentComponent
  },
  {
    path:'exam',
    component:ViewExamComponent
  },
  {
    path:'**',
    redirectTo:'dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
