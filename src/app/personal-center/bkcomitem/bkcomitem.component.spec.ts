import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkcomitemComponent } from './bkcomitem.component';

describe('BkcomitemComponent', () => {
  let component: BkcomitemComponent;
  let fixture: ComponentFixture<BkcomitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkcomitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkcomitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
