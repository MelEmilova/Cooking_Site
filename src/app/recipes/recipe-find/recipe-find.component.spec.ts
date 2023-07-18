import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFindComponent } from './recipe-find.component';

describe('RecipeFindComponent', () => {
  let component: RecipeFindComponent;
  let fixture: ComponentFixture<RecipeFindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeFindComponent]
    });
    fixture = TestBed.createComponent(RecipeFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
