import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  intercept(res: HttpRequest<any>, next: HttpHandler) {
    // 对响应消息进行处理
    // 下面两个操作符还不懂
    return next.handle(res).pipe(
      tap((event: HttpEvent<any>) => {
        if (
          // 类型为响应
          event instanceof HttpResponse &&
          event.status >= 200 &&
          event.status < 300
        ) {
          console.log('[此处假装弹出消息] 请求成功！');
        }
      })
    );
  }
}
