import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedImageComponent } from './detailed-image.component';

describe('DetailedImageComponent', () => {
  let component: DetailedImageComponent;
  let fixture: ComponentFixture<DetailedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
