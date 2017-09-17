import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuystepComponent } from './buystep.component';

describe('BuystepComponent', () => {
  let component: BuystepComponent;
  let fixture: ComponentFixture<BuystepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuystepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuystepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
