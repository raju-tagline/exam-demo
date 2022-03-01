import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { BackComponent } from 'src/app/core/back/back.component';
import { ResetPasswordComponent } from 'src/app/core/reset-password/reset-password.component';
import { ChangePasswordComponent } from 'src/app/core/change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    BackComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    BackComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
  ],
})
export class CoreModule {}
