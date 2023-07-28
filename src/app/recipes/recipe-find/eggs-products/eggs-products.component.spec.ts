import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsProductsComponent } from './eggs-products.component';

describe('EggsProductsComponent', () => {
  let component: EggsProductsComponent;
  let fixture: ComponentFixture<EggsProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EggsProductsComponent]
    });
    fixture = TestBed.createComponent(EggsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
