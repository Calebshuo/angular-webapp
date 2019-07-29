import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnInit {
  constructor() {}
  title = '';
  futureDate =new Date(2019,7,30)
  ngOnInit() {}
  handleClick() {}
}
