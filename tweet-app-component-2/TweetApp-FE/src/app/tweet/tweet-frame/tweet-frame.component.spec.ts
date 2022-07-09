import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetFrameComponent } from './tweet-frame.component';

describe('TweetFrameComponent', () => {
  let component: TweetFrameComponent;
  let fixture: ComponentFixture<TweetFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
