import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcommentComponent } from './shortcomment.component';

describe('ShortcommentComponent', () => {
  let component: ShortcommentComponent;
  let fixture: ComponentFixture<ShortcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
