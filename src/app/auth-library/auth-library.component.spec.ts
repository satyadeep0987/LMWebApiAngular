import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLibraryComponent } from './auth-library.component';

describe('AuthLibraryComponent', () => {
  let component: AuthLibraryComponent;
  let fixture: ComponentFixture<AuthLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
