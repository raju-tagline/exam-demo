import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verified-student',
  templateUrl: './verified-student.component.html',
  styleUrls: ['./verified-student.component.scss'],
})
export class VerifiedStudentComponent implements OnInit {
  public verifieyData = [
    {
      email: '',
      name: '',
      status: '',
      _id: '',
    },
  ];
  public loadData:boolean = true;
  public activeStudent!:number;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.verifiedStudentData().subscribe((res:any) => {
      this.verifieyData = res?.data;
      this.activeStudent = res?.data.length;
      this.loadData = false;
      // console.log('res :>> ', res?.data.length);
    });
  }
}