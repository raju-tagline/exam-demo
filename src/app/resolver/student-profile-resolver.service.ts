import { UserDataService } from './../user-data.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IStudentProfileResponse } from '../interface/student.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentProfileResolverService implements Resolve<IStudentProfileResponse> {

  constructor(private userDataService:UserDataService){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IStudentProfileResponse> {
    return this.userDataService.studentDetail();
  }
}
