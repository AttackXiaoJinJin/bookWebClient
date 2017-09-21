import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcommentComponent } from './bookcomment.component';

describe('BookcommentComponent', () => {
  let component: BookcommentComponent;
  let fixture: ComponentFixture<BookcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
