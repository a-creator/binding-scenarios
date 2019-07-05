import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child52Component } from './child52.component';

describe('Child52Component', () => {
  let component: Child52Component;
  let fixture: ComponentFixture<Child52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
