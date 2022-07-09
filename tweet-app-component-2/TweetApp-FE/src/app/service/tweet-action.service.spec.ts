import { TestBed } from '@angular/core/testing';

import { TweetActionService } from './tweet-action.service';

describe('TweetActionService', () => {
  let service: TweetActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
