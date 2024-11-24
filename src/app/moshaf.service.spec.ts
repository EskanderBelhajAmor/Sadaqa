import { TestBed } from '@angular/core/testing';

import { MoshafService } from './moshaf.service';

describe('MoshafService', () => {
  let service: MoshafService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoshafService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
