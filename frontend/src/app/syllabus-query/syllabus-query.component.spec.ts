import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusQueryComponent } from './syllabus-query.component';

describe('SyllabusQueryComponent', () => {
  let component: SyllabusQueryComponent;
  let fixture: ComponentFixture<SyllabusQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyllabusQueryComponent]
    });
    fixture = TestBed.createComponent(SyllabusQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
