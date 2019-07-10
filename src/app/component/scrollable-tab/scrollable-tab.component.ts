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
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck')
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

}
