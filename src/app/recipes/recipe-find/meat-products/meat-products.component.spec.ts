import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatProductsComponent } from './meat-products.component';

describe('MeatProductsComponent', () => {
  let component: MeatProductsComponent;
  let fixture: ComponentFixture<MeatProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeatProductsComponent]
    });
    fixture = TestBed.createComponent(MeatProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
