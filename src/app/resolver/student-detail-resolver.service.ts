import { UserDataService } from '../user-data.service';
import { Injectable, Input } from '@angular/core';
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
export class StudentDetailResolverService implements Resolve<boolean> {
  @Input() public userId!: any;
  constructor(private userDataService: UserDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // return this.userDataService.viewStudentData();
    return of(true);
  }
}
