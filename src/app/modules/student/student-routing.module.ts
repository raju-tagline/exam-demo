import { StudentExamListResolverService } from './../../resolver/student-exam-list-resolver.service';
import { StudentProfileResolverService } from './../../resolver/student-profile-resolver.service';
import { ChangePassowrdComponent } from './change-passowrd/change-passowrd.component';
import { StudentExamPaperComponent } from './student-exam-paper/student-exam-paper.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { AuthGuard } from 'src/app/authguard/auth.guard';
import { EditStudentProfileComponent } from './edit-student-profile/edit-student-profile.component';

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
