import { StudentData, UserData } from './../../../interface';
import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VerifyStudentComponent } from '../verify-student/verify-student.component';

@Component({
  selector: 'app-show-student-data',
  templateUrl: './show-student-data.component.html',
  styleUrls: ['./show-student-data.component.scss'],
})
export class ShowStudentDataComponent implements OnInit {
  public studentData: StudentData[] = [];
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

  public viewStudentDetails(id:any):void{
    this.userDataService.viewStudentData(id).subscribe((res:any) => {
      const modelRef = this.modalService.open(VerifyStudentComponent);
      modelRef.componentInstance.user = res?.data ; 
      modelRef.componentInstance.student =  res?.data[0].Result ;  
    });
  }
}
