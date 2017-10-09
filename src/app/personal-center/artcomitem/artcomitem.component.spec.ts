import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcomitemComponent } from './artcomitem.component';

describe('ArtcomitemComponent', () => {
  let component: ArtcomitemComponent;
  let fixture: ComponentFixture<ArtcomitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtcomitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtcomitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
