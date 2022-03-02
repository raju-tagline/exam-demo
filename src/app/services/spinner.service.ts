import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public spinner$ = new BehaviorSubject(true); 
  constructor() { }
  
  public setSpinner(){
    return this.spinner$.asObservable();
  }

  public getSpinner(value:boolean) {
    this.spinner$.next(value);
  }
}
