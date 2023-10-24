import { TestBed } from '@angular/core/testing';

import { SyllabusAnalysisService } from './syllabus-analysis.service';

describe('SyllabusAnalysisService', () => {
  let service: SyllabusAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyllabusAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
