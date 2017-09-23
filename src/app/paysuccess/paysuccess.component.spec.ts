import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysuccessComponent } from './paysuccess.component';

describe('PaysuccessComponent', () => {
  let component: PaysuccessComponent;
  let fixture: ComponentFixture<PaysuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
