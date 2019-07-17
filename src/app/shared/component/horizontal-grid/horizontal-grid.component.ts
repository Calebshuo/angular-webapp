import { Component, OnInit } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators/index'
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  @Emoji() result = 'hello'
  constructor() { }

  ngOnInit() {
  }
  
  @Confirmable('first handle')
  handleClick() {
    alert('second handle')
  }
}
