import { UserDataService } from 'src/app/services/user-data.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  IStudentExamPaper,
  IStudentExamPaperResponse,
} from 'src/app/interface/student.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-exam-paper',
  templateUrl: './student-exam-paper.component.html',
  styleUrls: ['./student-exam-paper.component.scss'],
})
export class StudentExamPaperComponent implements OnInit {
  @Input() public exampaperId!: string;
  public examArr: IStudentExamPaper[] = [
    {
      options: '',
      question: '',
      _id: '',
    },
  ];
  public totalQuestion!: number;

  constructor(
    private userDataService: UserDataService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.examPaper();
  }

  public examPaper(): void {
    this.userDataService
      .studentExamPaper(this.exampaperId)
      .subscribe((res: IStudentExamPaperResponse): void => {
        this.examArr = res?.data;
        this.totalQuestion = res?.data.length;
      });
  }

  public close(): void {
    this.activeModal.close();
  }
}
