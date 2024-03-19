import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MESSAGEComponent } from './message.component';

describe('MESSAGEComponent', () => {
  let component: MESSAGEComponent;
  let fixture: ComponentFixture<MESSAGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MESSAGEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MESSAGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
