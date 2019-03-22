import { TestBed } from '@angular/core/testing';

import { FweAngularServiceService } from './fwe-angular-service.service';

describe('FweAngularServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FweAngularServiceService = TestBed.get(FweAngularServiceService);
    expect(service).toBeTruthy();
  });
});
