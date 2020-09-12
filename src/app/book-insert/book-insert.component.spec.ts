import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInsertComponent } from './book-insert.component';

describe('BookInsertComponent', () => {
  let component: BookInsertComponent;
  let fixture: ComponentFixture<BookInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
