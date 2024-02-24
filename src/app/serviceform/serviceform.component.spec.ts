import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceformComponent } from './serviceform.component';

describe('ServiceformComponent', () => {
  let component: ServiceformComponent;
  let fixture: ComponentFixture<ServiceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
