import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortpublishComponent } from './shortpublish.component';

describe('ShortpublishComponent', () => {
  let component: ShortpublishComponent;
  let fixture: ComponentFixture<ShortpublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortpublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortpublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
