import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOvenComponent } from './ng-oven.component';

describe('NgOvenComponent', () => {
  let component: NgOvenComponent;
  let fixture: ComponentFixture<NgOvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
