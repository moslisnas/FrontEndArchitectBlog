import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerPathPageContentComponent } from './career-path-page-content.component';

describe('CareerPathPageContentComponent', () => {
  let component: CareerPathPageContentComponent;
  let fixture: ComponentFixture<CareerPathPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerPathPageContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerPathPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
