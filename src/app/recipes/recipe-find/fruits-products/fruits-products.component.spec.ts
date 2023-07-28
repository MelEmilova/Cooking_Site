import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsProductsComponent } from './fruits-products.component';

describe('FruitsProductsComponent', () => {
  let component: FruitsProductsComponent;
  let fixture: ComponentFixture<FruitsProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitsProductsComponent]
    });
    fixture = TestBed.createComponent(FruitsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
