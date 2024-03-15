import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeCentersComponent } from './top-three-centers.component';

describe('TopThreeCentersComponent', () => {
  let component: TopThreeCentersComponent;
  let fixture: ComponentFixture<TopThreeCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopThreeCentersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopThreeCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
