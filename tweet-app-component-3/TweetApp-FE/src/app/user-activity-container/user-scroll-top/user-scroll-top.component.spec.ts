import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScrollTopComponent } from './user-scroll-top.component';

describe('UserScrollTopComponent', () => {
  let component: UserScrollTopComponent;
  let fixture: ComponentFixture<UserScrollTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserScrollTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserScrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
