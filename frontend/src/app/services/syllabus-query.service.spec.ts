import { TestBed } from '@angular/core/testing';

import { SyllabusQueryService } from './syllabus-query.service';

describe('SyllabusQueryService', () => {
  let service: SyllabusQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyllabusQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
