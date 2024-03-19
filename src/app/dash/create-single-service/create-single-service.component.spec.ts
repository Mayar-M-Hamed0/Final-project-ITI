import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSingleServiceComponent } from './create-single-service.component';

describe('CreateSingleServiceComponent', () => {
  let component: CreateSingleServiceComponent;
  let fixture: ComponentFixture<CreateSingleServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSingleServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSingleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
