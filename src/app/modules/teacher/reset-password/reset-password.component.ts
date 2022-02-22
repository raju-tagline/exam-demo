import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private userDataService:UserDataService) { }

  ngOnInit(): void {
  }

  public reset(event:any):void{
    console.log('event :>> ', event);
    this.userDataService.resetPassword(event).subscribe((res) => {
      console.log('res :>> ', res);
    });
  }

}
