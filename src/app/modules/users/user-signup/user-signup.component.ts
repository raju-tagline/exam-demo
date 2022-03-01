import { IUserDataResponse } from '../../../interface/user.interface';
import { UserDataService } from '../../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements OnInit {
  public myRegistrationForm!: FormGroup;
  public submit: boolean = false;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.myRegistrationForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-z]).{6,32}$'),
      ]),
      role: new FormControl(null, Validators.required),
    });
  }

  public onSubmit(): void {
    this.submit = true;
    const data = this.myRegistrationForm.value;

    this.userDataService
      .signUp(data)
      .subscribe((res: IUserDataResponse): void => {
        alert(res.message);
      });
  }
}
