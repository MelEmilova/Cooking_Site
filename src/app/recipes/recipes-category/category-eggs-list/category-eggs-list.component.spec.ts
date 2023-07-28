import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEggsListComponent } from './category-eggs-list.component';

describe('CategoryEggsListComponent', () => {
  let component: CategoryEggsListComponent;
  let fixture: ComponentFixture<CategoryEggsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryEggsListComponent]
    });
    fixture = TestBed.createComponent(CategoryEggsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
