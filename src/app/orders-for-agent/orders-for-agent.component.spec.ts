import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersForAgentComponent } from './orders-for-agent.component';

describe('OrdersForAgentComponent', () => {
  let component: OrdersForAgentComponent;
  let fixture: ComponentFixture<OrdersForAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersForAgentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersForAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
