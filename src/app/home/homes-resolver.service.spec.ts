import { TestBed } from '@angular/core/testing';

import { HomesResolverService } from './homes-resolver.service';

describe('HomesResolverService', () => {
  let service: HomesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
