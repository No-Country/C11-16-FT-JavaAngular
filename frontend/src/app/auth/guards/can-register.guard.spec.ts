import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canRegisterGuard } from './can-register.guard';

describe('canRegisterGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canRegisterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
