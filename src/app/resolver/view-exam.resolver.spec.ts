import { TestBed } from '@angular/core/testing';

import { ViewExamResolverService } from './view-exam-resolver.service';

describe('ViewExamResolverService', () => {
  let resolver: ViewExamResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewExamResolverService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
