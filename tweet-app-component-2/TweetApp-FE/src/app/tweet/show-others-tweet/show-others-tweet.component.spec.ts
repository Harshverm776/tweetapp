import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOthersTweetComponent } from './show-others-tweet.component';

describe('ShowOthersTweetComponent', () => {
  let component: ShowOthersTweetComponent;
  let fixture: ComponentFixture<ShowOthersTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOthersTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOthersTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
