import {
  IShowStudentData,
  IStudentDataResponse,
  IVerifyStudentDataResponse,
} from 'src/app/interface/teacher.interface';
import { UserDataService } from 'src/app/services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VerifyStudentComponent } from 'src/app/modules/teacher/verify-student/verify-student.component';

@Component({
  selector: 'app-show-student-data',
  templateUrl: './show-student-data.component.html',
  styleUrls: ['./show-student-data.component.scss'],
})
export class ShowStudentDataComponent implements OnInit {
  public studentData: IShowStudentData[] = [];
  public loadData: boolean = true;

  constructor(
    private userDataService: UserDataService,
    private router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const studentData: IStudentDataResponse =
      this.activatedRoute.snapshot.data['studentData'];
    this.studentData = studentData?.data;
    this.loadData = false;
  }

  public viewStudentDetails(id: string): void {
    this.userDataService
      .viewStudentData(id)
      .subscribe((res: IVerifyStudentDataResponse): void => {
        const modelRef = this.modalService.open(VerifyStudentComponent);
        modelRef.componentInstance.user = res?.data;
        modelRef.componentInstance.student = res?.data[0].Result;
      });
  }
}
