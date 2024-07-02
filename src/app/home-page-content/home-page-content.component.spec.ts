import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPageContentComponent } from './home-page-content.component';

describe('IndexPageContentComponent', () => {
  let component: IndexPageContentComponent;
  let fixture: ComponentFixture<IndexPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexPageContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
