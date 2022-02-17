import { ShowStudentDataComponent } from './show-student-data/show-student-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'show-student-data',
    component:ShowStudentDataComponent
  },
  // {
  //   path:'**',
  //   redirectTo:''
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
