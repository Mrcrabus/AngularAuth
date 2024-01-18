import {Injectable} from '@angular/core';
import {User, UserData} from "../models/User";
import {ResponseData} from "../models/ResponseData";
import {BehaviorSubject, Subject} from "rxjs";
import {TokenService} from "./token.service";
import {TooltipService, TooltipType} from "./tooltip.service";
import {Router} from "@angular/router";
import {HttpService} from './http.service';
import {UserService} from "./user.service";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = new BehaviorSubject<boolean>(false);

  constructor(
    private httpService: HttpService,
    private tokenService: TokenService,
    private tooltipService: TooltipService,
    private userService: UserService,
    private router: Router
  ) {
  }

  public login(userData: UserData): void {
    this.httpService.post<ResponseData>('login', {
      login: userData.login,
      password: userData.password
    }).subscribe({
      next: this.processLoginResponse,
      error: this.handleErrorResponse
    })
  }

  public getIsAuth = () => this.isAuth.getValue();

  public checkAuth = () => {
    if (this.tokenService.AccessToken) {

      if (jwtDecode(this.tokenService.AccessToken)['exp']! > Math.floor(Date.now() / 1000)) {

        const user: User = JSON.parse(localStorage.getItem("user") as string);
        this.isAuth.next(true);

        this.userService.setUser(user);

      }
    }
  }

  private processLoginResponse = (value: ResponseData): void => {
    this.tokenService.AccessToken = value.tokens.token;
    this.tokenService.RefreshToken = value.tokens.refreshToken;

    this.isAuth.next(true);

    localStorage.setItem("user", JSON.stringify(value.userInfo));

    this.userService.setUser(value.userInfo);

    this.router.navigate(['/dashboard']);
  }

  private handleErrorResponse = ({error}: any) => {
    this.tooltipService.showTooltip(TooltipType.fail, error?.Message || error?.errors[0]);
  }
}
