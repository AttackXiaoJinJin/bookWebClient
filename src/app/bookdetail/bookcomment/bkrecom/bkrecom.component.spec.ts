import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkrecomComponent } from './bkrecom.component';

describe('BkrecomComponent', () => {
  let component: BkrecomComponent;
  let fixture: ComponentFixture<BkrecomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkrecomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkrecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
