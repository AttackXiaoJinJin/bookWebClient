import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EverybookComponent } from './everybook.component';

describe('EverybookComponent', () => {
  let component: EverybookComponent;
  let fixture: ComponentFixture<EverybookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EverybookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EverybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
