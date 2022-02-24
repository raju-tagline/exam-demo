import { IStudentDataResponse, IVerifyStudentDataResponse, IShowStudentProfileResponse, IResetPassword, IViewStudentExamResponse, IViewExamResponse, IResetPasswordResponse } from './interface/teacher';
import { IUserData, IUserDataResponse } from './interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IStudentProfileResponse, IStudentExamResponse } from './interface/student';

@Injectable({
  providedIn: 'root',
})
export class UserDataService implements OnInit {
  private url: string = environment.url;
  public token: string  = localStorage.getItem('Token') || '';
  public name: string  = localStorage.getItem('name') || '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public signUp(data: IUserData): Observable<IUserDataResponse> {
    return this.http.post<IUserDataResponse>(this.url + 'users/SignUp', data);
  }

  public login(login: IUserData): Observable<IUserDataResponse> {
    return this.http.post<IUserDataResponse>(this.url + 'users/Login', login);
  }

  public showStudentData(): Observable<IStudentDataResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<IStudentDataResponse>(this.url + 'dashboard/Teachers', {
      headers: headers,
    });
  }

  public viewStudentData(userID: string): Observable<IVerifyStudentDataResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    const getUrl =
      this.url + 'dashboard/Teachers/viewStudentDetail?id=' + userID;
    return this.http.get<IVerifyStudentDataResponse>(getUrl, {
      headers: headers,
    });
  }

  public verifiedStudentData(): Observable<IShowStudentProfileResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<IShowStudentProfileResponse>(
      this.url + 'dashboard/Teachers/StudentForExam',
      {
        headers: headers,
      }
    );
  }

  public viewExam(): Observable<IViewExamResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<IViewExamResponse>(this.url + 'dashboard/Teachers/viewExam', {
      headers: headers,
    });
  }

  public viewExamData(examId: string): Observable<IViewStudentExamResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    const getUrl = this.url + 'dashboard/Teachers/examDetail?id=' + examId;
    return this.http.get<IViewStudentExamResponse>(getUrl, {
      headers: headers,
    });
  }

  public studentDetail(): Observable<IStudentProfileResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<IStudentProfileResponse>(this.url + 'student/getStudentDetail', {
      headers: headers,
    });
  }

  public viewExamPaper(userId: string): Observable<IUserData> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<IUserData>(
      this.url + 'student/examPaper?id=' + userId,
      {
        headers: headers,
      }
    );
  }

  public resetPassword(emailId: IResetPassword): Observable<IResetPasswordResponse> {
    return this.http.post<IResetPasswordResponse>(
      `${this.url}users/ForgotPassword`,
      emailId
    );
  }

  public viewStudentAllExam() :Observable<IStudentExamResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<IStudentExamResponse>(this.url + 'student/studentExam', {
      headers: headers,
    });
  }

  public studentProfile() :Observable<IStudentProfileResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<IStudentProfileResponse>(this.url + 'student/getStudentDetail', {
      headers: headers,
    });
  }
}
