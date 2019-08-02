import {
  Component,
  OnInit,
  Injector,
  Injectable,
  InjectionToken
} from '@angular/core';
import { merge } from 'rxjs/operators';
import { interval } from 'rxjs';
@Injectable()
class Product {
  constructor(
    private name: string,
    private model: string,
    private color: string,
    private price: number,
    private type: string
  ) {}
}

@Injectable()
class PurchaseOrder {
  constructor(
    private product: Product,
    private amount: number,
    private buyer: string
  ) {}

  public get getProduct(): Product {
    return this.product;
  }
}

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  date: Date;
  obj = { id: '112', name: 'xx手机', model: '全面屏' };
  data = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit() {
    this.date = this.minusMonths(new Date(),2)

    // const product = new Product('大米手机', 'DM-9', '黑色', 2999, '全网通');
    // const purchaseOrder = new PurchaseOrder(product, 10, '张三');
    // console.log('订单', purchaseOrder.getProduct);
    const token = new InjectionToken<string>('config');
    // 自定义注入器
    const injector = Injector.create({
      providers: [
        // 自动帮我们new Product() 了 并且返回一个单例，provide：后面的是标识符类型，必须写具体的class否则ts报错。
        // {
        //   provide: Product,
        //   useClass: Product,
        //   deps: []
        // },
        // 需要给类传参数的话使用下面这种方法。
        {
          provide: Product,
          useFactory: () => {
            return new Product('大米手机', 'DM-9', '黑色', 2999, '全网通');
          },
          deps: []
        },
        // deps表示依赖的类，deps后面加标识符，不写useclass的话默认和provide一样。
        {
          provide: PurchaseOrder,
          deps: [Product]
        },
        // 使用字符串当标识符容易产生冲突
        // {
        //   provide: 'baseUrl',
        //   useValue: 'http://qq.com'
        // },
        {
          provide: token,
          useValue: { baseUrl: 'http://local.dev' }
        }
      ]
    });

    console.log(injector.get(Product));
    console.log(injector.get(PurchaseOrder).getProduct);
    // console.log(injector.get('baseUrl'))
    console.log(injector.get(token));

  // 每2.5秒发出值
const first = interval(2500);
// 每1秒发出值
const second = interval(1000);
// 作为实例方法使用
const example = first.pipe(merge(second));
// 输出: 0,1,0,2....
// const subscribe = example.subscribe(val => console.log(val));
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  minusMonths(date: Date, months: number) {
    const result = new Date(date);
    result.setMonth(result.getMonth() - months);
    return result;
  }
}
