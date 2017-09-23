import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayovertimeComponent } from './payovertime.component';

describe('PayovertimeComponent', () => {
  let component: PayovertimeComponent;
  let fixture: ComponentFixture<PayovertimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayovertimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayovertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
