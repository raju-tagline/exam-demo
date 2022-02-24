import { IVerifyStudentData, IResult } from './../../../interface/teacher';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-verify-student',
  templateUrl: './verify-student.component.html',
  styleUrls: ['./verify-student.component.scss']
})
export class VerifyStudentComponent implements OnInit {
  @Input() public user!: IVerifyStudentData[];
  @Input() public student!: IResult[];

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  public close():void{
    this.activeModal.close();
  }
}
