import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable, interval, Subject, zip } from 'rxjs';
import { map, takeWhile, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountDownComponent implements OnInit {
  @Input() startDate = new Date();
  @Input() futureDate: Date;
  private _MS_PER_SECOND = 1000;

  countDown$: Observable<string>;

  constructor() {}

  ngOnInit() {
    this.countDown$ = this.getCountDownObservable(
      this.startDate,
      this.futureDate
    );

    // 官网上subject的例子
    //demo 1
    // let source$ = interval(500);
    // const proxySubject = new Subject();
    // let subscriber = source$.subscribe( proxySubject );
    // proxySubject.subscribe( (value) => console.log('proxy subscriber', value ) );
    // proxySubject.next( 3 );

    // demo 2
    // const subject = new Subject()
    // const subscription = subject.subscribe( (value) => console.log(value) )
    // subject.next( 1 )
    // subject.next( 2 )
    
    // 每1秒发出值
    const source = interval(1000);
    // 当一个 observable 完成时，便不会再发出更多的值了
    const example = zip(source, source.pipe(take(2)));
    // 输出: [0,0]...[1,1]
    const subscribe = example.subscribe(val => console.log(val));
  }

  private getCountDownObservable(startDate: Date, futureDate: Date) {
    return interval(1000).pipe(
      map(elapse => this.diffInSec(startDate, futureDate) - elapse),
      // 条件表达式为真就订阅这个流，一旦条件不符合就结束这个流、进入complete区块
      takeWhile(gap => gap >= 0),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor((sec / 3600) % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60)
      })),
      // tap操作符不会改变流的形态，一般用于打印结果
      // tap(val => console.log(val)),
      map(({ hour, minute, second }) => `${hour}:${minute}:${second}`)
    );
  }

  private diffInSec = (start: Date, future: Date): number => {
    const diff = future.getTime() - start.getTime();
    return Math.floor(diff / this._MS_PER_SECOND);
  }
}
