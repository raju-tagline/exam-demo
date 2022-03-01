import { UserDataService } from '../services/user-data.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable} from 'rxjs';
import { IShowStudentProfileResponse } from '../interface/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class VerifiedStudentDetailsResolverService
  implements Resolve<IShowStudentProfileResponse>
{
  constructor(private userDataService: UserDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IShowStudentProfileResponse> {
    return this.userDataService.verifiedStudentData();
  }
}
