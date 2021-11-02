import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRedditComponent } from './one-reddit.component';

describe('OneRedditComponent', () => {
  let component: OneRedditComponent;
  let fixture: ComponentFixture<OneRedditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneRedditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
