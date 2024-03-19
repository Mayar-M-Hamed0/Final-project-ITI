import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleServiceComponent } from './view-single-service.component';

describe('ViewSingleServiceComponent', () => {
  let component: ViewSingleServiceComponent;
  let fixture: ComponentFixture<ViewSingleServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSingleServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSingleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
