import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersTweetsComponent } from './view-users-tweets.component';

describe('ViewUsersTweetsComponent', () => {
  let component: ViewUsersTweetsComponent;
  let fixture: ComponentFixture<ViewUsersTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsersTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsersTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
