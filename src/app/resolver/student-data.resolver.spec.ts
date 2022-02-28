import { TestBed } from '@angular/core/testing';

import { StudentListResolverService } from './student-list-resolver.service';

describe('StudentListResolverService', () => {
  let resolver: StudentListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StudentListResolverService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
