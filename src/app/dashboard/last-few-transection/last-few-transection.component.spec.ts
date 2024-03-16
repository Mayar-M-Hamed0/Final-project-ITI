import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFewTransectionComponent } from './last-few-transection.component';

describe('LastFewTransectionComponent', () => {
  let component: LastFewTransectionComponent;
  let fixture: ComponentFixture<LastFewTransectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastFewTransectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastFewTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
