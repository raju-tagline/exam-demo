import { TestBed } from '@angular/core/testing';

import { StudentDetailResolverService } from './student-detail-resolver.service';

describe('StudentDetailResolverService', () => {
  let resolver: StudentDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StudentDetailResolverService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
