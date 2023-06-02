import { TestBed } from '@angular/core/testing';

import { AuthButtonService } from './auth-button.service';

describe('AuthButtonService', () => {
  let service: AuthButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
