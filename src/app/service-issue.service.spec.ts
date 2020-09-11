import { TestBed } from '@angular/core/testing';

import { ServiceIssueService } from './service-issue.service';

describe('ServiceIssueService', () => {
  let service: ServiceIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
