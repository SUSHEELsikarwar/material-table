import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkFavouriteComponent } from './bookmark-favourite.component';

describe('BookmarkFavouriteComponent', () => {
  let component: BookmarkFavouriteComponent;
  let fixture: ComponentFixture<BookmarkFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkFavouriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
