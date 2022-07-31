import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    const token = this.token.getToken();
    if(token!=null) {
      authReq = request.clone({ setHeaders:{Authorization:'Bearer '+token}});
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProvider = [{ provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true}];
