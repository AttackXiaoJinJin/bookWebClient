import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldatailtopComponent } from './personaldatailtop.component';

describe('PersonaldatailtopComponent', () => {
  let component: PersonaldatailtopComponent;
  let fixture: ComponentFixture<PersonaldatailtopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaldatailtopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaldatailtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
