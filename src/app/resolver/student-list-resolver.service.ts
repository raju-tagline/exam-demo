import { UserDataService } from 'src/app/services/user-data.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IStudentDataResponse } from 'src/app/interface/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentListResolverService
  implements Resolve<IStudentDataResponse>
{
  constructor(private userDataService: UserDataService) {}

  resolve(): Observable<IStudentDataResponse> {
    return this.userDataService.showStudentData();
  }
}
