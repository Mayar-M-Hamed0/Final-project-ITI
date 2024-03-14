import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPerMonthComponent } from './sales-per-month.component';

describe('SalesPerMonthComponent', () => {
  let component: SalesPerMonthComponent;
  let fixture: ComponentFixture<SalesPerMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesPerMonthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesPerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
