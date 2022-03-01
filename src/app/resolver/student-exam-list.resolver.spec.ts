import { TestBed } from '@angular/core/testing';

import { StudentExamListResolverService } from './student-exam-list-resolver.service';

describe('StudentExamListResolverService', () => {
  let resolver: StudentExamListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StudentExamListResolverService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
