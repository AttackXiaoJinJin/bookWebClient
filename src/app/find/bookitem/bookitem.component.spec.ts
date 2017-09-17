import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookitemComponent } from './bookitem.component';

describe('BookitemComponent', () => {
  let component: BookitemComponent;
  let fixture: ComponentFixture<BookitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
