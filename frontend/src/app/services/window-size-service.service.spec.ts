import { TestBed } from '@angular/core/testing';

import { WindowSizeServiceService } from './window-size-service.service';

describe('WindowSizeServiceService', () => {
  let service: WindowSizeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowSizeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
