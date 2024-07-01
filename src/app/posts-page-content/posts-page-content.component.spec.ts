import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsPageContentComponent } from './posts-page-content.component';

describe('PostsPageContentComponent', () => {
  let component: PostsPageContentComponent;
  let fixture: ComponentFixture<PostsPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsPageContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
