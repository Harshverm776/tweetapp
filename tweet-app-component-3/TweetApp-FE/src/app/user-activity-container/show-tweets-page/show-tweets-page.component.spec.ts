import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTweetsPageComponent } from './show-tweets-page.component';

describe('ShowTweetsPageComponent', () => {
  let component: ShowTweetsPageComponent;
  let fixture: ComponentFixture<ShowTweetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTweetsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTweetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
