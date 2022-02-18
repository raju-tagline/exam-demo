import { StudentData, UserData } from './../../../interface';
import { UserDataService } from './../../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-student-data',
  templateUrl: './show-student-data.component.html',
  styleUrls: ['./show-student-data.component.scss'],
})
export class ShowStudentDataComponent implements OnInit {
  public studentData: StudentData[] = [ ];
  public studentID!:String ;


  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.showStudentData().subscribe((data: any) => {
      this.studentData = data.data;
    });
  }

  getId(id:any){
    this.studentID = id;
    console.log('id :>> ', this.studentID);
    // this.userDataService.viewStudentData(id).subscribe((data: any) => {
    //   this.studentID = data.data.name;
    //   console.log('this.studentID :>> ', this.studentID);
    // });
  }
}
