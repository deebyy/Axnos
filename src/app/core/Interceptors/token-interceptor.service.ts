import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  {

  constructor() { }
   intercept(request: HttpRequest<any>, next: HttpHandler) {
    let token: any = localStorage.getItem('userToken');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
