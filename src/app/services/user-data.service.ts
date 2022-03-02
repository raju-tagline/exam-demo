import { LoginStatusService } from 'src/app/services/login-status.service';
import {
  IStudentDataResponse,
  IVerifyStudentDataResponse,
  IShowStudentProfileResponse,
  IResetPassword,
  IViewStudentExamResponse,
  IViewExamResponse,
  IResetPasswordResponse,
  IDeleteExamPaperResponse,
} from 'src/app/interface/teacher.interface';
import { IUserData, IUserDataResponse } from 'src/app/interface/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  IStudentProfileResponse,
  IStudentExamResponse,
  IStudentExamPaperResponse,
  IEditStudentResponse,
  IChangeUserPasswordResponse,
  IuserPassword,
} from 'src/app/interface/student.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDataService implements OnInit {
  private url: string = environment.url;
  public token: string = localStorage.getItem('Token') || '';
  public name: string = localStorage.getItem('name') || '';
  public role: string = localStorage.getItem('role') || '';
  public headers = new HttpHeaders().set('access-token', this.token);

  constructor(
    private http: HttpClient,
    private router: Router,
    private loginStatusService: LoginStatusService
  ) {}

  ngOnInit(): void {}

  public signUp(data: IUserData): Observable<IUserDataResponse> {
    return this.http.post<IUserDataResponse>(`${this.url}users/SignUp`, data);
  }

  public login(login: IUserData): Observable<IUserDataResponse> {
    return this.http.post<IUserDataResponse>(`${this.url}users/Login`, login);
  }

  public showStudentData(): Observable<IStudentDataResponse> {
    return this.http.get<IStudentDataResponse>(`${this.url}dashboard/Teachers`);
  }

  public viewStudentData(
    userID: string
  ): Observable<IVerifyStudentDataResponse> {
    const getUrl =
      `${this.url}dashboard/Teachers/viewStudentDetail?id=` + userID;
    return this.http.get<IVerifyStudentDataResponse>(getUrl);
  }

  public verifiedStudentData(): Observable<IShowStudentProfileResponse> {
    return this.http.get<IShowStudentProfileResponse>(
      `${this.url}dashboard/Teachers/StudentForExam`
    );
  }

  public viewExam(): Observable<IViewExamResponse> {
    return this.http.get<IViewExamResponse>(
      `${this.url}dashboard/Teachers/viewExam`
    );
  }

  public viewExamData(examId: string): Observable<IViewStudentExamResponse> {
    const getUrl = `${this.url}dashboard/Teachers/examDetail?id=` + examId;
    return this.http.get<IViewStudentExamResponse>(getUrl);
  }

  // public studentDetail(): Observable<IStudentProfileResponse> {
  //   return this.http.get<IStudentProfileResponse>(
  //     `${this.url}student/getStudentDetail`,
  //     {
  //       headers: this.headers,
  //     }
  //   );
  // }

  public viewExamPaper(userId: string): Observable<IUserData> {
    return this.http.get<IUserData>(
      `${this.url}student/examPaper?id=` + userId
    );
  }

  public resetPassword(
    emailId: IResetPassword
  ): Observable<IResetPasswordResponse> {
    return this.http.post<IResetPasswordResponse>(
      `${this.url}users/ForgotPassword`,
      emailId
    );
  }

  public viewStudentAllExam(): Observable<IStudentExamResponse> {
    return this.http.get<IStudentExamResponse>(
      `${this.url}student/studentExam`
    );
  }

  public studentProfile(): Observable<IStudentProfileResponse> {
    return this.http.get<IStudentProfileResponse>(
      `${this.url}student/getStudentDetail`
    );
  }

  public studentExamPaper(
    examId: string
  ): Observable<IStudentExamPaperResponse> {
    return this.http.get<IStudentExamPaperResponse>(
      `${this.url}student/examPaper?id=` + examId
    );
  }

  public updateStudentProfile(
    userId: string
  ): Observable<IEditStudentResponse> {
    return this.http.put<IEditStudentResponse>(
      `${this.url}student/studentProfile`,
      userId
    );
  }

  public changerUserPassword(
    userPassword: IuserPassword
  ): Observable<IChangeUserPasswordResponse> {
    return this.http.post<IChangeUserPasswordResponse>(
      `${this.url}users/ResetPassword`,
      userPassword
    );
  }

  public deleteExam(examId: string): Observable<IDeleteExamPaperResponse> {
    return this.http.delete<IDeleteExamPaperResponse>(
      `${this.url}dashboard/Teachers/deleteExam?id=` + examId
    );
  }

  public LogOut(): void {
    localStorage.removeItem('Token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    this.router.navigate(['']);
    this.loginStatusService.isLogin$.next(false);
  }
}
