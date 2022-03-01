import { StudentExamListResolverService } from 'src/app/resolver/student-exam-list-resolver.service';
import { StudentProfileResolverService } from 'src/app/resolver/student-profile-resolver.service';
import { ChangePassowrdComponent } from 'src/app/modules/student/change-passowrd/change-passowrd.component';
import { StudentExamPaperComponent } from 'src/app/modules/student/student-exam-paper/student-exam-paper.component';
import { ForgetPasswordComponent } from 'src/app/modules/student/forget-password/forget-password.component';
import { StudentProfileComponent } from 'src/app/modules/student/student-profile/student-profile.component';
import { ViewExamComponent } from 'src/app/modules/student/view-exam/view-exam.component';
import { DashboardComponent } from 'src/app/modules/student/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamPaperComponent } from 'src/app/modules/student/exam-paper/exam-paper.component';
import { AuthGuard } from 'src/app/authguard/auth.guard';
import { EditStudentProfileComponent } from 'src/app/modules/student/edit-student-profile/edit-student-profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'exam-paper',
    component: ExamPaperComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-exam',
    component: ViewExamComponent,
    resolve: { studentExamList: StudentExamListResolverService },
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: StudentProfileComponent,
    resolve: { studentProfile: StudentProfileResolverService },
    canActivate: [AuthGuard],
  },
  {
    path: 'reset-password',
    component: ForgetPasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'change-password',
    component: ChangePassowrdComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'student-exam',
    component: StudentExamPaperComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-profile',
    component: EditStudentProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-profile/:id',
    component: EditStudentProfileComponent,
    resolve: { studentProfile: StudentProfileResolverService },
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
export class StudentRoutingModule {}
