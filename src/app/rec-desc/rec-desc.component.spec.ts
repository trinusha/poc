/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecDescComponent } from './rec-desc.component';

describe('RecDescComponent', () => {
  let component: RecDescComponent;
  let fixture: ComponentFixture<RecDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
