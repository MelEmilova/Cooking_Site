import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFruitsListComponent } from './category-fruits-list.component';

describe('CategoryFruitsListComponent', () => {
  let component: CategoryFruitsListComponent;
  let fixture: ComponentFixture<CategoryFruitsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryFruitsListComponent]
    });
    fixture = TestBed.createComponent(CategoryFruitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
