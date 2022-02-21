import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss']
})
export class ViewExamComponent implements OnInit {

  constructor(private userDataService:UserDataService) { }

  ngOnInit(): void {
    this.userDataService.viewExam().subscribe((res) => {
      console.log('res :>> ', res);
    })
  }
  
}
