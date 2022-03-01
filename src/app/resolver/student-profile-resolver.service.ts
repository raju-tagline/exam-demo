import { UserDataService } from 'src/app/services/user-data.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  IEditStudentResponse,
  IStudentProfileResponse,
} from 'src/app/interface/student.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentProfileResolverService
  implements Resolve<IStudentProfileResponse | IEditStudentResponse>
{
  constructor(private userDataService: UserDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IStudentProfileResponse | IEditStudentResponse> {
    const id = route.paramMap.get('id');
    if (id) {
      return this.userDataService.updateStudentProfile(id);
    } else {
      return this.userDataService.studentProfile();
    }
  }
}
