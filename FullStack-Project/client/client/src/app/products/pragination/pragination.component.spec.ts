import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraginationComponent } from './pragination.component';

describe('PraginationComponent', () => {
  let component: PraginationComponent;
  let fixture: ComponentFixture<PraginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PraginationComponent]
    });
    fixture = TestBed.createComponent(PraginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
