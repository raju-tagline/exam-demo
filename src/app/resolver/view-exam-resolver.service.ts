import { IViewExamResponse } from './../interface/teacher.interface';
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
export class ViewExamResolverService implements Resolve<IViewExamResponse> {

  constructor(private userDataService:UserDataService){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IViewExamResponse> {
    return this.userDataService.viewExam();
  }
}
