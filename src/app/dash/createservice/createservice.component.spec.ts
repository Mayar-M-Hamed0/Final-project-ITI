import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateserviceComponent } from './createservice.component';

describe('CreateserviceComponent', () => {
  let component: CreateserviceComponent;
  let fixture: ComponentFixture<CreateserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
