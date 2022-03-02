import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getItem(key: string) {
    localStorage.getItem(key);
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
