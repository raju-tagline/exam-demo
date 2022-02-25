import {
  IViewStudentExamResponse,
  IViewExamResponse,
  IViewExam,
  IDeleteExamPaperResponse,
} from '../../../interface/teacher.interface';
import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExamDetailComponent } from '../exam-detail/exam-detail.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss'],
})
export class ViewExamComponent implements OnInit {
  public examDetails: IViewExam[] = [
    { notes: '', _id: '', subjectName: '', email: '', _v: '' },
  ];
  public loadData: boolean = true;

  constructor(
    private userDataService: UserDataService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userDataService
      .viewExam()
      .subscribe((res: IViewExamResponse): void => {
        this.examDetails = res.data;
        this.loadData = false;
      });
  }

  public viewExamDetails(id: string): void {
    this.userDataService
      .viewExamData(id)
      .subscribe((res: IViewStudentExamResponse): void => {
        const modelRef = this.modalService.open(ExamDetailComponent);
        modelRef.componentInstance.question = res?.data.questions;
      });
  }

  public deleteExamDetails(id: string): void {
    this.userDataService
      .deleteExam(id)
      .subscribe((res: IDeleteExamPaperResponse): void => {
        if (res?.message === 'Delete exam successfully') {
          this.toastr.success(res?.message);
        } else {
          this.toastr.error('Something went wrong!');
        }
      });
  }
}
