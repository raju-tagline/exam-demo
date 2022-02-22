import { UserData } from './interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService implements OnInit {
  private url: string = environment.url;
  public token: any = localStorage.getItem('Token');
  public name: any = localStorage.getItem('name');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public signUp(data: UserData): Observable<UserData> {
    return this.http.post<UserData>(this.url + 'users/SignUp', data);
  }

  public login(login: UserData): Observable<UserData> {
    return this.http.post<UserData>(this.url + 'users/Login', login);
  }

  public showStudentData(): Observable<UserData> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<UserData>(this.url + 'dashboard/Teachers', {
      headers: headers,
    });
  }

  public viewStudentData(userID: string): Observable<UserData> {
    const headers = new HttpHeaders().set('access-token', this.token);
    const getUrl =
      this.url + 'dashboard/Teachers/viewStudentDetail?id=' + userID;
    return this.http.get<UserData>(getUrl, {
      headers: headers,
    });
  }

  public verifiedStudentData():Observable<UserData>{
    const headers = new HttpHeaders().set('access-token',this.token);
    return this.http.get<UserData>(this.url + 'dashboard/Teachers/StudentForExam',{
      headers:headers
    });
  }

  public viewExam(): Observable<any> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<any>(this.url + 'dashboard/Teachers/viewExam', {
      headers: headers,
    });
  }

  public viewExamData(examId: string): Observable<UserData> {
    const headers = new HttpHeaders().set('access-token', this.token);
    const getUrl =
      this.url + 'dashboard/Teachers/examDetail?id=' + examId;
    return this.http.get<UserData>(getUrl, {
      headers: headers,
    });
  }

  // public viewExam(){
  //   const headers = new HttpHeaders().set('access-token', this.token);
  //   return this.http.get('https://nodejsexamination.herokuapp.com/dashboard/Teachers/examDetail?id=62146ed765f8260015c139dd',{
  //     headers:headers
  //   })
  // }

  public studentDetail(): Observable<UserData> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<UserData>(this.url + 'student/getStudentDetail', {
      headers: headers,
    });
  }

  public viewExamPaper(userId: any): Observable<UserData> {
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.http.get<UserData>(this.url + 'student/examPaper?id=' + userId,{
      headers:headers
    });
  }

  public resetPassword(email:any):Observable<UserData>{
    return this.http.post<UserData>(this.url + 'users/ForgotPassword' , email);
  }

  public viewStudentAllExam(){
    const headers = new HttpHeaders().set('access-token',this.token);
    return this.http.get(this.url + 'student/studentExam',{
      headers:headers
    });
  }
}
