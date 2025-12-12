import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortHeaderComponent } from './sort-header.component';

describe('SortHeaderComponent', () => {
  let component: SortHeaderComponent;
  let fixture: ComponentFixture<SortHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortHeaderComponent]
    });
    fixture = TestBed.createComponent(SortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
