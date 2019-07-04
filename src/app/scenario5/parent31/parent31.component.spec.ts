import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent31Component } from './parent31.component';

describe('Parent31Component', () => {
  let component: Parent31Component;
  let fixture: ComponentFixture<Parent31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parent31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
