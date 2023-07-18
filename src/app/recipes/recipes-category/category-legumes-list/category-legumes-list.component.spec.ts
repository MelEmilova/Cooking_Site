import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLegumesListComponent } from './category-legumes-list.component';

describe('CategoryLegumesListComponent', () => {
  let component: CategoryLegumesListComponent;
  let fixture: ComponentFixture<CategoryLegumesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryLegumesListComponent]
    });
    fixture = TestBed.createComponent(CategoryLegumesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
