import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterOrdersComponent } from './center-orders.component';

describe('CenterOrdersComponent', () => {
  let component: CenterOrdersComponent;
  let fixture: ComponentFixture<CenterOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CenterOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
