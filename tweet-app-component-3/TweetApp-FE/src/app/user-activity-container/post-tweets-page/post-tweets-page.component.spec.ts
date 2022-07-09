import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTweetsPageComponent } from './post-tweets-page.component';

describe('PostTweetsPageComponent', () => {
  let component: PostTweetsPageComponent;
  let fixture: ComponentFixture<PostTweetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTweetsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTweetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
