import { UserDataService } from 'src/app/services/user-data.service';
import { Injectable } from '@angular/core';
import { HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  public token!: string;
  constructor(private userDataService: UserDataService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    this.token = this.userDataService.token;
    const tokenizedReq = req.clone({
      headers: new HttpHeaders().set('access-token', this.token),
    });
    return next.handle(tokenizedReq);
  }
}
