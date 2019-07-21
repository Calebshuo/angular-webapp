import {
  Directive,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {
  @Input() appGridItemImage = '2rem';
  constructor(private elr: ElementRef, private renderer: Renderer2) {}
  // 属性已经初始化完毕了
  ngOnInit(): void {
    // 声明自己占据模版中的 image 区块
    this.setStyle('grid-area', 'image');
    this.setStyle('width', this.appGridItemImage);
    this.setStyle('height', this.appGridItemImage);
    this.setStyle('object-fit', 'cover');
  }

  private setStyle(styleName: string, styleValue: string | number) {
    this.renderer.setStyle(this.elr.nativeElement, styleName, styleValue);
  }
  // 需要使用一个数组来获取事件的参数
  @HostListener('click', ['$event.target'])
  handleClick(ev) {
    console.log(ev);
  }
}
