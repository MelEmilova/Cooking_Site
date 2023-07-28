import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaProductsComponent } from './pasta-products.component';

describe('PastaProductsComponent', () => {
  let component: PastaProductsComponent;
  let fixture: ComponentFixture<PastaProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastaProductsComponent]
    });
    fixture = TestBed.createComponent(PastaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
