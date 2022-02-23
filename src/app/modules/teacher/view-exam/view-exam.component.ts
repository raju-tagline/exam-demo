import { ViewStudentExamResponse, ViewExamResponse, ViewExam } from './../../../interface/teacher';
import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExamDetailComponent } from '../exam-detail/exam-detail.component';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss']
})
export class ViewExamComponent implements OnInit {
  public examDetails:ViewExam[] = [
    {notes:'', _id:'', subjectName:'', email:'', _v:''}
  ];
  public loadData:boolean = true;

  constructor(private userDataService:UserDataService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userDataService.viewExam().subscribe((res:ViewExamResponse) => {
      this.examDetails = res.data;
      this.loadData = false
    })
  }

  public viewExamDetails(id:string){
    this.userDataService.viewExamData(id).subscribe((res:any) => {
      const modelRef = this.modalService.open(ExamDetailComponent);
      modelRef.componentInstance.question = res?.data.questions;
      console.log('res?.data.questions :>> ', res?.data.questions);
      console.log('view exam details res :>> ', res);
    })
  }
  
}
