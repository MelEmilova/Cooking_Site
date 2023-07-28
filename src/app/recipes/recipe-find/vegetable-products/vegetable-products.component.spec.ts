import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableProductsComponent } from './vegetable-products.component';

describe('VegetableProductsComponent', () => {
  let component: VegetableProductsComponent;
  let fixture: ComponentFixture<VegetableProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegetableProductsComponent]
    });
    fixture = TestBed.createComponent(VegetableProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
