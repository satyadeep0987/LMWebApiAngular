import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsueBookComponent } from './isue-book.component';

describe('IsueBookComponent', () => {
  let component: IsueBookComponent;
  let fixture: ComponentFixture<IsueBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsueBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsueBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
