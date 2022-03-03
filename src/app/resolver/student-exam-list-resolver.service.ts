import { IStudentExamResponse } from 'src/app/interface/student.interface';
import { UserDataService } from 'src/app/services/user-data.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentExamListResolverService
  implements Resolve<IStudentExamResponse>
{
  constructor(private userDataService: UserDataService) {}

  resolve(): Observable<IStudentExamResponse> {
    return this.userDataService.viewStudentAllExam();
  }
}
