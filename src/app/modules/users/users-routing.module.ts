import { UserLoginComponent } from 'src/app/modules/users/user-login/user-login.component';
import { UserSignupComponent } from 'src/app/modules/users/user-signup/user-signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: 'signup',
    component: UserSignupComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
