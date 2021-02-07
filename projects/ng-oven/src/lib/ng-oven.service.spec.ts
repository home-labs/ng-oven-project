import { TestBed } from '@angular/core/testing';

import { NgOvenService } from './ng-oven.service';

describe('NgOvenService', () => {
  let service: NgOvenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgOvenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
