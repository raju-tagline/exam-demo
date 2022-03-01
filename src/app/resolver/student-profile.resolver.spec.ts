import { TestBed } from '@angular/core/testing';

import { StudentProfileResolverService } from './student-profile-resolver.service';

describe('StudentProfileResolverService', () => {
  let resolver: StudentProfileResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StudentProfileResolverService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
