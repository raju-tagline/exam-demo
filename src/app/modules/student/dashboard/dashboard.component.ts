import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public name:any;

  constructor(private userDataService: UserDataService) {
    this.name = this.userDataService.name;
    this.viewStudent();
  }

  ngOnInit(): void {
  }

  public viewStudent(){
    this.userDataService.studentDetail().subscribe((res) => {
      // console.log('res :>> ', res);
    })
  }
}
