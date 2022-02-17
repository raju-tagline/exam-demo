import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  constructor(private http: UserDataService) {}

  ngOnInit(): void {}

  public onSubmit(event: any):void {
    const data = event.value;
    console.log('data :>> ', data);

    this.http.login(data).subscribe((res: any) => {
      console.log('data :>> ', data);
      console.log('res :>> ', res);
      console.log('res.data :>> ', res.data);
      alert(res.message);
    });
    console.log('submitted!!');
  }
}
