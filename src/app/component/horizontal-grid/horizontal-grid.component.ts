import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  // username = ''
  private _username = '';
  @Output() usernameChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  /**
   * get / set 是属性访问限定符，如果我们对于属性的读和写有一些逻辑操作
   * 可以利用 get / set 进行处理
   */
  // 第一次set函数里给_username赋值，走了一次get函数，因为和_username有关联，第二次父组件传回username又对_username赋值，又走了一次get函数，所以是两次。
  @Input()
  public get username(): string {
    console.log('get', this._username)
    return this._username;
  }
  
  public set username(value: string) {
    console.log('set value:', value)
    this._username = value;
    this.usernameChange.emit(value);
  }
}
