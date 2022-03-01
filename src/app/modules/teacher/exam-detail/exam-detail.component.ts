import { IQuestions } from 'src/app/interface/teacher.interface';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.scss'],
})
export class ExamDetailComponent implements OnInit {
  @Input() public question!: IQuestions[];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  public close(): void {
    this.activeModal.close();
  }
}
