import { SpinnerService } from 'src/app/services/spinner.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exam-demo';
  public loadSpinner: boolean = false;

  constructor(public router: Router, private spinnerService: SpinnerService) {
    this.spinnerService.getSpinnerObs().subscribe((value: boolean): void => {
      this.loadSpinner = value;
    });
  }
}
