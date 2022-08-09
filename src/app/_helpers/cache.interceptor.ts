import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from '../services/cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  allowedToCache =["https://api2.bombsquad.ga/mods","https://api2.bombsquad.ga/allservers"]
  constructor(private readonly cacheService: CacheService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    if(!this.allowedToCache.includes(req.url)) {
        return next.handle(req);
    }

    // Checked if there is cached data for this URI
    const cachedResponse = this.cacheService.getFromCache(req);
    if (cachedResponse) {
      // In case of parallel requests to same URI,
      // return the request already in progress
      // otherwise return the last cached data
      return (cachedResponse instanceof Observable) ? cachedResponse : of(cachedResponse.clone());
    }
    // If the request of going through for first time
    // then let the request proceed and cache the response
    return next.handle(req)
        .pipe(tap(event => {
            if (event instanceof HttpResponse) {
                this.cacheService.addToCache(req, event);
            }
        }));
  }
}

export const cacheInterceptorProvider = [{ provide: HTTP_INTERCEPTORS, useClass:CacheInterceptor, multi: true}];
