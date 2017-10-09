import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcomComponent } from './allcom.component';

describe('AllcomComponent', () => {
  let component: AllcomComponent;
  let fixture: ComponentFixture<AllcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
