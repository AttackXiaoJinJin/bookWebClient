import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmstepComponent } from './confirmstep.component';

describe('ConfirmstepComponent', () => {
  let component: ConfirmstepComponent;
  let fixture: ComponentFixture<ConfirmstepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmstepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
