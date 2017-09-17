import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistBookitemComponent } from './booklist-bookitem.component';

describe('BooklistBookitemComponent', () => {
  let component: BooklistBookitemComponent;
  let fixture: ComponentFixture<BooklistBookitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistBookitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistBookitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
