import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuntopComponent } from './runtop.component';

describe('RuntopComponent', () => {
  let component: RuntopComponent;
  let fixture: ComponentFixture<RuntopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuntopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuntopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
