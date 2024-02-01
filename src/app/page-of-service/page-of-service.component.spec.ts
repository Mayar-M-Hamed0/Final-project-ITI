import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOfServiceComponent } from './page-of-service.component';

describe('PageOfServiceComponent', () => {
  let component: PageOfServiceComponent;
  let fixture: ComponentFixture<PageOfServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOfServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
