import { ActivatedRoute } from '@angular/router';
import {
  IStudentExam,
  IStudentExamResponse,
} from 'src/app/interface/student.interface';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentExamPaperComponent } from 'src/app/modules/student/student-exam-paper/student-exam-paper.component';

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
  public totalExam!: number;

  constructor(
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.studentExam();
  }

  public studentExam(): void {
    const studentExamList: IStudentExamResponse =
      this.activatedRoute.snapshot.data['studentExamList'];
    this.examArr = studentExamList?.data;
    this.totalExam = studentExamList?.data.length;
  }

  public viewExampaper(event: string): void {
    const modalRef = this.modalService.open(StudentExamPaperComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.exampaperId = event;
  }
}
