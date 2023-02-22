import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab704Component } from './lab704.component';

describe('Lab704Component', () => {
  let component: Lab704Component;
  let fixture: ComponentFixture<Lab704Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab704Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lab704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
