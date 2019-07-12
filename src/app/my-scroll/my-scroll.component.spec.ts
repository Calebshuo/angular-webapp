import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScrollComponent } from './my-scroll.component';

describe('MyScrollComponent', () => {
  let component: MyScrollComponent;
  let fixture: ComponentFixture<MyScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
