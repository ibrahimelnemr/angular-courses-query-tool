import { Component } from '@angular/core';
import { SyllabusAnalysisService } from 'src/app/services/syllabus-analysis.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-syllabus-analysis',
  templateUrl: './syllabus-analysis.component.html',
  styleUrls: ['./syllabus-analysis.component.css']
})
export class SyllabusAnalysisComponent {
  public data: any;

  constructor(private SyllabusAnalysisService: SyllabusAnalysisService) { }

  ngOnInit(): void {
    
  }

  fetchData() {
    this.SyllabusAnalysisService.getSyllabusAnalysis().subscribe(data => {
      this.data = data;
    });
  }

}
