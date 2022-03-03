import { UserDataService } from 'src/app/services/user-data.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IShowStudentProfileResponse } from 'src/app/interface/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class VerifiedStudentDetailsResolverService
  implements Resolve<IShowStudentProfileResponse>
{
  constructor(private userDataService: UserDataService) {}

  resolve(): Observable<IShowStudentProfileResponse> {
    return this.userDataService.verifiedStudentData();
  }
}
