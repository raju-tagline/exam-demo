import { IStudentExamResponse } from 'src/app/interface/student.interface';
import { UserDataService } from 'src/app/services/user-data.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentExamListResolverService
  implements Resolve<IStudentExamResponse>
{
  constructor(private userDataService: UserDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IStudentExamResponse> {
    return this.userDataService.viewStudentAllExam();
  }
}
