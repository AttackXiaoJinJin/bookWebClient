import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefunddetailComponent } from './refunddetail.component';

describe('RefunddetailComponent', () => {
  let component: RefunddetailComponent;
  let fixture: ComponentFixture<RefunddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefunddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefunddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
