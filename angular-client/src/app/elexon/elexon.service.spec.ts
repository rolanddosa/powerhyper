import { TestBed } from '@angular/core/testing';

import { ElexonService } from './elexon.service';

describe('ElexonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElexonService = TestBed.get(ElexonService);
    expect(service).toBeTruthy();
  });
});
