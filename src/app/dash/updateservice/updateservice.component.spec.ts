import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateserviceComponent } from './updateservice.component';

describe('UpdateserviceComponent', () => {
  let component: UpdateserviceComponent;
  let fixture: ComponentFixture<UpdateserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
