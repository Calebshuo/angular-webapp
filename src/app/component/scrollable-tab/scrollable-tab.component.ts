import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Output() tabSelected = new EventEmitter();
  
  constructor() {
    console.log('constructor')
   }
  
   /**
   * 组件的 `@Input` 属性变化时调用
   * @param changes 一个索引对象，用以体现变化之前和当前的值
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('输入变化', changes);
  }
  /**
   * 组件初始化，这个钩子函数中，可以安全的使用组件中的属性和方法
   */
  ngOnInit(): void {
    console.log('组件初始化');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  /**
   * 组件中嵌套的 `<ng-content>` 的内容初始化完成
   */
  ngAfterContentInit(): void {
    console.log('内容初始化');
  }
  /**
   * 组件中嵌套的 `<ng-content>` 的内容的变化脏值检查
   */
  ngAfterContentChecked(): void {
    console.log('内容脏值检查');
  }
  /**
   * 组件视图渲染完成，可以安全的操作视图中的元素, 组件包括其子组件全部挂载完毕，可以拿到dom实例。
   */
  ngAfterViewInit(): void {
    console.log('视图初始化');
  }
  /**
   * 组件视图的脏值检查
   */
  ngAfterViewChecked(): void {
    console.log('视图脏值检查');
  }
  /**
   * 组件销毁时调用，一般发生在父组件 ngIf 或路由变化时
   */
  ngOnDestroy(): void {
    console.log('组件销毁');
  }



  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

}
