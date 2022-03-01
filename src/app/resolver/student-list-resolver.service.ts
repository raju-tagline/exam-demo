import { UserDataService } from './../user-data.service';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IStudentDataResponse } from '../interface/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentListResolverService
  implements Resolve<IStudentDataResponse>
{
  constructor(private userDataService: UserDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IStudentDataResponse> {
    return this.userDataService.showStudentData();
  }
}
