import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortdetailComponent } from './shortdetail.component';

describe('ShortdetailComponent', () => {
  let component: ShortdetailComponent;
  let fixture: ComponentFixture<ShortdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
