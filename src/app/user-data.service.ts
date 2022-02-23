import { ViewExam, VerifyStudentData, ShowStudentDataResponse, VerifyStudentDataResponse, ShowStudentProfileResponse, Reset, ViewStudentExamResponse, ViewExamResponse } from './interface/teacher';
import { UserData, StudentData, ResetPassword, UserDataResponse } from './interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StudentExam, StudentProfile, StudentProfileResponse, StudentExamResponse } from './interface/student';

@Injectable({
  providedIn: 'root',
})
export class UserDataService implements OnInit {
  private url: string = environment.url;
  public token: any  = localStorage.getItem('Token');
  public name: any  = localStorage.getItem('name');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public signUp(data: UserData): Observable<UserData> {
    return this.http.post<UserData>(this.url + 'users/SignUp', data);
  }

  public login(login: UserData): Observable<UserDataResponse> {
    return this.http.post<UserDataResponse>(this.url + 'users/Login', login);
  }

  public showStudentData(): Observable<ShowStudentDataResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<ShowStudentDataResponse>(this.url + 'dashboard/Teachers', {
      headers: headers,
    });
  }

  public viewStudentData(userID: string): Observable<VerifyStudentDataResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    const getUrl =
      this.url + 'dashboard/Teachers/viewStudentDetail?id=' + userID;
    return this.http.get<VerifyStudentDataResponse>(getUrl, {
      headers: headers,
    });
  }

  public verifiedStudentData(): Observable<ShowStudentProfileResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<ShowStudentProfileResponse>(
      this.url + 'dashboard/Teachers/StudentForExam',
      {
        headers: headers,
      }
    );
  }

  public viewExam(): Observable<ViewExamResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<ViewExamResponse>(this.url + 'dashboard/Teachers/viewExam', {
      headers: headers,
    });
  }

  public viewExamData(examId: string): Observable<ViewStudentExamResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    const getUrl = this.url + 'dashboard/Teachers/examDetail?id=' + examId;
    return this.http.get<ViewStudentExamResponse>(getUrl, {
      headers: headers,
    });
  }

  public studentDetail(): Observable<UserData> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<UserData>(this.url + 'student/getStudentDetail', {
      headers: headers,
    });
  }

  public viewExamPaper(userId: string): Observable<UserData> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<UserData>(
      this.url + 'student/examPaper?id=' + userId,
      {
        headers: headers,
      }
    );
  }

  public resetPassword(emailId: Reset): Observable<ResetPassword> {
    return this.http.post<ResetPassword>(
      `${this.url}users/ForgotPassword`,
      emailId
    );
  }

  public viewStudentAllExam() :Observable<StudentExamResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<StudentExamResponse>(this.url + 'student/studentExam', {
      headers: headers,
    });
  }

  public studentProfile() :Observable<StudentProfileResponse> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<StudentProfileResponse>(this.url + 'student/getStudentDetail', {
      headers: headers,
    });
  }
}
