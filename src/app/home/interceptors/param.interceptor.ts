import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  // req: HttpRequest<any> 类型为请求
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // 对请求消息进行处理
    // next表示下一个拦截器，类似express中间件
    const modifiedReq = req.clone({
      setParams: { icode: environment.icode }
    });
    return next.handle(modifiedReq);
  }
}
