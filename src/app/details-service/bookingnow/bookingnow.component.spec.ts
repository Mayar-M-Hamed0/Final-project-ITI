import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingnowComponent } from './bookingnow.component';

describe('BookingnowComponent', () => {
  let component: BookingnowComponent;
  let fixture: ComponentFixture<BookingnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingnowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
