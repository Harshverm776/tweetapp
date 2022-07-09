import { TestBed } from '@angular/core/testing';

import { TweetViewService } from './tweet-view.service';

describe('TweetViewService', () => {
  let service: TweetViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
