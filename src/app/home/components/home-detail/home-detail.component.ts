import { Component, OnInit } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/component';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: HomeService) {}
  selectedTabLink;
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('路径参数: ', params);
      this.selectedTabLink = params.get('tabLink');
    });
    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
    this.imageSliders = this.service.getBanners();
    this.channels = this.service.getChannels();
  }
}
