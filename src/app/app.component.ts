import { SpinnerService } from 'src/app/services/spinner.service';
import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exam-demo';
  public loadSpinner!: boolean;

  constructor(public router: Router, private spinnerService: SpinnerService) {
    this.spinnerService
      .setSpinner().subscribe((value: boolean): void => {
        this.loadSpinner = value;
      });
    this.spinnerService.getSpinner(false);
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     this.loadSpinner = true;
    //   }
    //   if (
    //     event instanceof NavigationEnd ||
    //     event instanceof NavigationCancel ||
    //     event instanceof NavigationError
    //   ) {
    //     this.loadSpinner = false;
    //   }
    // });
  }
}
