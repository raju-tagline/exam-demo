import { StudentData, UserData } from './../../../interface';
import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-student-data',
  templateUrl: './show-student-data.component.html',
  styleUrls: ['./show-student-data.component.scss'],
})
export class ShowStudentDataComponent implements OnInit {
  public studentData: StudentData[] = [];
  public studentID!: String;
  public loadData: boolean = true;

  constructor(
    private userDataService: UserDataService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.userDataService.showStudentData().subscribe((data: any) => {
      this.studentData = data.data;
      this.loadData = false;
    });
  }

  public studentProfileDetail(data: any): void {
    this.modalService.open(data);
  }
}
