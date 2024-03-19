import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllagentComponent } from './allagent.component';

describe('AllagentComponent', () => {
  let component: AllagentComponent;
  let fixture: ComponentFixture<AllagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
