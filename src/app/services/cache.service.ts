import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  cacheMap = new Map<any, any>(null);
  constructor() { }

  addToCache(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    const entry = { url, response, addedTime: Date.now() };
    this.cacheMap.set(url, entry);
  }
  getFromCache(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cacheMap.get(url);

    if (!cached) {
      return undefined;
    }

    return (this.cacheMap.get(url)).response;
  }
}
