import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'exam-paper',
    component:ExamPaperComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'view-exam',
    component:ViewExamComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'profile',
    component:StudentProfileComponent,
    canActivate:[AuthGuard],
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
export class StudentRoutingModule { }
