import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtrecomComponent } from './artrecom.component';

describe('ArtrecomComponent', () => {
  let component: ArtrecomComponent;
  let fixture: ComponentFixture<ArtrecomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtrecomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtrecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
