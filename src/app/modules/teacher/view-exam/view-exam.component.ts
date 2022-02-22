import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss']
})
export class ViewExamComponent implements OnInit {
  public examDetails = [
    {notes:'', _id:'', subjectName:'', email:'', _v:''}
  ];
  public loadData:boolean = true;

  constructor(private userDataService:UserDataService) { }

  ngOnInit(): void {
    this.userDataService.viewExam().subscribe((res) => {
      this.examDetails = res.data;
      this.loadData = false
      console.log('res :>> ', res);
    })
  }
  
}
