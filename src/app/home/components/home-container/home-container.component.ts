import { Component, OnInit, Inject } from '@angular/core';
import { TopMenu } from 'src/app/shared/component';
import { Router } from '@angular/router';
import { HomeService, token } from '../../services';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  constructor(
    private router: Router,
    private service: HomeService,
    // `@Inject` 这个注解用于找到可注入的标识，
    // 也就是 provide 的那个标识
    // @Inject(token) private baseUrl: string
  ) {}
  topMenus: Observable<TopMenu[]>;
  clock
  ngOnInit(): void {
    this.topMenus = this.service.getTabs()
    // this.clock = interval(1000)
  }

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }
}
