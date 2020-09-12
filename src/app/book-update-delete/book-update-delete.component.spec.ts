import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUpdateDeleteComponent } from './book-update-delete.component';

describe('BookUpdateDeleteComponent', () => {
  let component: BookUpdateDeleteComponent;
  let fixture: ComponentFixture<BookUpdateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookUpdateDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
