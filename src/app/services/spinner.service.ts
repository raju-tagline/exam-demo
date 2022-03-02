import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public spinner$ = new BehaviorSubject<boolean>(false);
  constructor() {}

  public getSpinnerObs() {
    return this.spinner$.asObservable();
  }

  public setSpinner(value: boolean) {
    this.spinner$.next(value);
  }
}
