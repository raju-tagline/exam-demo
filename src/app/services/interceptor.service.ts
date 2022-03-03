import { IHttpRequestResponse } from 'src/app/interface/http-request.interface';
import { SpinnerService } from 'src/app/services/spinner.service';
import { finalize, Observable } from 'rxjs';
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
export class InterceptorService implements HttpInterceptor {
  public token: string = localStorage.getItem('token') || '';
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    req: HttpRequest<IHttpRequestResponse>,
    next: HttpHandler
  ): Observable<HttpEvent<IHttpRequestResponse>> {
    if (!this.token) {
      this.token = localStorage.getItem('token') || '';
    }
    const tokenReq = req.clone({
      headers: new HttpHeaders().set('access-token', this.token),
    });

    this.spinnerService.setSpinner(true);
    return next
      .handle(tokenReq)
      .pipe(finalize(() => this.spinnerService.setSpinner(false)));
  }
}
