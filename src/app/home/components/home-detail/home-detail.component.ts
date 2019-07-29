import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selectedTabLink;
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('路径参数: ', params);
      this.selectedTabLink = params.get('tabLink');
      this.cd.markForCheck();
    });
    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
    // 业务组件中使用subscribe监听http请求返回的结果
    this.service.getBanners().subscribe(banners => {
      this.imageSliders = banners;
      // 由于使用onpush策略，所以视图依赖项改变后视图并不会更新，所以需要强制更新
      this.cd.markForCheck();
    });
    this.service.getChannels().subscribe(channels => {
      this.channels = channels;
      this.cd.markForCheck();
    });
  }
}
