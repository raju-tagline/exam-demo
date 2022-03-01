import {
  IViewStudentExamResponse,
  IViewExam,
  IDeleteExamPaperResponse,
  IViewExamResponse,
} from 'src/app/interface/teacher.interface';
import { UserDataService } from 'src/app/services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExamDetailComponent } from 'src/app/modules/teacher/exam-detail/exam-detail.component';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vierExam();
  }

  public vierExam(): void {
    const viewExamDetail: IViewExamResponse =
      this.activatedRoute.snapshot.data['viewExamDetail'];
    this.examDetails = viewExamDetail?.data;
    this.loadData = false;
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
          this.vierExam();
        } else {
          this.toastr.error('Something went wrong!');
        }
      });
  }
}
