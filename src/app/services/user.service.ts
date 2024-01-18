import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<User| null>(null);

  constructor() {
  }

  public getUser = () => this.user.getValue();

  public setUser = (userData: User) => {
    this.user.next(userData);
  }


}
