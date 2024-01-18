import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(
    private cookieService: CookieService) {
  }

  public get AccessToken(): string {
    return this.getCookieData('token');
  }

  public set AccessToken(token: string) {
    this.setCookieData('token', token);
  }

  public get RefreshToken(): string {
    return this.getCookieData('refreshToken');
  }

  public set RefreshToken(token: string) {
    this.setCookieData('refreshToken', token);
  }

  private setCookieData(key: string, value: string): void {
    this.cookieService.set(key, value);
  }

  private getCookieData(key: string): string {
    return this.cookieService.get(key);
  }
}
