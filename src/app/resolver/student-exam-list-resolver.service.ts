import { IStudentExamResponse } from './../interface/student.interface';
import { UserDataService } from './../user-data.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentExamListResolverService implements Resolve<IStudentExamResponse> {

  constructor(private userDataService:UserDataService){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IStudentExamResponse> {
    return this.userDataService.viewStudentAllExam();
  }
}
