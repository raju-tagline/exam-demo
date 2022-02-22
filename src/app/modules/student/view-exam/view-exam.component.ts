import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss'],
})
export class ViewExamComponent implements OnInit {
  public examArr = [
    { 
      Result: '', 
      email: '', 
      notes: '', 
      subjectName: '', 
      _id: '' 
    },
  ];
  public loadData:boolean = true;
  public totalExam!:number

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.viewStudentAllExam().subscribe((res: any) => {
      this.examArr = res?.data;
      this.totalExam = res?.data.length;
      this.loadData = false;
      // console.log('view all exam res :>> ', res?.data.length);
    });
  }
}
