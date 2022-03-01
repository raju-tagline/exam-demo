import { IViewExamResponse } from 'src/app/interface/teacher.interface';
import { UserDataService } from 'src/app/services/user-data.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewExamResolverService implements Resolve<IViewExamResponse> {
  constructor(private userDataService: UserDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IViewExamResponse> {
    return this.userDataService.viewExam();
  }
}
