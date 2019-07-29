import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageSlider, Channel, TopMenu } from 'src/app/shared/component';
import { environment } from 'src/environments/environment';

// 如果使用 providedIn 写法，除了 root 外，其它模块直接写都会导致循环引用
// 所以需要额外写一个 Module，下面就是一个最简化的 module，然后可以在下面
// service 的元数据中写 `providedIn: ServiceModuel`
// @NgModule()
// export class ServiceModule {}
/**
 * 如果采用 `providedIn` ，
 * 这个形式是 Angular v6 之后引入的
 * 这种写法和传统的在 Module 中设置 providers 数组的写法的区别在于
 * 可以让服务在真正被其它组件或服务注入时才编译到最后的 js 中
 * 对于引入第三方类库较多的应用可以有效减小 js 大小
 */
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {}
  getBanners() {
    // 使用泛型规定返回文件的类型，避免业务组件中将string赋值给自定义类型而报错
    // get请求携带params的写法
    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`, {
      params: { icode: `${environment.icode}` }
    });
  }
  getChannels() {
    return this.http.get<Channel[]>(`${environment.baseUrl}/channels`, {
      params: { icode: `${environment.icode}` }
    });
  }
  getTabs() {
    return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`, {
      params: { icode: `${environment.icode}` }
    });
  }
}
