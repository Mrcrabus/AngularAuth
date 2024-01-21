import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {UserData} from "../../models/User";
import {ButtonType} from "../button/button.component";
import {InputStyle, InputType} from "../input/input.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = new FormGroup({
    login: new FormControl<string>('', [
      Validators.email,
      Validators.required,
      Validators.minLength(6)
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    remember: new FormControl(true)
  });

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  public get login(): FormControl {
    return this.form.controls.login as FormControl;
  }

  public get password(): FormControl {
    return this.form.controls.password as FormControl;
  }

  public submit(): void {
    this.authService.login(this.form.value as UserData);
  }

  protected readonly ButtonType = ButtonType;
  protected readonly InputType = InputType;
  protected readonly InputStyle = InputStyle;
}
