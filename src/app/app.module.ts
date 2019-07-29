import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule, NotificationInterceptor, ParamInterceptor } from './home';
// HttpClientModule 其实就是一个依赖注入。问题：如何做到引入模块就能起到起来注入的效果的？
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule, AppRoutingModule, HomeModule, HttpClientModule],
  providers: [
    // multi: true 表示 HTTP_INTERCEPTORS 这个对象是用于多个useClass的一个令牌。
    // 就是一个provide对应了好多个useclass。
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
