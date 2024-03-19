import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSingleServiceComponent } from './update-single-service.component';

describe('UpdateSingleServiceComponent', () => {
  let component: UpdateSingleServiceComponent;
  let fixture: ComponentFixture<UpdateSingleServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSingleServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSingleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
