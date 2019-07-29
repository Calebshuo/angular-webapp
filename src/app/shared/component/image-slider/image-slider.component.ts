import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

export interface ImageSlider {
  // id: number;
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  constructor(private rd2: Renderer2) {}
  intervalId;
  ngOnInit() {}

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        // getIndex(++this.selectedIndex)
        ((++this.selectedIndex % this.sliders.length) *
          this.imgSlider.nativeElement.scrollWidth) /
          this.sliders.length
      );
    }, this.intervalBySeconds * 1000);
  }

  // 防止内存泄漏，在此生命周期中主要做一下清理工作。
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  // // 处理当scrollLeft为负数时，数组越界问题没整明白。
  // getIndex(idx: number): number {
  //   return idx >= 0
  //     ? idx % this.sliders.length
  //     : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  // }

  handleScroll(ev) {
    const ratio =
      ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
    // console.log(this.selectedIndex, (ev.target.scrollWidth / this.sliders.length))
  }
}
