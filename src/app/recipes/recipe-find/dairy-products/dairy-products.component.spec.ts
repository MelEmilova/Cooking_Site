import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyProductsComponent } from './dairy-products.component';

describe('DairyProductsComponent', () => {
  let component: DairyProductsComponent;
  let fixture: ComponentFixture<DairyProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DairyProductsComponent]
    });
    fixture = TestBed.createComponent(DairyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
