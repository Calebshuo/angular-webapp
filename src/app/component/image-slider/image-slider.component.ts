import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = [];
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;
  constructor(private rd2: Renderer2) {}

  ngOnInit() {
    console.log('ngOnInit', this.imgSlider);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.imgs);
    this.imgs.forEach(item => {
      this.rd2.setStyle(item.nativeElement, 'height', '100px');
    });
  }
}
