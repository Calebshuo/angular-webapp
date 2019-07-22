import { Component, OnInit, Input } from '@angular/core';

export interface Channel {
  id: number;
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0';
  constructor() {}

  ngOnInit() {}

  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  // 感觉没啥用，不写也没区别。
  // public get templateRows(): string {
  //   return `minmax(auto, max-content)`;
  // }
  
  // 下面规定了每行一共有cols（8）列。按可视范围的宽度计算每列的宽度。0.4rem是grid-gap的宽度。
  public get templateColumns(): string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols *
      0.4}rem) / ${this.displayCols}))`;
  }

  public handleScroll(ev) {
    this.sliderMargin = `0 ${(100 * ev.target.scrollLeft) /
      ev.target.scrollWidth}%`;
  }
}
