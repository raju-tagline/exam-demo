import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BackComponent } from './back/back.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BackComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    BackComponent
  ]
})
export class CoreModule { }
