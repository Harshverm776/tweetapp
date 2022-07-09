import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyTweetComponent } from './show-my-tweet.component';

describe('ShowMyTweetComponent', () => {
  let component: ShowMyTweetComponent;
  let fixture: ComponentFixture<ShowMyTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
