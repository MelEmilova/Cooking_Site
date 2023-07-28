import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesProductsComponent } from './legumes-products.component';

describe('LegumesProductsComponent', () => {
  let component: LegumesProductsComponent;
  let fixture: ComponentFixture<LegumesProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegumesProductsComponent]
    });
    fixture = TestBed.createComponent(LegumesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
