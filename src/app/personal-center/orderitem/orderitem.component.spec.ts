import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderitemComponent } from './orderitem.component';

describe('OrderitemComponent', () => {
  let component: OrderitemComponent;
  let fixture: ComponentFixture<OrderitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
