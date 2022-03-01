import { ViewExamResolverService } from 'src/app/resolver/view-exam-resolver.service';
import { VerifiedStudentDetailsResolverService } from 'src/app/resolver/verified-student-details-resolver.Service';
import { VerifiedStudentComponent } from 'src/app/modules/teacher/verified-student/verified-student.component';
import { ViewExamComponent } from 'src/app/modules/teacher/view-exam/view-exam.component';
import { ShowStudentDataComponent } from 'src/app/modules/teacher/show-student-data/show-student-data.component';
import { DashboardComponent } from 'src/app/modules/teacher/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyStudentComponent } from 'src/app/modules/teacher/verify-student/verify-student.component';
import { CreateExamComponent } from 'src/app/modules/teacher/create-exam/create-exam.component';
import { ResetPasswordComponent } from 'src/app/modules/teacher/reset-password/reset-password.component';
import { AuthGuard } from 'src/app/authguard/auth.guard';
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
    resolve: { viewExamDetail: ViewExamResolverService },
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
