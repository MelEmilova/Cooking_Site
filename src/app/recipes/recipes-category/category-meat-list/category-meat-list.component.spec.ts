import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMeatListComponent } from './category-meat-list.component';

describe('CategoryMeatListComponent', () => {
  let component: CategoryMeatListComponent;
  let fixture: ComponentFixture<CategoryMeatListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryMeatListComponent]
    });
    fixture = TestBed.createComponent(CategoryMeatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
