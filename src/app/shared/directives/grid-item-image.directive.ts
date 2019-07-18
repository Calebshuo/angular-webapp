import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {
  @Input() appGridItemImage = '2rem';
  @Input() item
  // elr是使用此指令的dom实例
  constructor(private elr: ElementRef, private renderer: Renderer2) {}

  // ngOnInit类似于vue的created，此生命周期外部的属性如上面的appGridItemImage都已经设置完毕了。
  ngOnInit(): void {
    // 声明自己占据模版中的 image 区块
    this.setStyle('grid-area', 'image');
    this.setStyle('width', this.appGridItemImage);
    this.setStyle('height', this.appGridItemImage);
    this.setStyle('object-fit', 'cover');
    console.log(this.item)
  }

  private setStyle(styleName: string, styleValue: string | number) {
    this.renderer.setStyle(this.elr.nativeElement, styleName, styleValue);
  }
}
