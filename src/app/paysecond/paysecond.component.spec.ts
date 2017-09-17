import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysecondComponent } from './paysecond.component';

describe('PaysecondComponent', () => {
  let component: PaysecondComponent;
  let fixture: ComponentFixture<PaysecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
