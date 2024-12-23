import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private session: SessionService) { }
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    let headers = request.headers;

    request = request.clone({
      headers,
    });
    var tempToken = sessionStorage.getItem('tempToken');
    // console.log('zzzzzzzzzzzzzzzzzzzzzzzzz');
    if (request.headers.get('Authorization') == 'ignore') {
      let headers = request.headers.delete('Authorization');
      request = request.clone({ headers, });
    } else if (tempToken && !request.headers.get('Authorization')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${tempToken}`,
        },
      });
    } else if (this.session.token && !request.headers.get('Authorization')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.session.token}`,
        },
      });
    }
    // console.log(request);
    return next.handle(request);
  }
}
