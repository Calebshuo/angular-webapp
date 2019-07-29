import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { ImageSlider, Channel } from 'src/app/shared/component';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) {}
  // selectedTabLink;
  // imageSliders: ImageSlider[] = [];
  // channels: Channel[] = [];
  selectedTabLink$: Observable<string>;

  imageSliders$: Observable<ImageSlider[]>;

  channels$: Observable<Channel[]>;

  sub: Subscription;

  ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     console.log('路径参数: ', params);
  //     this.selectedTabLink = params.get('tabLink');
  //     this.cd.markForCheck();
  //   });
  //   this.route.queryParamMap.subscribe(params => {
  //     console.log('查询参数', params);
  //   });
  //   // 业务组件中使用subscribe监听http请求返回的结果
  //   this.service.getBanners().subscribe(banners => {
  //     this.imageSliders = banners;
  //     // 由于使用onpush策略，所以视图依赖项改变后视图并不会更新，所以需要强制更新
  //     this.cd.markForCheck();
  //   });
  //   this.service.getChannels().subscribe(channels => {
  //     this.channels = channels;
  //     this.cd.markForCheck();
  //   });
  // }
  // pipe整合操作符
    this.selectedTabLink$ = this.route.paramMap.pipe(
      // 过滤，返回过滤后的值
      filter(params => params.has('tabLink')),
      // map操作符返回操作后的值
      map(params => params.get('tabLink'))
    );
    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
    this.imageSliders$ = this.service.getBanners();
    this.channels$ = this.service.getChannels();
  }

  // 如果不是用async管道来操作的话，需要手动解除事件监听，避免内存泄漏
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
