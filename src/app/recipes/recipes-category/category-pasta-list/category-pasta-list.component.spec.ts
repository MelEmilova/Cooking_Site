import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPastaListComponent } from './category-pasta-list.component';

describe('CategoryPastaListComponent', () => {
  let component: CategoryPastaListComponent;
  let fixture: ComponentFixture<CategoryPastaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryPastaListComponent]
    });
    fixture = TestBed.createComponent(CategoryPastaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
