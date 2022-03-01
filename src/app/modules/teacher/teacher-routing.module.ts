import { VerifiedStudentDetailsResolverService } from './../../resolver/verified-student-details-resolver.Service';
import { VerifiedStudentComponent } from './verified-student/verified-student.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { ShowStudentDataComponent } from './show-student-data/show-student-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyStudentComponent } from './verify-student/verify-student.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthGuard } from 'src/app/auth.guard';
import { StudentListResolverService } from 'src/app/resolver/student-list-resolver.service';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'student-list',
    component: ShowStudentDataComponent,
    resolve: { studentData: StudentListResolverService },
    canActivate: [AuthGuard],
  },
  {
    path: 'verify-student',
    component: VerifyStudentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-exam',
    component: ViewExamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-exam',
    component: CreateExamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verified-student',
    component: VerifiedStudentComponent,
    resolve: { virifedStudent: VerifiedStudentDetailsResolverService },
    canActivate: [AuthGuard],
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
