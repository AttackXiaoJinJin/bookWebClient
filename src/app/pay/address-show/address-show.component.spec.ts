import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressShowComponent } from './address-show.component';

describe('AddressShowComponent', () => {
  let component: AddressShowComponent;
  let fixture: ComponentFixture<AddressShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
