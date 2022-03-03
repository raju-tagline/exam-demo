import { IHttpRequestResponse } from './../interface/http-request.interface';
import { SpinnerService } from 'src/app/services/spinner.service';
import { finalize, Observable } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor{
  public token!: string;
  constructor(
    private userDataService: UserDataService,
    private spinnerService: SpinnerService
  ) {}

  intercept(
    req: HttpRequest<IHttpRequestResponse>,
    next: HttpHandler
  ): Observable<HttpEvent<IHttpRequestResponse>> {
    this.token = this.userDataService.token;
    const tokenReq = req.clone({
      headers: new HttpHeaders().set('access-token', this.token),
    });

    this.spinnerService.setSpinner(true);
    return next
      .handle(tokenReq)
      .pipe(finalize(() => this.spinnerService.setSpinner(false)));
  }
}
