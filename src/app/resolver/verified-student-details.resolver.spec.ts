import { TestBed } from '@angular/core/testing';

import { VerifiedStudentDetailsResolverService } from './verified-student-details-resolver.Service';

describe('VerifiedStudentDetailsResolverService', () => {
  let resolver: VerifiedStudentDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(VerifiedStudentDetailsResolverService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
