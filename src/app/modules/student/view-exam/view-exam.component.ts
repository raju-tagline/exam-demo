import { ActivatedRoute } from '@angular/router';
import {
  IStudentExam,
  IStudentExamResponse,
} from '../../../interface/student.interface';
import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentExamPaperComponent } from '../student-exam-paper/student-exam-paper.component';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss'],
})
export class ViewExamComponent implements OnInit {
  public examArr: IStudentExam[] = [
    {
      Result: '',
      email: '',
      notes: '',
      subjectName: '',
      _id: '',
    },
  ];
  public loadData: boolean = true;
  public totalExam!: number;

  constructor(
    private userDataService: UserDataService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.studentExam();
  }

  public studentExam(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.examArr = response.studentExamList?.data;
      this.totalExam = response.studentExamList?.data.length;
      this.loadData = false;
    });
  }

  public viewExampaper(event: string): void {
    const modalRef = this.modalService.open(StudentExamPaperComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.exampaperId = event;
  }
}
