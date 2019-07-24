import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  date: Date;
  obj = { id: '112', name: 'xx手机', model: '全面屏' };
  data = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit() {
    this.date = this.minusMonths(new Date(),2)
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  minusMonths(date: Date, months: number) {
    const result = new Date(date);
    result.setMonth(result.getMonth() - months);
    return result;
  }
}
