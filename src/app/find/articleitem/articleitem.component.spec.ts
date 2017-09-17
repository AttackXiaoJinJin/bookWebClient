import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleitemComponent } from './articleitem.component';

describe('ArticleitemComponent', () => {
  let component: ArticleitemComponent;
  let fixture: ComponentFixture<ArticleitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
