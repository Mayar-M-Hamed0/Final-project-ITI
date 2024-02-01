import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsServiceComponent } from './details-service.component';

describe('DetailsServiceComponent', () => {
  let component: DetailsServiceComponent;
  let fixture: ComponentFixture<DetailsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
