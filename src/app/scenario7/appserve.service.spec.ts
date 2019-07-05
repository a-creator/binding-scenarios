import { TestBed } from '@angular/core/testing';

import { AppserveService } from './appserve.service';

describe('AppserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppserveService = TestBed.get(AppserveService);
    expect(service).toBeTruthy();
  });
});
