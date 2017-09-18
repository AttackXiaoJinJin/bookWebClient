import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpublishComponent } from './testpublish.component';

describe('TestpublishComponent', () => {
  let component: TestpublishComponent;
  let fixture: ComponentFixture<TestpublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
