import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  loginEvent = new Subject<void>();
  newUserLogin = new Subject();

  constructor() { }

  signOut(): void {
    this.loginEvent.next();
    window.sessionStorage.clear();
  }

  saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    this.loginEvent.next();
  }

  public getToken():string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user:any):void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.newUserLogin.next(user);
  }

  public getUser():any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user) {
      return JSON.parse(user);
    }
    return {};
  }
}
