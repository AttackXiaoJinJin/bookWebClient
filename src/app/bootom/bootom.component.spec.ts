import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootomComponent } from './bootom.component';

describe('BootomComponent', () => {
  let component: BootomComponent;
  let fixture: ComponentFixture<BootomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
