import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryVegetablesListComponent } from './category-vegetables-list.component';

describe('CategoryVegetablesListComponent', () => {
  let component: CategoryVegetablesListComponent;
  let fixture: ComponentFixture<CategoryVegetablesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryVegetablesListComponent]
    });
    fixture = TestBed.createComponent(CategoryVegetablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
