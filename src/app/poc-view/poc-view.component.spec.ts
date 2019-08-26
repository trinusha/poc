/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PocViewComponent } from './poc-view.component';

describe('PocViewComponent', () => {
  let component: PocViewComponent;
  let fixture: ComponentFixture<PocViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
