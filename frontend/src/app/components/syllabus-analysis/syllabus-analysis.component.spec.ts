import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusAnalysisComponent } from './syllabus-analysis.component';

describe('SyllabusAnalysisComponent', () => {
  let component: SyllabusAnalysisComponent;
  let fixture: ComponentFixture<SyllabusAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyllabusAnalysisComponent]
    });
    fixture = TestBed.createComponent(SyllabusAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
