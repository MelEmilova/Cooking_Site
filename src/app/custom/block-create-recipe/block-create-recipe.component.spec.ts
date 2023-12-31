import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCreateRecipeComponent } from './block-create-recipe.component';

describe('BlockCreateRecipeComponent', () => {
  let component: BlockCreateRecipeComponent;
  let fixture: ComponentFixture<BlockCreateRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockCreateRecipeComponent]
    });
    fixture = TestBed.createComponent(BlockCreateRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
