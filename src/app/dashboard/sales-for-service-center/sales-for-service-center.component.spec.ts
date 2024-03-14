import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesForServiceCenterComponent } from './sales-for-service-center.component';

describe('SalesForServiceCenterComponent', () => {
  let component: SalesForServiceCenterComponent;
  let fixture: ComponentFixture<SalesForServiceCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesForServiceCenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesForServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
