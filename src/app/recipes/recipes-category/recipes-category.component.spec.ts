import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesCategoryComponent } from './recipes-category.component';

describe('RecipesCategoryComponent', () => {
  let component: RecipesCategoryComponent;
  let fixture: ComponentFixture<RecipesCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesCategoryComponent]
    });
    fixture = TestBed.createComponent(RecipesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
