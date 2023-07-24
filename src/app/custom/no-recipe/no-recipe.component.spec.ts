import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecipeComponent } from './no-recipe.component';

describe('NoRecipeComponent', () => {
  let component: NoRecipeComponent;
  let fixture: ComponentFixture<NoRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoRecipeComponent]
    });
    fixture = TestBed.createComponent(NoRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
