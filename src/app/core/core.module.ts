import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BackComponent } from './back/back.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, BackComponent, ResetPasswordComponent, ChangePasswordComponent],
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  exports: [HeaderComponent, BackComponent, ResetPasswordComponent,ChangePasswordComponent],
})
export class CoreModule {}
