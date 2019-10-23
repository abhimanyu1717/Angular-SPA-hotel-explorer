import { TestBed } from '@angular/core/testing';

import { HtppService } from './htpp.service';

describe('HtppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtppService = TestBed.get(HtppService);
    expect(service).toBeTruthy();
  });
});
