import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicdetailComponent } from './topicdetail.component';

describe('TopicdetailComponent', () => {
  let component: TopicdetailComponent;
  let fixture: ComponentFixture<TopicdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
