import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMilkListComponent } from './category-milk-list.component';

describe('CategoryMilkListComponent', () => {
  let component: CategoryMilkListComponent;
  let fixture: ComponentFixture<CategoryMilkListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryMilkListComponent]
    });
    fixture = TestBed.createComponent(CategoryMilkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
